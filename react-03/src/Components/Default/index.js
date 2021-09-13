import React, { Component } from 'react'

const DEFAULT = 1;
const QR = 2;
const SHINY =3;
class Default extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  onEnterULR=(e)=>{
    this.setState({
      url: e.target.value,
    });
  };
  onChangeShortLinkType =(e)=>{
    e.preventDefault();
    this.props.onChangeShortLinkType(+e.target.value);
  };
  onCreateLink=(e)=>{
    e.preventDefault();
    this.props.onfetchAPI(this.state.url);
    this.setState({
      url: "",
    });
  };
  render() {
    return (
      <form className="row g-3" onSubmit={this.onCreateLink}>
      <div className="col-md-8">
        <label  className="form-label text-primary">
          Enter your URL
        </label>
        <input
          type="text"
          className="form-control fs-4"
          placeholder="example.com"
          onChange={this.onEnterULR}

        />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom04" className="form-label text-secondary">
          Type of short Link
        </label>
        <select 
        className="form-select fs-4 text-info" 
        id="filter" 
        onChange = {this.onChangeShortLinkType}
        >
          <option value={DEFAULT}>Shrtco.de</option>
          <option value ={QR}>9qr.de</option>
          <option value={SHINY}>shiny.link</option>
        </select>
      </div>
      <div className="col-12">
        <button className="btn btn-primary fs-3" type="submit">
          Create Link
        </button>
      </div>
    </form>
    )
  }
}

export default Default;

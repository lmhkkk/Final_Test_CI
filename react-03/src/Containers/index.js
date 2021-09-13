import React, { Component } from "react";
import Default from "../Components/Default";
import Loading from "../Components/Loading";
import Result from "../Components/Result";
import ShortenLinkAPI from "../Services/service";
import "./Home.css";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortenLinkdata: {},
      isShownResult: false,
      isLoading:false,
      shortenLinkType: 1,
    };
  }
  onfetchAPI = async (url) => {
    try {
      this.setState({
        isLoading:true,
      })
      const response = await ShortenLinkAPI.onfetchAPI(url);
      console.log(response);
      this.setState({
        shortenLinkdata: response.data,
        isShownResult: true,
        isLoading:false,
      });
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  onChangeShortLinkType=(msg)=>{
    this.setState({
      shortenLinkType: msg,
    })
  }
  render() {
    const {isShownResult,isLoading,shortenLinkdata,shortenLinkType} = this.state;
    return (
      <>
        <div className="title">
          <p className="my-5 pt-5 text-center text-warning">
            URL<span className="title-style">shorten</span>Application
          </p>
        </div>
        <div className="d-flex justify-content-center my-5 ">
          <div className="form-display">
            <Default onfetchAPI={this.onfetchAPI} onChangeShortLinkType={this.onChangeShortLinkType} />
          </div>
        </div>
        <Loading isLoading={isLoading} />
        {isShownResult?<Result shortenLinkdata={shortenLinkdata} shortenLinkType={shortenLinkType}/>:null}
      </>
    );
  }
}
export default Home;

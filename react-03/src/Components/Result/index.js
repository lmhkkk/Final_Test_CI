import React, { Component } from "react";
import "./Result.css"

class Result extends Component {

  render() {
    const {shortenLinkdata,shortenLinkType} = this.props;
    const{short_link,short_link2,short_link3} = shortenLinkdata.result;
    let linkResult = "";
    switch(shortenLinkType){
      case 2:
        linkResult = short_link2;
        break;
      case 3:
        linkResult = short_link3;
        break;
      default:
        linkResult = short_link;
    }
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="result-display ">
          <p className="text-info fs-1">Your Shorten Link</p>
          <p className="result-url form-control text-success ">{linkResult}</p>
        </div>
      </div>
    );
  }
}

export default Result;

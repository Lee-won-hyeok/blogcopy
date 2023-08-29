import React, { Component } from "react";
import logo from "./dcu-logo.png";

export default class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        DCU_link: "https://www.cu.ac.kr/index.php",
        address: "대구가톨릭대학교 성카타리나관 2층",
        TEL: "T 053 850-3921",
        FB: "https://www.facebook.com/dcucatolic",
        instagram: "https://www.instagram.com/dcu_intermediaart/",
        blog: "https://cafe.naver.com/dcufineart",
      },
    };
  }
  render() {
    return (
      <div className="footer">
        <div>
          <a href={this.state.info.DCU_link} target="_blank" rel="noreferrer">
            <img src={logo} alt="DCU" />
          </a>
          <div>
            <p>인터미디어아트과</p>
            <p>{this.state.info.address}</p>
            <p>{this.state.info.TEL}</p>
          </div>
          <div className="buttons">
            <a href={this.state.info.FB}>FB</a>
            <a href={this.state.info.instagram}>INSTA</a>
            <a href={this.state.info.blog}>BLOG</a>
          </div>
        </div>
      </div>
    );
  }
}

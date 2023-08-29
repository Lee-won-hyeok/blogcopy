import React, { Component } from "react";
import logo from "./title_image.png";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
      menus: [
        "학과소개",
        "교육과정",
        "입학안내",
        "국제교류",
        "교강사",
        "졸업생 인터뷰",
        "학과뉴스",
        "갤러리",
      ],
    };
  }
  render() {
    var i = [];
    for (var idx = 0; idx < this.state.menus.length; idx++) {
      i.push(
        <ul key={idx}>
          <a href={"/proxy/3000/" + this.state.menus[idx]}>
            {this.state.menus[idx]}
          </a>
        </ul>
      );
    }
    return (
      <div className="navbar">
        <a href="/proxy/3000">
          <img src={logo} alt="DCU" />
        </a>
        <div className="menus">{i}</div>
        <div className="menus">
          <ul>
            <a
              onClick={function (e) {
                e.preventDefault();
                this.setState({
                  detail: !this.state.detail,
                });
              }.bind(this)}
              href="/"
            >
              {this.state.detail ? "CLOSE" : "MENU"}
            </a>
          </ul>
        </div>
        <div
          className="dropdown"
          style={{ maxHeight: this.state.detail ? "450px" : "0px" }}
        >
          <div>{i}</div>
        </div>
      </div>
    );
  }
}

export default navbar;

import React, { Component } from "react";
const mystyle1 = {
  witdth: "100%",
  height: "40%",
  marginLeft: "2%",
  marginTop: "1%",
};

export class Logo extends Component {
  render() {
    return (
      <>
        <div className="py-3" style={mystyle1}>
          <img
            src="https:hipfig.b-cdn.net/templates/hipfig/images/Home_page.png"
            height="60px"
            width="220px"
            alt="logo"
          />
        </div>
      </>
    );
  }
}

export default Logo;

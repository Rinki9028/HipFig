import React, { Component } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
const mystyle = {
  witdth: "70%",
  height: "40%",
  marginLeft: "14%",
  marginTop: "-3%",
};
export class Header extends Component {
  render() {
    return (
      <>
        <div>
          <Logo />
        </div>
        <div>
          <div style={mystyle}>
            <Navbar />
          </div>
        </div>
      </>
    );
  }
}
export default Header;

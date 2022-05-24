import React, { Component } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <div className="topnav-right">
          <Link to="#"><b>HOME</b></Link>
          <Link to="#"><b>ABOUT US</b></Link>
          <Link to="#"><b>CREATE ITINERARY</b></Link>
          <Link to="#"><b>DESTINATION</b></Link>
                   <form className="d-flex me-5">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
      </form>
        </div>
      </div>
    </>
  );
};
export default Navbar;

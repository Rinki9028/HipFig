import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export class Login extends Component {
  render() {
    return (
      <>
        <div className="container-fluid py-3" style={{ background: "#B7EAFA" }}>
          <p style={{ marginLeft: "25%", color: "#0E90F6" }}>Please Login</p>
          <div
            className="container card mb-3 py-3"
            style={{ width: "50%", borderRadius: "15px" }}
          >
            <div className="row">
              <div className="col-sm-6">
                <div
                  className="container card mb-3 py-5"
                  style={{ width: "100%", borderRadius: "8px" }}
                >
                  <form>
                    <label>
                      <b>Email Address*</b>
                      <br />
                      <input type="text" name="name" />
                    </label>
                    <br />
                    <b>Password *</b>
                    <br />
                    <input type="text" name="name" />
                    <br />
                    <b>Remember me</b>
                    <br />
                    <Button
                      style={{
                        backgroundColor: "#2FA0C4 ",
                        border: "2px solid #0E90F6",
                        width: "30%",
                        borderRadius: "8px",
                        color: "white",
                      }}
                      variant="contained"
                    >
                      Log In
                    </Button>
                  </form>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="container card mb-3 py-5"
                  style={{ width: "98%", height: "95%", borderRadius: "8px" }}
                >
                  <b style={{ textAlign: "center" }}>Need an Account?</b>
                  <Button
                    style={{
                      backgroundColor: "#2FA0C4 ",
                      border: "2px solid #0E90F6",
                      width: "35%",
                      borderRadius: "12px",
                      color: "white",
                      height: "55px",
                      marginLeft: "30%",
                      marginTop: "10%",
                    }}
                    variant="contained"
                  >
                    New User
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;

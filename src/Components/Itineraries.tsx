import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Post from "./Post";

export class Itineraries extends Component {
  render() {
    return (
      <>
        <div className="container py-5" style={{ marginLeft: "25%" }}>
          <div className="row">
            <div className="col-sm-4">
              <div
                className="button1 py-3"
                style={{ textAlign: "center", width: "100%" }}
              >
                <b>Edit Search Critriea</b>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="button2 py-3"
                style={{ textAlign: "center", width: "100%" }}
              >
                <b>Save My Iternery</b>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="container" style={{ marginTop: "-3%" }}>
          <Stack direction="row" spacing={2}>
            <div className="col-sm-3 py-3">
              <Button
                style={{
                  backgroundColor: "#17B8B5",
                  width: "50%",
                  border: "2px solid #0E90F6",
                }}
                variant="contained"
              >
                itinerary
              </Button>
              <Button
                style={{
                  backgroundColor: "#C0C0C0",
                  border: "2px solid #0E90F6",
                  width: "50%",
                }}
                variant="contained"
              >
                Map
              </Button>
            </div>
          </Stack>
          <hr style={{ marginTop: "-1%" }} />
        </div>
        <div
          className="container py-4"
          style={{ border: "2px solid #D2D3D4", width:'66%',borderRadius: "8px" }}
        >
          <div className="container card mb-3 py-3" style={{width: "95%",borderRadius: "15px"}}>
            <div className="row g-0">
              <div className="col-md-3">
                <div className="card-body">
                  <p className="card-title">
                    <b>Arrive by :</b>03:58 pm
                  </p>
                  <br />
                  <p className="card-text">
                    <b>Leave by : </b>5:28 pm
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <Post />
              </div>
            </div>
          </div>
          <div className="container card mb-3 py-3" style={{width: "95%",borderRadius: "15px"}}>
            <div className="row g-0">
              <div className="col-md-3">
                <div className="card-body">
                  <p className="card-title">
                    <b>Arrive by :</b>03:58 pm
                  </p>
                  <br />
                  <p className="card-text">
                    <b>Leave by : </b>5:28 pm
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <Post />
              </div>
            </div>
          </div>
          <div className="container card mb-3 py-3" style={{width: "95%",borderRadius: "15px"}}>
            <div className="row g-0">
              <div className="col-md-3">
                <div className="card-body">
                  <p className="card-title">
                    <b>Arrive by :</b>03:58 pm
                  </p>
                  <br />
                  <p className="card-text">
                    <b>Leave by : </b>5:28 pm
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <Post />
              </div>
            </div>
          </div>
          <div className="container card mb-3 py-3" style={{width: "95%",borderRadius: "15px"}}>
            <div className="row g-0">
              <div className="col-md-3">
                <div className="card-body">
                  <p className="card-title">
                    <b>Arrive by :</b>03:58 pm
                  </p>
                  <br />
                  <p className="card-text">
                    <b>Leave by : </b>5:28 pm
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <Post />
              </div>
            </div>
          </div>
          <div className="container card mb-3 py-3" style={{width: "95%",borderRadius: "15px"}}>
            <div className="row g-0">
              <div className="col-md-3">
                <div className="card-body">
                  <p className="card-title">
                    <b>Arrive by :</b>03:58 pm
                  </p>
                  <br />
                  <p className="card-text">
                    <b>Leave by : </b>5:28 pm
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <Post />
              </div>
            </div>
          </div>
          </div>
        <div className="py-1"></div>
      </>
    );
  }
}

export default Itineraries;

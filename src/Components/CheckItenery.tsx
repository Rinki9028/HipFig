import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DateTime from "./DateTime";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Itineraries from "./Itineraries";
import Login from "./Login";
import Variable from "./Variable";

export class CheckItenery extends Component {
  render() {
    return (
      <>
        <div
          className="container-fluid py-4"
          style={{
            border: "1px solid #D2D3D4",
            borderRadius: "8px",
            marginLeft: "2%",
            width: "95%",
          }}
        >
          <div className="py-3" style={{ marginLeft: "1%" }}>
            <h1>Create my Day Itinerary</h1>
            <br />
            <h3>
              City :<b> Kuala-lumpur</b>
            </h3>
            <br />
            <p>Starting Address/Location (in the same City area) : *</p>
            <TextField
              style={{ width: "25%", height: "5%" }}
              id="outlined-search"
              label="Enter a location"
              type="search"
              variant="outlined"
            />
            <br />
            <a href="">Get Location</a>
            <br />
            <br />
            <FormLabel component="legend">Mode of Travel : *</FormLabel>
            <FormControl component="fieldset">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  value="end"
                  control={<Radio color="primary" />}
                  label="By Car"
                />
                <FormControlLabel
                  value="nd"
                  control={<Radio color="primary" />}
                  label="Walking"
                />
                <FormControlLabel
                  value="d"
                  control={<Radio color="primary" />}
                  label="Public Transit"
                />
              </RadioGroup>
            </FormControl>
            <p>DateTime</p>
            <DateTime />
            <br />
            <br />
            <p style={{ fontSize: "170%" }}>
              Choose Attractions in <b>Dubai</b> (Min 2 and Max 6) *
            </p>
            <div className="row" style={{ width: "70%" }}>
              <div className="col-md-2">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "190px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                  <Stack direction="row" spacing={2}>
                    <div className="col-sm-3">
                      <Button
                        style={{
                          backgroundColor: "#2A2A2A",
                          width: "190px",
                          height: "150%",
                          color: "white",
                          borderRadius: "8px",
                        }}
                        variant="contained"
                      >
                        itinerary
                      </Button>
                    </div>
                  </Stack>
                  <br />
                  <a
                    href="https://www.hipfig.com/kuala-lumpur/kuala-lumpur-petronas-twin-towers"
                    target="blank"
                  >
                    Know more...
                  </a>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "190px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                  <Stack direction="row" spacing={2}>
                    <div className="col-sm-3">
                      <Button
                        style={{
                          backgroundColor: "#2A2A2A",
                          width: "190px",
                          height: "150%",
                          color: "white",
                          borderRadius: "8px",
                        }}
                        variant="contained"
                      >
                        itinerary
                      </Button>
                    </div>
                  </Stack>
                  <br />
                  <a
                    href="https://www.hipfig.com/kuala-lumpur/kuala-lumpur-petronas-twin-towers"
                    target="blank"
                  >
                    Know more...
                  </a>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "190px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                  <Stack direction="row" spacing={2}>
                    <div className="col-sm-3">
                      <Button
                        style={{
                          backgroundColor: "#2A2A2A",
                          width: "190px",
                          height: "150%",
                          color: "white",
                          borderRadius: "8px",
                        }}
                        variant="contained"
                      >
                        itinerary
                      </Button>
                    </div>
                  </Stack>
                  <br />
                  <a
                    href="https://www.hipfig.com/kuala-lumpur/kuala-lumpur-petronas-twin-towers"
                    target="blank"
                  >
                    Know more...
                  </a>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card-body">
                  <img
                    src="https://www.hipfig.com/templates/hipfig/images/itinerary/dubai/dubai-default-start.png"
                    alt="images"
                    style={{
                      width: "190px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                  <Stack direction="row" spacing={2}>
                    <div className="col-sm-3">
                      <Button
                        style={{
                          backgroundColor: "#2A2A2A",
                          width: "190px",
                          height: "150%",
                          color: "white",
                          borderRadius: "8px",
                        }}
                        variant="contained"
                      >
                        itinerary
                      </Button>
                    </div>
                  </Stack>
                  <br />
                  <a
                    href="https://www.hipfig.com/kuala-lumpur/kuala-lumpur-petronas-twin-towers"
                    target="blank"
                  >
                    Know more...
                  </a>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="button4 py-3">
                    <a href="Itineraries" style={{textDecoration:"none"}}> Save My Iternery</a>
                  </div>
            </div>
          </div>
        </div>
        <Itineraries />
        <Login/>
        <div className="row py-4">
          <div className="col-sm-6"><Variable /></div>
          <div className="col-sm-6"><Variable /></div>
          {/* <div className="col-sm-6"><Variable /></div> */}
          {/* <div className="col-sm-2"><Variable /></div>
          <div className="col-sm-2"><Variable /></div>
          <div className="col-sm-2"><Variable /></div> */}
          </div>
        <div className="container py-5"></div>
      </>
    );
  }
  }

export default CheckItenery;

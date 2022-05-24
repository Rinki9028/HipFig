import React, { Component } from "react";

export class HipFig extends Component {
  render() {
    return (
      <div className="py-5" style={{ marginLeft: "4%" }}>
        <video width="335" height="220" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <video width="335" height="220" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <video width="335" height="220" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <video width="335" height="220" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <video width="335" height="220" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        </div>
    );
  }
}

export default HipFig;

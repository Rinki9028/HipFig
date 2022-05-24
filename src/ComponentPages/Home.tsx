import React, { Component } from "react";
export class Home extends Component {
  render() {
    return (
      <>
        <div style={{background: "#BFDDFA",height:"600px"}}>
          <h1 className="container-fluid header py-5">
            <b>North America and Asia - Complete City Travel Guides with Videos for
            Travelers</b>
          </h1>
        
 <div className="container-fluid">
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

        <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
        </ol>
      
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="images/1img.jpg" className="d-block" height="500px" width="100%" alt="Slide 1"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some demonstrative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/images/2img.jpg" className="d-block" height="500px" width="100%" alt="Slide 2"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some demonstrative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/images/3img.jpg" className="d-block" height="500px" width="100%" alt="Slide 3"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some demonstrative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/images/4img.jpg" className="d-block" height="500px" width="100%" alt="Slide 4"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some demonstrative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/images/5img.jpg" className="d-block" height="500px" width="100%" alt="Slide 5"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some demonstrative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </a>
    </div> 
    </div>
    <div>
    <h1 className="container-fluid header py-5">
            <b>Instantly Watch on HipFig Travel Channel in 2021 - Our Latest Travel Video Guides</b>
          </h1></div>
</div>
<div className="py-5"></div>
</>
      
    );
  }
}

export default Home;

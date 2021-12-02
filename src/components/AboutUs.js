import React from "react";

function AboutUs() {
  return (
    <div className="aboutus">
      <div className="story">
        <div>
          <h3>OUR STORY</h3>
          <h1>
            Testinium is an all-in-one open-source based, enterprise ready
            platform unifies all the functionality you need to shift testing
            left - and right.
          </h1>
          <p>
            We empower millions of customers around the world to make their
            softwares perfect with our smart testing solutions, award-winning
            support, and inspiring technologies. Founded in 2010 and
            headquartered in Istanbul with additional offices in Amsterdam,
            London and Berlin.
          </p>
        </div>
        <div>
          <img src={"images/our-story.jpeg"} alt="our story"></img>
        </div>
      </div>
      <div className="testinium">
        <div className="card">
          <div className="image-container">
            <img src={"images/card-1.jpg"} alt="mission"></img>
          </div>
          <div>
            <h3>TESTINIUM MISSION</h3>
            <p>
              is creating tools that will simplify the application development
              and testing processes for developers
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={"images/card-3.jpg"} alt="careers"></img>
          </div>
          <div>
            <h3>TESTINIUM VISION</h3>
            <p>
              Testinium believes in the human power that aims to create and
              produce. That's why we invested and will invested in people
              constantly.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={"images/card-2.jpg"} alt="vision"></img>
          </div>
          <div>
            <h3>TESTINIUM CAREERS</h3>
            <p>Take your place in Testinium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

import background2 from "./Images/background2.png";
import bulb from "./Images/bulb.png";
import sun from "./Images/sun.png";
import comments from "./Images/comments.png";
import { Grid } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const section2 = () => {
  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "contain",
      }}
    >
      <h2 className="aboutus">ABOUT US</h2>
      <h1 className="goal"> Our goal is to </h1>
      <h1 className="goal"> make your life easier</h1>
      <Grid className="cards" container spacing={3}>
        <Grid item xs={3}>
          <Card
            className="card1"
            style={{
              borderRadius: 20,
              width: 300,
              height: 250,
              backgroundColor: "white",
            }}
          >
            <CardContent>
              <img className="bulb" src={bulb} alt="bulb" />
              <h1 style={{ fontSize: 17 }} className="title1">
                Create idea
              </h1>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="body1"
              >
                Lorem ipsum dolor it amet consectetur adipisicing elit Ea
                laudantium empore nobis quisquam.
              </h2>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            className="card2"
            style={{
              borderRadius: 20,
              width: 300,
              height: 250,
              backgroundColor: "white",
            }}
          >
            <CardContent>
              <img className="sun" src={sun} alt="sun" />
              <h1 style={{ fontSize: 17 }} className="title2">
                Smart Solutions
              </h1>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="body2"
              >
                Lorem ipsum dolor it amet consectetur adipisicing elit Ea
                laudantium empore nobis quisquam.
              </h2>
            </CardContent>
          </Card>
        </Grid>
        <Card
          className="card3"
          style={{
            borderRadius: 20,
            width: 300,
            height: 250,
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <img className="comments" src={comments} alt="comments" />
            <h1 style={{ fontSize: 17 }} className="title3">
              Free Support
            </h1>
            <h2
              variant="h5"
              component="h2"
              style={{ fontSize: 15 }}
              className="body3"
            >
              Lorem ipsum dolor it amet consectetur adipisicing elit Ea
              laudantium empore nobis quisquam.
            </h2>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};
// Lorem ipsum dolor it amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.
export default section2;

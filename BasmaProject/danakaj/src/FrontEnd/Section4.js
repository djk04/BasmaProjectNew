import { Grid } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import wordpress from "./Images/wordpress.png";
import vector from "./Images/vector.png";
import search from "./Images/search.png";
import mobile from "./Images/mobile.png";
import bulb from "./Images/bulb.png";
import copywrite from "./Images/copywrite.png";

import background2 from "./Images/background2.png";
const Section4 = () => {
  return (
    <div
      className="section4"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "contain",
      }}
    >
      <h2 className="aboutus">SERVICES</h2>
      <h1 className="goal">Choose what</h1>
      <h1 className="goal"> you like our services</h1>
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
              <img className="bulb" src={wordpress} alt="wordpress" />
              <h1 style={{ fontSize: 17 }} className="title1">
                WordPress
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
              <img className="sun" src={vector} alt="vector" />
              <h1 style={{ fontSize: 17 }} className="title2">
                Logo Design
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
            <img className="comments" src={search} alt="search" />
            <h1 style={{ fontSize: 17 }} className="title3">
              Online Seo
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
              <img className="bulb" src={mobile} alt="mobile" />
              <h1 style={{ fontSize: 17 }} className="title1">
                Mobile Apps
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
              <img className="sun" src={copywrite} alt="copywrite" />
              <h1 style={{ fontSize: 17 }} className="title2">
                Copywriting
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
            <img className="comments" src={bulb} alt="bulb" />
            <h1 style={{ fontSize: 17 }} className="title3">
              Brand Strategy
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

export default Section4;

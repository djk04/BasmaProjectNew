import { Grid } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const Section5 = () => {
  return (
    <div className="section5">
      <h2 className="aboutus">PRICING TABLE</h2>
      <h1 className="goal"> Your plance, your choice </h1>
      <Grid className="cards" container spacing={3}>
        <Grid item xs={3}>
          <Card
            className="basic"
            style={{
              borderRadius: 20,
              width: 250,
              height: 320,
              backgroundColor: "#F4F3F5",
            }}
          >
            <CardContent>
              <h1 style={{ fontSize: 17 }} className="title1">
                Basic
              </h1>
              <h1 className="basicprice">$15</h1>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody"
              >
                Responsive
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody2"
              >
                Documentaction
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Support
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Multimedia
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Creative
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Modern
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Free Update
              </h2>
            </CardContent>
          </Card>
          <button className="basicbutton">Get Started</button>
        </Grid>
        <Grid item xs={3}>
          <Card
            className="standard"
            style={{
              borderRadius: 20,
              width: 250,
              height: 320,
              backgroundColor: "#614CAB",
            }}
          >
            <CardContent>
              <h1 style={{ fontSize: 17 }} className="standardtitle">
                Standard
              </h1>
              <h1 className="standardprice">$50</h1>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="standardbody"
              >
                Responsive
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="standardbody"
              >
                Documentaction
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="standardbody"
              >
                Support
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="standardbody"
              >
                Multimedia
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Creative
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Modern
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Free Update
              </h2>
            </CardContent>
          </Card>
          <button className="standardbutton">Get Started</button>
        </Grid>
        <Grid item xs={3}>
          <Card
            className="premium"
            style={{
              borderRadius: 20,
              width: 250,
              height: 320,
              backgroundColor: "#F4F3F5",
            }}
          >
            <CardContent>
              <h1 style={{ fontSize: 17 }} className="title1">
                Premium
              </h1>
              <h1 className="basicprice">$50</h1>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody"
              >
                Responsive
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody2"
              >
                Documentaction
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Support
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Multimedia
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Creative
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Modern
              </h2>
              <h2
                variant="h5"
                component="h2"
                style={{ fontSize: 15 }}
                className="basicbody3"
              >
                Free Update
              </h2>
            </CardContent>
          </Card>
          <button className="premiumbutton">Get Started</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section5;

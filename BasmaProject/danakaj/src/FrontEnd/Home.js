import React from "react";
import { Grid } from "@material-ui/core";
import banner from "./Images/banner.png";
import background2 from "./Images/background2.png";
const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h3 className="heading">WELCOME TO OYA</h3>
        <h2 className="heading2"> A DIGITAL AGENCY</h2>
        <button className="button1" display="flex">
          {" "}
          Get Started{" "}
        </button>
        <button className="button2" style={{ color: "black" }}>
          {" "}
          Get Started
        </button>
      </Grid>

      <Grid item xs={12}>
        <img className="imagebanner" src={banner} alt="banner" />
      </Grid>
    </Grid>
  );
};

export default Home;

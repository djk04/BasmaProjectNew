import portfolio1 from "./Images/portfolio1.jpeg";
import portfolio2 from "./Images/portfolio2.jpeg";
import portfolio3 from "./Images/portfolio3.jpeg";
import portfolio4 from "./Images/portfolio4.jpeg";
import portfolio5 from "./Images/portfolio5.jpeg";
import portfolio6 from "./Images/portfolio6.jpeg";
import { Grid } from "@material-ui/core";
import React from "react";

const Section3 = () => {
  return (
    <div className="portfolio">
      <h2 className="portfoliox">PORTFOLIO</h2>
      <h1 className="text1"> See our</h1>
      <h1 className="text2"> amazing portfolio</h1>
      <h1 className="text1"> collection</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <button className="buttonx">SHOW ALL</button>
        </Grid>
        <Grid item xs={3}>
          <button className="buttony">GRAPHIC</button>
        </Grid>
        <Grid item xs={3}>
          <button className="buttonz">LANDING</button>
        </Grid>
        <Grid item xs={3}>
          <button className="buttonk">ART DESIGN</button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img className="portfolio1" src={portfolio1} alt="portfolio1" />
        </Grid>
        <Grid item xs={3}>
          <img className="portfolio2" src={portfolio2} alt="portfolio2" />
        </Grid>
        <Grid item xs={3}>
          <img className="portfolio3" src={portfolio3} alt="portfolio3" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img className="portfolio4" src={portfolio4} alt="portfolio4" />
        </Grid>
        <Grid item xs={3}>
          <img className="portfolio5" src={portfolio5} alt="portfolio5" />
        </Grid>
        <Grid item xs={3}>
          <img className="portfolio6" src={portfolio6} alt="portfolio6" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Section3;

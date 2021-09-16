import { Grid } from "@material-ui/core";
const Section6 = () => {
  return (
    <div className="section6">
      <Grid container spacing={3}>
        <Grid item xs={6} className="firstsection">
          <h2 className="address">Address</h2>
          <h3 className="addressvalue">
            121 King Street, Melbourne Victoria 3000 Australia
          </h3>
          <h2 className="address">Phone</h2>
          <h3 className="addressvalue">+61 3 8376 6284</h3>
          <h2 className="address">Email</h2>
          <h3 className="addressvalue">support@example.com</h3>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3}>
              <Grid item xs={6}>
            <form>
              <input type="text" required placeholder="Name" />
            </form>
            </Grid>
            <Grid item xs={6}>
            <form action="">
              <input type="email" required placeholder="Email Address" />
            </form>
            </Grid>
          </Grid>
          <form action="">
              <input type="text" required placeholder="Subject" />
            </form>
            <form action="">
              <input className="message" type="text" required placeholder="Message" />
            </form>
            <button className="formbutton">Send Message</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section6;

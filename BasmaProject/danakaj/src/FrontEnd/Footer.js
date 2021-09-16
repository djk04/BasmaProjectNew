// might be said
import { Grid } from "@material-ui/core";
import logo2 from './Images/logo2.png';
const Footer = () => {
    return ( 
        <div className="footer">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img className="logo2" src={logo2} alt="logo2"/>
                    <h2
              variant="h5"
              component="h2"
              style={{ fontSize: 15 }}
              className="footerbody"
            >
              Lorem ipsum dolor it amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.
            </h2>
                </Grid>
                <Grid item xs={3}>
                    <h1 className="title" style={{ fontSize: 25 }}>
                        About 
                    </h1>
                    {/* I got errors for adding the ">>" sign, i truly couldnt figure out another way to display them */}
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  About us
                    </h1>
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  Contact
                    </h1>
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  Portfolio
                    </h1>
                </Grid>
                <Grid item xs={3}>
                    <h1 className="title" style={{ fontSize: 25 }}>
                        Support
                    </h1>
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  support@example.com
                    </h1>
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  +61 3 8376 6284
                    </h1>
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  Services
                    </h1>
                </Grid>
                <Grid item xs={3}>
                    <h1 className="title" style={{ fontSize: 25 }}>
                        Follow Us
                    </h1>
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  support@example.com
                    </h1>
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  +61 3 8376 6284
                    </h1>
                    <h1 className="about"style={{ fontSize: 17 }}>
                        >>  Services
                    </h1>
                </Grid>
            </Grid>
            <h1 className="line">

                    </h1>
            <h1 className="credits">
            Copyright © All Right Reserved
            </h1>
        </div>
     );
}
 
export default Footer;
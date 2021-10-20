import React from "react";
import "./Footer.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, ButtonGroup, Divider, IconButton, Link, TextField } from "@mui/material";
import Links from "../Links/Links";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterHero = () => (
  <Grid item xs={12} md={3}>
    <Box>
      <img width="32" src="logo.png" alt="UpBit" />
      <Typography sx={{ mt: 1 }} color="GrayText" variant="subtitle1">
        <strong>Join our newsletter!</strong>
      </Typography>
      <Typography color="GrayText" variant="subtitle2" gutterBottom>
        No spam, guaranteed.
      </Typography>
    </Box>

    <Box sx={{ mt: 2, mb: 3 }} flexDirection="column" display="flex">
      <Typography variant="caption" gutterBottom>
        Enter your email:
      </Typography>
      <ButtonGroup variant="contained" disableElevation>
        <TextField
          variant="outlined"
          size="small"
          placeholder="example@email.com"
          inputMode="email"
          fullWidth
        />
        <Button sx={{ textTransform: "none" }} size="small" variant="contained" tabIndex={0}>
          Subscribe
        </Button>
      </ButtonGroup>
    </Box>
  </Grid>
);

const FooterLinks = () => (
  <>
    <Links
      title="Explore"
      links={[
        { txt: "Home", link: "/" },
        { txt: "Explore", link: "/explore" },
        { txt: "Developer", link: "/developer" },
        { txt: "Buyer", link: "/buyer" },
      ]}
    />
    <Links
      title="About us"
      links={[
        { txt: "About", link: "/" },
        { txt: "Vision", link: "/" },
        { txt: "Contact us", link: "/" },
      ]}
    />
    <Links
      title="Follow and Support"
      links={[
        { txt: "GitHub", link: "/" },
        { txt: "Instagram", link: "/" },
        { txt: "Facebook", link: "/" },
        { txt: "Twitter", link: "/" },
      ]}
    />
  </>
);

const FooterBottom = () => (
  <Grid
    sx={{ width: "100%" }}
    display="flex"
    justifyContent="space-between"
    flexDirection="row"
    container
  >
    <Grid
      item
      xs={12}
      md={6}
      justifyContent={{ xs: "center", md: "flex-start" }}
      display="flex"
    >
      <Typography sx={{ mt: 3 }} variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link className="link" component={RouterLink} color="inherit" to="/">
          UpBit
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      justifyContent={{ xs: "space-around", md: "flex-end" }}
      display="flex"
    >
      <IconButton>
        <GitHubIcon className="link" />
      </IconButton>
      <IconButton>
        <LinkedInIcon className="link" />
      </IconButton>
      <IconButton>
        <InstagramIcon className="link" />
      </IconButton>
      <IconButton>
        <FacebookIcon className="link" />
      </IconButton>
      <IconButton>
        <TwitterIcon className="link" />
      </IconButton>
    </Grid>
  </Grid>
);

function Footer(props) {
  return (
    <Grid
      container
      sx={{ p: 3 }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FooterHero />
      <FooterLinks />
      <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
        <Divider sx={{ width: "100%" }} />
      </Grid>
      <FooterBottom />
    </Grid>
  );
}

export default Footer;

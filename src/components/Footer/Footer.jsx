import React from "react";
import "./Footer.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, ButtonGroup, Divider, Link, TextField } from "@mui/material";
import Links from "../Links/Links";

const FooterHero = () => (
  <Grid item xs={12} md={3}>
    <Box>
      <img width="32" src="logo.png" alt="UpBit" />
      <Typography sx={{ mt: 1 }} color="black" variant="subtitle1">
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
        <Button size="small" variant="contained" tabIndex={0} sx={{ textTransform: "none" }}>
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
  <Typography
    sx={{ mt: 3 }}
    className="text-center w-100"
    variant="body2"
    color="text.secondary"
  >
    {"Copyright © "}
    <Link component={RouterLink} color="inherit" to="/">
      UpBit
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
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
      <Divider className="footer-divider" />
      <FooterBottom />
    </Grid>
  );
}

export default Footer;

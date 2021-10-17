import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Links.css";

function Links({ title, links = [] }) {
  return (
    <Grid sx={{ mb: 2 }} item xs={6} md={2} className="links">
      <Typography variant="subtitle1">
        <strong>{title}</strong>
      </Typography>
      <Grid flexDirection="column" display="flex" color="GrayText">
        {links.map(({ txt, link = "" }, key) => (
          <Link
            width="max-content"
            component={RouterLink}
            to={link}
            variant="subtitle2"
            key={key}
            color="inherit"
          >
            {txt}
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}

export default Links;

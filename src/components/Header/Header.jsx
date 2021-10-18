import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { Grid } from "@mui/material";

function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar enableColorOnDark position="static">
        <Toolbar>
          <Grid
            sx={{ width: "100%" }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img src="logo.png" width="32" alt="UpBit" />
              </IconButton>
            </Box>
            <SearchBar />
            <Box display="flex" flexDirection="row">
              <Box display={{ xs: "none", sm: "flex" }}>
                <Button
                  sx={{ ml: 1, textTransform: "none", width: "max-content" }}
                  color="inherit"
                  variant="text"
                >
                  Explore
                </Button>
                <Button
                  sx={{ ml: 1, textTransform: "none", width: "max-content" }}
                  color="inherit"
                  variant="text"
                >
                  Log in
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{ ml: 1, textTransform: "none", width: "max-content" }}
                  color="success"
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

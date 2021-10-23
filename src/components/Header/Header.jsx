import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { Grid } from "@mui/material";
import { toggleDarkMode } from "../../redux/actions/darkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Header(props) {
   const darkMode = useSelector(state => state.darkMode);
   const dispatch = useDispatch();

   const history = useHistory();

   const btnSxConfig = { ml: 1, textTransform: "none", whiteSpace: "nowrap" };

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
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
                        onClick={() => history.push("/")}
                     >
                        <img src="logo.png" width="32" alt="UpBit" />
                     </IconButton>
                  </Box>
                  <SearchBar />
                  <Box
                     display={{ xs: "none", sm: "flex" }}
                     flexDirection="row"
                     className="right-part"
                     justifyContent="space-between"
                  >
                     <Button sx={btnSxConfig} variant="contained" color="info">
                        Explore
                     </Button>
                     <Button sx={btnSxConfig} variant="contained" color="info">
                        Log in
                     </Button>
                     <Button
                        sx={btnSxConfig}
                        variant="contained"
                        color="success"
                        onClick={() => history.push("/sign-up")}
                     >
                        Sign up
                     </Button>
                     <Button
                        onClick={() => dispatch(toggleDarkMode())}
                        variant="contained"
                        color="info"
                        sx={btnSxConfig}
                     >
                        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                     </Button>
                  </Box>
                  <Box
                     display={{ xs: "flex", sm: "none" }}
                     className="right-part"
                     justifyContent="space-between"
                  >
                     <Button
                        onClick={() => dispatch(toggleDarkMode())}
                        sx={{ ml: 1 }}
                        variant="contained"
                        color="info"
                     >
                        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                     </Button>
                  </Box>
               </Grid>
            </Toolbar>
         </AppBar>
      </Box>
   );
}

export default Header;

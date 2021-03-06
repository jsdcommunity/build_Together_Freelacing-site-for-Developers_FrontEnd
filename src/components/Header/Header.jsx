import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import {
   Avatar,
   Grid,
   Popover,
   Typography,
   Chip,
   Divider,
} from "@mui/material";
import { toggleDarkMode } from "../../redux/actions/darkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import VerifiedIcon from "@mui/icons-material/Verified";
import { clearUserAuth } from "../../helpers";
import { setUserData } from "../../redux/actions/userData";

function HeaderContent() {
   const [profilePopover, setProfilePopover] = useState();

   const darkMode = useSelector(state => state.darkMode);
   const btnSXConfig = { ml: 1, textTransform: "none", whiteSpace: "nowrap" };
   const history = useHistory();
   const dispatch = useDispatch();

   const userData = useSelector(state => state.userData);

   return (
      <Box
         display="flex"
         flexDirection="row"
         className="right-part"
         justifyContent="space-between"
      >
         <Button
            sx={btnSXConfig}
            variant="contained"
            color="info"
            onClick={() => history.push("/explore")}
         >
            Explore
         </Button>
         {!userData?.fullName ? (
            <>
               <Button
                  sx={btnSXConfig}
                  variant="contained"
                  color="info"
                  onClick={() => history.push("/login")}
               >
                  Log in
               </Button>
               <Button
                  sx={btnSXConfig}
                  variant="contained"
                  color="success"
                  onClick={() => history.push("/sign-up")}
               >
                  Sign up
               </Button>
            </>
         ) : (
            <>
               <Popover
                  anchorOrigin={{
                     vertical: "top",
                     horizontal: "left",
                  }}
                  open={Boolean(profilePopover)}
                  anchorEl={profilePopover}
                  onClose={() => setProfilePopover(false)}
               >
                  <Box
                     sx={{ minWidth: "20rem", p: 3 }}
                     display="flex"
                     alignItems="center"
                     justifyContent="center"
                     flexDirection="column"
                  >
                     <Avatar
                        src={`https://avatars.dicebear.com/api/adventurer-neutral/${userData.fullName}.svg`}
                        alt={userData.fullName}
                        variant="rounded"
                     />
                     <Typography variant="h6">
                        {userData.fullName}
                        {userData.active && (
                           <VerifiedIcon color="success" fontSize="small" />
                        )}
                     </Typography>
                     <Typography variant="caption">
                        <Chip
                           label={userData.email}
                           size="small"
                           variant="outlined"
                        />
                     </Typography>
                     <Divider sx={{ width: "100%", margin: "0.5rem 0" }} />
                     <Button
                        variant="outlined"
                        size="small"
                        color="info"
                        sx={btnSXConfig}
                        onClick={() => {
                           clearUserAuth();
                           dispatch(setUserData({}));
                           history.push("/");
                        }}
                     >
                        Logout
                     </Button>
                  </Box>
               </Popover>
               <Avatar
                  sx={{ ...btnSXConfig, cursor: "pointer" }}
                  src={`https://avatars.dicebear.com/api/adventurer-neutral/${userData.fullName}.svg`}
                  onClick={e => setProfilePopover(e.target)}
                  alt={userData.fullName}
                  variant="rounded"
               />
            </>
         )}
         <Button
            onClick={() => dispatch(toggleDarkMode())}
            variant="contained"
            color="info"
            sx={btnSXConfig}
         >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
         </Button>
      </Box>
   );
}

function Header(props) {
   const [showDrawer, setShowDrawer] = useState(false);
   const history = useHistory();

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="fixed">
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
                  <Box display={{ xs: "none", sm: "block" }}>
                     <HeaderContent />
                  </Box>
                  <Box
                     display={{ xs: "flex", sm: "none" }}
                     className="right-part"
                     justifyContent="space-between"
                  >
                     <Button
                        onClick={() => setShowDrawer(true)}
                        sx={{ ml: 1, padding: 0 }}
                        variant="contained"
                        color="info"
                     >
                        <MoreHorizIcon sx={{ fontSize: 37 }} />
                     </Button>
                  </Box>
               </Grid>
            </Toolbar>
         </AppBar>
         <MobileDrawer
            isOpen={showDrawer}
            closeFunc={() => setShowDrawer(false)}
         >
            <HeaderContent />
         </MobileDrawer>
      </Box>
   );
}

export default Header;

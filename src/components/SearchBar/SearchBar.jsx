import {} from "@mui/icons-material";
import { Autocomplete, Stack } from "@mui/material";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: "100%",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
         width: "25rem",
      },
   },
}));

function SearchBar({
   data = [
      "Mobile App",
      "Web App",
      "Android App",
      "Desktop Application",
      "Game",
      "Cross Platform App",
   ],
}) {
   return (
      <Stack sx={{ width: 500 }}>
         <Autocomplete
            freeSolo
            options={data.map((option) => option)}
            renderInput={(params) => (
               <Search ref={params.InputProps.ref}>
                  <SearchIconWrapper>
                     <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                     {...params.inputProps}
                     placeholder="Search…"
                     inputProps={{ "aria-label": "search" }}
                  />
               </Search>
            )}
            size="small"
         />
      </Stack>
   );
}

export default SearchBar;

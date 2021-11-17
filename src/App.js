import React, { useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import GuestLayout from "./layouts/GuestLayout";

function App() {
   const darkMode = useSelector(state => state.darkMode);

   const theme = useMemo(
      () =>
         createTheme({
            palette: {
               mode: darkMode ? "dark" : "light",
            },
         }),
      [darkMode]
   );

   return (
      <ThemeProvider theme={theme}>
         <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <Router>
               <Switch>
                  <Route path="/" component={GuestLayout} />
               </Switch>
            </Router>
         </SnackbarProvider>
      </ThemeProvider>
   );
}

export default App;

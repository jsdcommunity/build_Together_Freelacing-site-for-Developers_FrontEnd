import React, { useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { SnackbarProvider } from "notistack";
import ConfirmAccount from "./pages/ConfirmAccount";
import ResetPassword from "./pages/ResetPassword";

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
                  <Route exact path="/" component={Home} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/confirm-account" component={ConfirmAccount} />
                  <Route path="/explore" component={Explore} />
                  <Route path="/reset-password" component={ResetPassword} />
                  <Route path="/login" component={Login} />
               </Switch>
            </Router>
         </SnackbarProvider>
      </ThemeProvider>
   );
}

export default App;

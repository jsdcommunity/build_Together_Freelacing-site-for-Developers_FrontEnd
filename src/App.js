import React, { useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import Login from "./pages/Login"

function App() {

   const darkMode = useSelector((state) => state.darkMode);

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
         <CssBaseline />
         <Router>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/login" component={Login} />
            </Switch>
         </Router>
      </ThemeProvider>

   );
}

export default App;

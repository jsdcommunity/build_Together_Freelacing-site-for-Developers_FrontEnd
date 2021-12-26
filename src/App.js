import React, { useEffect, useMemo } from "react";
import "./App.css";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   useHistory,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import GuestLayout from "./layouts/GuestLayout";
import JWT from "jsonwebtoken";
import { getUserAuth, clearUserAuth } from "./helpers";
import { getUserData } from "./helpers/api";
import { useSnackbar } from "notistack";
import { setUserData } from "./redux/actions/userData";
import {
   setActiveStep,
   setEmail,
   setUserType,
} from "./redux/actions/signUpSteps";

function App() {
   const darkMode = useSelector(state => state.darkMode);
   const { enqueueSnackbar } = useSnackbar();
   const dispatch = useDispatch();
   const history = useHistory();

   const theme = useMemo(
      () =>
         createTheme({
            palette: {
               mode: darkMode ? "dark" : "light",
            },
         }),
      [darkMode]
   );

   function updateUserProfileFromServer(userId) {
      getUserData(userId)
         .then(res => {
            const userData = res.user;
            dispatch(setUserData(userData));
            if (!userData.active) {
               enqueueSnackbar(
                  "You didn't updated your profile details yet, please update it!",
                  { variant: "warning" }
               );
               dispatch(setUserType(userData.userType));
               dispatch(setEmail(userData.email));
               dispatch(setActiveStep(2));
               history.push("/sign-up");
            }
         })
         .catch(err => {
            clearUserAuth();
            enqueueSnackbar(err.message, { variant: "error" });
         });
   }

   useEffect(() => {
      let userAuth = JWT.decode(getUserAuth());
      if (userAuth?.userId) updateUserProfileFromServer(userAuth.userId);
   }, []);

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Router>
            <Switch>
               <Route path="/" component={GuestLayout} />
            </Switch>
         </Router>
      </ThemeProvider>
   );
}

export default App;

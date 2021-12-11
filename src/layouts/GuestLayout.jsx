import React from "react";
import { Route, Switch } from "react-router";
import ConfirmAccount from "../pages/ConfirmAccount";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import SignUp from "../pages/SignUp";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DeveloperDashboard from "../components/DeveloperDashboard/DeveloperDashboard"

const GuestLayout = () => {
   return (
      <>
         <Header />
         <Switch>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/confirm-account" component={ConfirmAccount} />
            <Route exact path="/login" component={Login} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/developer" component={DeveloperDashboard} />

         </Switch>
         <Footer />
      </>
   );
};

export default GuestLayout;

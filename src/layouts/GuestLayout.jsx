import React from "react";
import { Redirect, Route, Switch } from "react-router";
import ConfirmAccount from "../pages/ConfirmAccount";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import SignUp from "../pages/SignUp";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageNotFound from "../pages/PageNotFound";

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
            <Route exact path="/404" component={PageNotFound} />
            <Redirect to="/404" />
         </Switch>
         <Footer />
      </>
   );
};

export default GuestLayout;

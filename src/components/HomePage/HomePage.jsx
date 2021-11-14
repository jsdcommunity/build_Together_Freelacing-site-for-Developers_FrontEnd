import React from "react";
import CalltoAction from "./PageContents/CalltoAction";
import Features from "./PageContents/Features";
import HeroSection from "./PageContents/HeroSection";
import RecentJobs from "./PageContents/RecentJobs";
import Services from "./PageContents/Services";
import Testimonials from "./PageContents/Testimonials";
function HomePage() {
   return (
      <>
         <HeroSection />
         <Services />
         <Features />
         <CalltoAction />
         <Testimonials />
         <RecentJobs />
      </>
   );
}

export default HomePage;

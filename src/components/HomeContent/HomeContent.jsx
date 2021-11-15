import React from "react";
import { useHistory } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import CalltoAction from "../CallToAction/CallToAction";
import Features from "../FeaturesSection/FeaturesSection";
import RecentJobs from "./RecentJobs";
import Services from "../ServicesSection/ServicesSection";
import Testimonials from "./Testimonials";

function HomeContent(props) {
   const history = useHistory();

   return (
      <>
         <HeroSection
            mainTitle={
               <>
                  Find & Hire <br /> Expert Freelancers
               </>
            }
            subTitle="Work with the best freelance talent from around the world flexible and cost-effective platform !"
            labels={[
               "Mobile Apps",
               "Web Apps",
               "Game Development",
               "Many more..",
            ]}
            btnText="Explore now"
            btnClick={() => history.push("/explore")}
            imageSrc="assets/hero-man.png"
         />
         <Services />
         <Features
            imageSrc="svg/features.svg"
            featuresList={[
               "Connect to freelancers with proven business experience",
               "Manage teamwork and boost productivity with one powerful workspace",
               "Get matched with the perfect talent by a customer success manager",
            ]}
         />
         <CalltoAction
            title="Find the talent needed to get your business growing"
            btnText="Get started"
            btnClick={() => history.push("/login")}
            imageSrc="assets/freelancer.png"
         />
         <Testimonials />
         <RecentJobs />
      </>
   );
}

export default HomeContent;

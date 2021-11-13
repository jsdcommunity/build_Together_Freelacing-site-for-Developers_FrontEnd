import React from 'react'
import CalltoAction from './PageContents/CalltoAction';
import Features from './PageContents/Features';
import HeroSection from "./PageContents/HeroSection" ;
import Services from './PageContents/Services';
function HomePage() {
    return (
        <>
            <HeroSection />
            <Services />
            <Features />
            <CalltoAction />
        </>
    )
}

export default HomePage

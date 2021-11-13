import React from 'react'
import Features from './PageContents/Features';
import HeroSection from "./PageContents/HeroSection" ;
import Services from './PageContents/Services';
function HomePage() {
    return (
        <>
            <HeroSection />
            <Services />
            <Features />
        </>
    )
}

export default HomePage

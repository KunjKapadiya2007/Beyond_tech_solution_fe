import React from 'react';
import HeroSection from "@/components/about/HeroSection";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import AboutIntro from "@/components/about/AboutIntro";
import WorldNetworkSection from "@/components/about/WorldNetworkSection";
import WhatMakesUs from "@/components/about/WhatMakesUs";
import WhyWeBest from "@/components/about/WhyWeBest";

function Page() {
    return (
        <div>
            <HeroSection />
            <MissionVisionValues />
            <AboutIntro />
            <WhatMakesUs />
            <WorldNetworkSection />
            <WhyWeBest />
        </div>
    );
}

export default Page;
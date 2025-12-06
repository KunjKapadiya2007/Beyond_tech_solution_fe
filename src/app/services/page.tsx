import React from 'react';
import ServiceIntro from "@/components/Services/serviceIntro";
import WorkingWithUs from "@/components/home/workingWithUs";
import OurClient from "@/components/home/ourClient";
import TechnicalProficiency from "@/components/Services/TechnicalProficiency";
import Project from "@/components/Services/project";
import WeOffer from "@/components/Services/weOffer";
import DevelopmentProcess from "@/components/Services/DevelopmentProcess";

function Page() {
    return (
        <div>
            <ServiceIntro/>
            <Project/>
            <TechnicalProficiency/>
            <WeOffer/>
            <DevelopmentProcess/>
            <WorkingWithUs/>
            <OurClient/>
        </div>
    );
}

export default Page;
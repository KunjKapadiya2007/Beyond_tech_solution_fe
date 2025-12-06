import React from 'react';

interface Service {
    title: string;
    description: string;
}

function WeOffer() {
    const services: Service[] = [
        {
            title: "Business Websites",
            description: "Fast, responsive, and conversion-ready websites for your brand presence."
        },
        {
            title: "SaaS Platforms",
            description: "Scalable, subscription-based platforms with clean architecture."
        },
        {
            title: "E-commerce Sites",
            description: "Custom e-commerce solutions with intuitive UI and payment integrations."
        },
        {
            title: "Web Portals & Platforms",
            description: "Feature-rich platforms for B2B, B2C, or internal operations."
        },
        {
            title: "CMS-Based Development",
            description: "WordPress, Webflow, and other CMS-based websites with custom themes and plugins."
        }
    ];

    return (
        <div className="bg-[#1A1818] py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold mb-13 leading-tight text-center text-white">
                        Web Development Services We Offer
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className=" border border-white rounded-[20px] px-6 pt-15 py-5"
                        >
                            <h3 className="text-white text-[18px] font-[800] mb-1 leading-tight">
                                {service.title}
                            </h3>

                            <p className="font-[500] text-[#5D5D5D] text-[14px] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WeOffer;
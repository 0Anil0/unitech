import React from 'react';

const AboutUs = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8">About Us</h1>
            <p className="text-muted text-lg max-w-2xl mb-12">
                Global leaders in high-precision temperature instrumentation since 1995.
            </p>
            <div className="prose prose-invert max-w-none text-muted leading-relaxed">
                <p className="mb-6">
                    Unitech has been at the forefront of thermal engineering, providing reliable and accurate sensor solutions for the most demanding environments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                    <div>
                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Quality</h4>
                        <p className="text-sm">Certified ISO 9001:2015, ensuring consistent quality in every sensor we manufacture.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Engineering</h4>
                        <p className="text-sm">Our in-house design team creates custom solutions tailored to specific process needs.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Support</h4>
                        <p className="text-sm">Technical support and NABL traceable calibration services available globally.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

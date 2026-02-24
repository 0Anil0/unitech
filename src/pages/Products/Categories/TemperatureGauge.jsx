import React from 'react';

const TemperatureGauge = () => {
    const gauges = [
        {
            title: "Capsule Pressure Gauge",
            description: "Designed for measuring very low pressures of gases and air. It uses a sensitive capsule element to provide accurate readings at low pressure ranges. Commonly used in ventilation systems, filters, furnaces, and low-pressure gas applications.",
            features: ["Low Pressure Sensitivity", "Gas/Air Optimized", "High Accuracy"],
            datasheet: "/datasheets/capsule-pressure-gauge.pdf"
        },
        {
            title: "Differential Pressure Gauge – Double Diaphragm Type",
            description: "Used to measure the difference between two pressures in low-pressure gas or air applications. Features two sensitive diaphragms providing stable readings. Ideal for filter monitoring, airflow measurement, and HVAC systems.",
            features: ["Stable Double Diaphragm", "Filter Monitoring", "High Stability"],
            datasheet: "/datasheets/differential-pressure-gauge.pdf"
        },
        {
            title: "Electric Contact Pressure Gauge",
            description: "Combines mechanical pressure measurement with adjustable electrical contacts for switching signals. Enables alarm, control, or pump protection. Essential for compressors, hydraulic systems, and process plants.",
            features: ["Precision Switching", "Industrial Automation", "Built-in Controls"],
            datasheet: "/datasheets/electric-contact-pressure-gauge.pdf"
        },
        {
            title: "Homogenizer Pressure Gauge",
            description: "Designed for extreme operating pressures in homogenizer systems. Provides stable indication under pulsating and shock-load conditions. Trusted in food, dairy, pharmaceutical, and chemical homogenizers.",
            features: ["High-Pressure Rated", "Shock Resistance", "Pulsation Damping"],
            datasheet: "/datasheets/homogenizer-pressure-gauge.pdf"
        },
        {
            title: "PP Case Pressure Gauge",
            description: "Features a polypropylene (PP) housing for extreme resistance to corrosive chemicals and moisture. Perfect for measuring liquids and gases in chemical plants and water treatment facilities.",
            features: ["Corrosion Resistant", "Chemical Proof", "Durable PP Housing"],
            datasheet: "/datasheets/pp-case-pressure-gauge.pdf"
        },
        {
            title: "Seal Diaphragm Pressure Gauge",
            description: "Measures pressure in corrosive, viscous, or high-temperature media without direct contact. The seal protects the gauge mechanism, ensuring long service life in pharmaceutical and food industries.",
            features: ["Media Isolation", "Extended Life", "Safe for Viscous Fluids"],
            datasheet: "/datasheets/seal-diaphragm-pressure-gauge.pdf"
        },
        {
            title: "Schäffer Diaphragm Pressure Gauge",
            description: "Measures low and medium pressures in corrosive, viscous, or particulate media. It features a sensitive diaphragm element that ensures accurate pressure indication while protecting the measuring mechanism for long-term reliability in demanding environments.",
            features: ["Low & Medium Pressure Measurement", "Diaphragm Protection System", "Suitable for Corrosive & Viscous Media"],
            datasheet: "/datasheets/schaffer-diaphragm-pressure-gauge.pdf"
        },
        {
            title: "Solid Front Pressure Gauge",
            description: "Designed for maximum operator safety in high-pressure applications. It features a solid front case with a blow-out back to direct pressure and fragments away from the operator in case of failure, ensuring safe and reliable measurement.",
            features: ["Enhanced Operator Safety", "Blow-Out Back Protection", "High-Pressure Applications"],
            datasheet: "/datasheets/solid-front-pressure-gauge.pdf"
        },
        {
            title: "Standard Pressure Gauge",
            description: "Used for general pressure measurement in industrial applications involving liquids and gases. It provides accurate and dependable pressure indication for routine monitoring of pumps, compressors, pipelines, and process systems.",
            features: ["General Industrial Use", "Accurate Pressure Monitoring", "Cost-Effective Solution"],
            datasheet: "/datasheets/standard-pressure-gauge.pdf"
        },
        {
            title: "Tri-Clover Pressure Gauge",
            description: "Designed for sanitary and hygienic applications with a Tri-Clamp connection for easy installation and cleaning. It ensures accurate pressure measurement in contamination-sensitive environments such as food and pharmaceutical processing.",
            features: ["Sanitary Tri-Clamp Connection", "Easy Cleaning & Installation", "Hygienic Process Applications"],
            datasheet: "/datasheets/tri-clover-pressure-gauge.pdf"
        },
        {
            title: "Bi-Metal Temperature Gauge",
            description: "Used for direct temperature measurement in industrial processes. It operates using a bi-metallic element that reacts to temperature changes and provides reliable, accurate readings in rugged environments.",
            features: ["Direct Temperature Measurement", "Bi-Metallic Sensing Element", "Rugged Industrial Design"],
            datasheet: "/datasheets/bi-metal-temperature-gauge.pdf"
        },
        {
            title: "Every Angle Temperature Gauge",
            description: "Designed for flexible installation, allowing temperature measurement at any mounting orientation. It ensures clear and accurate readings even in confined or hard-to-access locations.",
            features: ["Flexible Mounting Orientation", "Clear & Easy Reading", "Suitable for Confined Installations"],
            datasheet: "/datasheets/every-angle-temperature-gauge.pdf"
        },
        {
            title: "Gas Filled Temperature Gauge",
            description: "Measures temperature accurately over a wide range using the gas expansion principle. It provides stable and reliable readings, even when the sensing bulb is located far from the dial, making it ideal for harsh industrial environments.",
            features: ["Wide Temperature Range", "Gas Expansion Technology", "Remote Sensing Capability"],
            datasheet: "/datasheets/gas-filled-temperature-gauge.pdf"
        }
    ];

    return (
        <div className="pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen font-sans">
            <nav className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-muted mb-6">
                <span>Products</span>
                <span>/</span>
                <span>Categories</span>
                <span>/</span>
                <span className="text-brand-accent">Temperature Gauges</span>
            </nav>

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-12 sm:mb-24">
                <div className="lg:w-1/2 w-full overflow-hidden">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-main uppercase tracking-tight mb-6 sm:mb-8 leading-[0.9]">
                        Precision <br /><span className="text-brand-accent italic">Pressure</span> <br />Instrumentation
                    </h1>
                    <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
                        Our high-performance gauges are engineered for the most demanding industrial environments, providing accurate monitoring for low-pressure gases, corrosive media, and high-pressure homogenizer systems.
                    </p>
                </div>
                <div className="lg:w-1/2 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto aspect-square relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-[2rem] sm:rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-full h-full bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[4rem] backdrop-blur-sm flex items-center justify-center overflow-hidden">
                        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">Series-XP</div>
                        {/* Visual placeholder for the Gauge */}
                        <div className="w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 border-4 sm:border-8 border-white/5 shadow-2xl rounded-full relative flex items-center justify-center bg-brand-deep/50">
                            <div className="absolute inset-2 border border-white/10 rounded-full"></div>
                            <div className="w-1 sm:w-1.5 h-16 sm:h-24 lg:h-28 bg-brand-accent absolute -top-3 sm:-top-4 rounded-full origin-bottom rotate-[40deg] transition-transform duration-1000 group-hover:rotate-[220deg]"></div>
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full z-10 shadow-lg"></div>
                            <div className="absolute top-1/4 text-[7px] sm:text-[8px] font-bold text-white/20 tracking-[0.3em] sm:tracking-[0.5em]">BAR / PSI</div>
                        </div>
                        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex flex-col gap-1 items-end">
                            <span className="text-2xl sm:text-4xl font-black text-white">0-600</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted">Operating Range</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gauges.map((item, idx) => (
                    <div key={idx} className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-[1.5rem] sm:rounded-[2.5rem] hover:bg-white/10 hover:border-brand-accent transition-all duration-500 cursor-pointer overflow-hidden">
                        {/* Product Image Container */}
                        <div className="relative h-44 sm:h-56 lg:h-64 w-full bg-white/[0.02] flex items-center justify-center p-4 sm:p-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 to-transparent z-10"></div>
                            <img
                                src="/src/assets/gauge_temp.png"
                                alt={item.title}
                                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 select-none pb-4 z-0"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Fallback visual if image is missing */}
                            <div className="hidden absolute inset-0 items-center justify-center z-0">
                                <div className="w-24 h-24 border-2 border-white/10 rounded-full flex items-center justify-center">
                                    <span className="text-white/20 font-black text-4xl">{idx + 1}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 sm:p-8 lg:p-10 pt-3 sm:pt-4 flex flex-col flex-1">
                            <div className="mb-6 sm:mb-8">
                                <div className="w-12 h-1 bg-brand-accent mb-4 sm:mb-6 group-hover:w-full transition-all duration-700"></div>
                                <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-3 block">Series {100 + idx}</span>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-main uppercase tracking-tight mb-3 sm:mb-4 group-hover:text-brand-accent transition-colors leading-[1.1]">{item.title}</h3>
                                <p className="text-muted text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">{item.description}</p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {item.features.map(f => (
                                        <span key={f} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/5 text-muted group-hover:border-brand-accent/30 transition-colors">{f}</span>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                    <a
                                        href={item.datasheet}
                                        download
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-accent hover:text-white transition-colors group/dl"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download Datasheet
                                    </a>
                                    <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                                        <svg className="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemperatureGauge;

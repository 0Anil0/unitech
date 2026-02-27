import React, { useState, useEffect } from 'react';

const ThermalMonitoring = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const categories = [
        {
            id: 'tc',
            title: 'Thermocouples (T/C)',
            shortDescription: 'Base metal and noble metal sensors for wide-range industrial temperature measurement.',
            details: {
                intro: "A thermocouple is a temperature sensor made of two different metal wires joined at one end (the measuring junction). When this junction changes temperature, it produces a small voltage proportional to that temperature difference. Thermocouples are valued for their wide temperature range, ruggedness, and versatility in demanding industrial environments.",
                sections: [
                    {
                        title: "Thermocouple Types Unitech Offers",
                        items: [
                            { label: "Standard Base Metal Types", content: "J (Iron/Constantan), K (Chromel/Alumel), N (Nicrosil/Nisil), E (Chromel/Constantan), T (Copper/Constantan). Used generally up to ~1200 °C." },
                            { label: "Noble Metal (High-Temperature)", content: "R, S, B — Platinum/Rhodium based for ultra-high stability. Typical max temp up to 1600–1800 °C." }
                        ]
                    },
                    {
                        title: "Construction & Materials",
                        items: [
                            { label: "Protection Tubes / Sheaths", content: "SS316, SS310, Inconel 600/601, Incoloy 800, Haste Alloy. Ceramic tubes (KER710) for noble metal types." },
                            { label: "MI (Mineral Insulated)", content: "Compacted MI cable in SS316, SS310, Inconel 600, HRS446. Sizes from 3 mm to 10 mm+." }
                        ]
                    },
                    {
                        title: "Configurations",
                        content: "Available in Simplex, Duplex, and Triplex/Multipoint configurations. Termination options include head assemblies, connectors, and flying leads."
                    },
                    {
                        title: "Special & Custom Solutions",
                        list: [
                            "Anode Baking Furnaces: Type K with protection wells for 1200 °C",
                            "Molten Metal (Al/Zn): Continuous or dip-type units for 800 °C",
                            "Blast Furnace (Steel): Noble metal Type S with special coatings",
                            "Cement Industry: Kiln inlet and tertiary air duct rugged sensors",
                            "Cooler Grate Measurements: Spring-loaded protection tubes"
                        ]
                    },
                    {
                        title: "Industrial Applications",
                        list: [
                            "Cement and Glass manufacturing",
                            "Steel, Iron, and Aluminium industries",
                            "Power generation and heavy process plants",
                            "Automotive thermal testing"
                        ]
                    },
                    {
                        title: "Technical Notes & Standards",
                        content: "Selection depends on temperature range, response time, and chemical environment. MI types are calibrated to ANSI MC 96.1 standards."
                    }
                ],
                summaryTable: [
                    { feature: "Sensor Types", offering: "Base metal (J, K, N, E, T); Noble metal (R, S, B)" },
                    { feature: "Max Temp Range", offering: "Up to ~1200 °C (Metal) / ~1800 °C (Ceramic)" },
                    { feature: "Sheath Materials", offering: "SS316, SS310, Inconel 600/601, Haste Alloy" },
                    { feature: "Configurations", offering: "Simplex, Duplex, Triplex, Multi-point" },
                    { feature: "MI Options", offering: "3mm to 10mm+ with varied sheaths" },
                    { feature: "Custom Builds", offering: "Special furnaces, molten metals, cement industry" }
                ]
            }
        },
        {
            id: 'rtd',
            title: 'RTD Sensors',
            shortDescription: 'High-precision platinum and copper resistance detectors for stable, accurate measurement.',
            details: {
                intro: "An RTD is a temperature sensor that operates on the principle that a metal’s electrical resistance changes predictably with temperature. Mostly made from platinum (Pt)—the most common being Pt100 (100 Ω at 0 °C)—RTDs are high-accuracy sensors used for precision temperature measurement. They’re widely used in industrial processes where accuracy, stability and repeatability are important.",
                sections: [
                    {
                        title: "RTD Types & Sensing Materials",
                        items: [
                            { label: "Platinum (Pt) RTDs", content: "Pt100 (Standard resistance, most common), Pt200, Pt500, Pt1000 (Higher resistance options for different measurement sensitivities)" },
                            { label: "Copper (Cu) RTDs", content: "Cu50, Cu53 – Lower resistance copper sensors suited for specific applications" }
                        ]
                    },
                    {
                        title: "Temperature Range & Performance",
                        content: "Typical RTDs produced by Unitech are suitable for measurements in liquid and gas environments up to approximately 600 °C (varies by element and sheath). RTDs have higher accuracy and more stable outputs than thermocouples over a mid-range temperature span, making them ideal for precise control loops."
                    },
                    {
                        title: "Construction & Protection Options",
                        items: [
                            { label: "Protective Sheath Versions", content: "RTD with Protection Tube – Enclosed in a protective metal sheath (SS 304, SS 316, SS 316L, Hastelloy) typically ranging from 12 mm to 28 mm." },
                            { label: "Other Configurations", content: "RTD without Protection Tube, Welded Flange sensors, Screw-in RTDs with Inserts, and Special custom builds." }
                        ]
                    },
                    {
                        title: "Electrical Termination & Wiring",
                        content: "Supplied with Head Assembly termination or adjustable fittings. Available in 2-wire, 3-wire, or 4-wire configurations. 3-wire and 4-wire options improve accuracy by minimizing lead resistance effects."
                    },
                    {
                        title: "Accuracy & Standards",
                        content: "Manufactured to international standards like DIN 43760. Platinum types like Pt100 are often specified in Class A or Class B tolerances (Class A being more accurate)."
                    },
                    {
                        title: "Industrial Applications",
                        list: [
                            "Chemical, pharmaceutical, and food processing",
                            "Power generation & steam systems",
                            "HVAC and liquid temperature measurement (tanks, pumps)",
                            "Gas / air duct temperature monitoring",
                            "Integration with controllers, transmitters, and automated control loops"
                        ]
                    }
                ],
                summaryTable: [
                    { feature: "Sensor Type", offering: "RTD (Platinum & Copper based)" },
                    { feature: "Common Elements", offering: "Pt100, Pt200, Pt500, Pt1000; Cu50, Cu53" },
                    { feature: "Temperature Range", offering: "Up to ~600 °C (application dependent)" },
                    { feature: "Protection Options", offering: "With/without sheath, welded flanges, screw-in" },
                    { feature: "Sheath Materials", offering: "SS304, SS316, SS316L, Hastelloy etc." },
                    { feature: "Standards", offering: "DIN 43760" },
                    { feature: "Termination", offering: "Head Assembly, adjustable fittings" },
                    { feature: "Applications", offering: "Industrial process, liquid/gas temp. measurement" }
                ]
            }
        },
        {
            id: 'tw',
            title: 'Thermowells (T/W)',
            shortDescription: 'Barstock and fabricated protective pockets for sensors in high-pressure or corrosive environments.',
            details: {
                intro: "A thermowell is a protective tube or housing used to shield temperature sensors (like thermocouples and RTDs) from direct exposure to harsh process environments — such as high pressure, extreme temperature, corrosion, flow-induced forces or physical damage.",
                sections: [
                    {
                        title: "Purpose & Applications",
                        content: "Thermowells are used wherever temperature sensors operate in demanding conditions. They protect sensors from chemicals, abrasion, pressure and thermal shock in industries such as Cement plants, Chemical processing, Power generation, and Steel industries."
                    },
                    {
                        title: "Materials Used",
                        items: [
                            { label: "Stainless Steels", content: "SS 304, SS 316, SS 316L, SS 321, SS 310" },
                            { label: "High-Performance Alloys", content: "HRS 446, Incoloy 800, Inconel 600, Inconel 601, Hastelloy" },
                            { label: "Special Metals", content: "Titanium, Monel (Tailored for specific chemical and mechanical needs)" }
                        ]
                    },
                    {
                        title: "Thermowell Types & Shapes",
                        items: [
                            { label: "Barstock Thermowells", content: "Machined from solid bar stock. Available in Straight, Tapered, and Stepped profiles for optimized strength and thermal response." },
                            { label: "Pipe Thermowells", content: "Cost-effective solutions made from standard pipe (Sch 40, Sch 80, Sch 160) for larger diameter applications." }
                        ]
                    },
                    {
                        title: "Connections & Installation",
                        items: [
                            { label: "Threaded Connection", content: "Standard process connections for smaller vessels and lines." },
                            { label: "Flanged Connection", content: "Robust sealing and easy maintenance via flange bolting for high-pressure systems." }
                        ]
                    },
                    {
                        title: "Special & Coated Solutions",
                        content: "Unitech offers thermowells with specialized coatings (Ceramic, Stellite, Tungsten Carbide, Teflon) and exotic materials like Silicon Nitride or Tantalum for extreme abrasion or chemical resistance."
                    },
                    {
                        title: "Sensor Integration",
                        content: "Typically paired with MI Thermocouples or RTDs, allowing for easy sensor replacement or service without interrupting the industrial process."
                    }
                ],
                summaryTable: [
                    { feature: "Purpose", offering: "Protect sensors in harsh environments" },
                    { feature: "Materials", offering: "SS 304/316/310, Inconel, Incoloy, Hastelloy, Titanium" },
                    { feature: "Types", offering: "Barstock (Straight/Tapered/Stepped), Pipe (Fabricated)" },
                    { feature: "Connections", offering: "Threaded, Flanged, Welded" },
                    { feature: "Special Options", offering: "Ceramic/Stellite coatings, Exotic metals" },
                    { feature: "Customization", offering: "Tailored IDs, ODs, and insertion lengths" }
                ]
            }
        },
        {
            id: 'ph',
            title: 'Process Heaters (PH)',
            shortDescription: 'Immersion, circulation, and air duct heating solutions for industrial thermal processes.',
        },
        {
            id: 'tm',
            title: 'Temperature Meters (TM)',
            shortDescription: 'Digital indicators, controllers, and scanners for local and remote thermal monitoring.',
        },
        {
            id: 'pyro',
            title: 'Pyrometers',
            shortDescription: 'Non-contact infrared sensors for high-temperature measurement in moving or inaccessible objects.',
        }
    ];

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) setSelectedProduct(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <nav className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-muted mb-6">
                <span>Products</span>
                <span>/</span>
                <span>Categories</span>
                <span>/</span>
                <span className="text-brand-accent">Thermal Monitoring</span>
            </nav>
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8 leading-[0.9]">
                Thermal Monitoring <br /><span className="text-brand-accent">Solutions</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {categories.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => item.details && setSelectedProduct(item)}
                        className={`group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-accent transition-all ${item.details ? 'cursor-pointer' : 'opacity-80'}`}
                    >
                        <h3 className="text-lg font-bold text-main mb-4">{item.title}</h3>
                        <p className="text-muted text-sm mb-6 leading-relaxed">
                            {item.shortDescription}
                        </p>
                        <div className="flex gap-4">
                            {item.details ? (
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent group-hover:underline">View Details</span>
                            ) : (
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Coming Soon</span>
                            )}
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Datasheet</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detailed Technical Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-brand-deep/95 backdrop-blur-xl transition-opacity duration-300"
                        onClick={() => setSelectedProduct(null)}
                    ></div>

                    <div className="relative w-full max-w-5xl max-h-[90vh] glass-panel bg-brand-primary overflow-hidden flex flex-col shadow-2xl rounded-3xl border border-white/10">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/5 shrink-0">
                            <div>
                                <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">Technical Specification</p>
                                <h3 className="text-2xl font-black text-main uppercase tracking-tight">{selectedProduct.title}</h3>
                            </div>
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-all text-muted"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-12 custom-scrollbar">
                            {/* Intro Section */}
                            <section>
                                <h4 className="text- brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4">Overview</h4>
                                <p className="text-lg sm:text-xl text-main font-medium leading-relaxed italic border-l-4 border-brand-accent pl-6">
                                    "{selectedProduct.details.intro}"
                                </p>
                            </section>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-10">
                                    {selectedProduct.details.sections.map((section, idx) => (
                                        <section key={idx} className="space-y-4">
                                            <h4 className="text-main font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2">{section.title}</h4>
                                            {section.content && <p className="text-sm text-muted leading-relaxed">{section.content}</p>}
                                            {section.items && (
                                                <div className="space-y-3 pt-2">
                                                    {section.items.map((it, i) => (
                                                        <div key={i} className="flex flex-col gap-1">
                                                            <span className="text-[10px] font-black uppercase text-brand-accent">{it.label}</span>
                                                            <span className="text-sm text-muted">{it.content}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {section.list && (
                                                <ul className="space-y-2 pt-2">
                                                    {section.list.map((li, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm text-muted">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0"></div>
                                                            <span>{li}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </section>
                                    ))}
                                </div>

                                {/* Summary Table */}
                                <div className="space-y-8">
                                    <div className="glass-panel p-8 border-white/5 bg-white/[0.02] rounded-2xl">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-6">Summary of Features</h4>
                                        <div className="space-y-4">
                                            {selectedProduct.details.summaryTable.map((row, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/5 gap-2">
                                                    <span className="text-[10px] font-black uppercase text-muted tracking-widest shrink-0">{row.feature}</span>
                                                    <span className="text-xs font-bold text-main sm:text-right">{row.offering}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button className="w-full py-4 bg-brand-accent text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-brand-accent/20 hover:scale-[1.02] transition-all active:scale-95">
                                            Download Technical Brochure (PDF)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThermalMonitoring;

import React, { useState, useEffect } from 'react';

const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'thermocouples', name: 'Thermocouples' },
    { id: 'rtds', name: 'RTD Sensors' },
    { id: 'gauges', name: 'Temp Gauges' }
];

const products = [
    // THERMOCOUPLES - MI
    {
        id: 1,
        category: 'thermocouples',
        subCategory: 'Mineral Insulated (MI)',
        title: 'MI Base Metal Sensor',
        description: 'High-purity MgO insulated thermocouple (Type K/J/N/T) with flexible metal sheath. Designed for high vibration and pressure.',
        longDescription: 'Engineered in accordance with ASTM E230 & IEC 584 standards. The Mineral Insulated (MI) construction consists of thermocouple wires embedded in high-purity Magnesium Oxide (MgO) insulation, compacted within a seamless metal sheath (Inconel 600 or SS310). This assembly provides exceptional mechanical strength, pressure resistance, and the ability to bend the sensor to a radius 3 times its diameter without shorting.',
        image: 'https://www.processparameters.co.uk/wp-content/uploads/2019/07/explaining-how-does-a-thermocouple-work.jpg',
        specs: {
            calibration: 'Type K, J, N, T (Standard/Special Limits)',
            accuracy: 'Class 1 / Special Limits (±1.1°C)',
            sheath: 'Inconel 600 / SS310 / Hastelloy X',
            diameter: '0.25mm to 8.0mm',
            insulation: 'Compacted MgO (>99.4% Purity)',
            junction: 'Grounded / Ungrounded / Exposed'
        },
        applications: ['Jet Engine Exhaust', 'Petrochemical Reactors', 'Brazing Furnaces', 'Cryogenic Storage'],
        configurations: [
            { name: 'Termination', options: ['Mini Plug (Yellow/Blue)', 'Standard Plug', 'Process Head (Die-cast Aluminum)'] },
            { name: 'Mounting', options: ['Compression Fitting (adjustable)', 'Fixed Flange', 'Spring Loaded'] }
        ]
    },
    // THERMOCOUPLES - NOBLE METAL
    {
        id: 2,
        category: 'thermocouples',
        subCategory: 'Noble Metal (R/S/B)',
        title: 'Noble Metal Refractory',
        description: 'Platinum-Rhodium sensors for ultra-high temperature measurement (up to 1750°C). Ceramic Ker 710 protection.',
        longDescription: 'Essential for high-temperature processes where base metals degrade. Noble Metal thermocouples utilize Platinum and Rhodium alloys (Type R, S, or B) to ensure long-term stability and resistance to oxidation. We utilize high-alumina Ker 710 (99.7% Al2O3) gas-tight ceramic protection tubes to prevent elements from environmental contamination.',
        image: 'https://www.processparameters.co.uk/wp-content/uploads/2019/07/explaining-how-does-a-thermocouple-work.jpg',
        specs: {
            type: 'Platinum-Rhodium (Type R, S, B)',
            tolerance: 'Class 1 (IEC 60584-2)',
            protection: 'Ker 710 / Recrystallized Alumina',
            element: '0.45mm / 0.5mm Noble Wire',
            head: 'Type B (Heavy Duty Aluminum)',
            range: '0°C to 1750°C'
        },
        applications: ['Molten Glass', 'Steel Casting', 'CVD Processes', 'Reference Standards'],
        configurations: [
            { name: 'Assemblies', options: ['Single Ceramic Tube', 'Double Protection Tube (Inner/Outer)'] },
            { name: 'Cold Junction', options: ['Compensating Cable (Copper/Alloy)', 'Internal Reference'] }
        ]
    },
    // RTDs - INDUSTRIAL
    {
        id: 3,
        category: 'rtds',
        subCategory: 'Industrial Assemblies',
        title: 'Pt100 Industrial Probe',
        description: 'Precision RTD with terminal head and protective thermowell. Superior stability and repeatability per IEC 60751.',
        longDescription: 'The industrial standard for reliable thermal measurement. Our Pt100 RTDs leverage wire-wound or thin-film elements to provide a linear resistance-temperature response. Built into a terminal head assembly, these sensors are designed for integration with barstock thermowells to withstand high flow velocities and corrosive media.',
        image: 'https://www.processparameters.co.uk/wp-content/uploads/2019/07/explaining-how-does-a-thermocouple-work.jpg',
        specs: {
            element: 'Pt100 / Pt1000 (3-Wire/4-Wire)',
            accuracy: 'Class A / 1/3 DIN / 1/10 DIN',
            wiring: 'Simplex / Duplex / Triplex',
            alpha: '0.00385 Ω/Ω/°C',
            sheath: 'SS316L / Inconel 600',
            range: '-200°C to 650°C'
        },
        applications: ['Distillation Columns', 'Boiler Control', 'Natural Gas Pipelines', 'Bio-Refineries'],
        configurations: [
            { name: 'Thermowell', options: ['Barstock (Drilled)', 'Fabricated (Welded)', 'Flanged'] },
            { name: 'Head Type', options: ['Type B (Aluminum)', 'Type S (Stainless)', 'Explosion Proof (Exd)'] }
        ]
    },
    // RTDs - SANITARY
    {
        id: 4,
        category: 'rtds',
        subCategory: 'Sanitary / Food Grade',
        title: 'Hygienic Tri-Clamp RTD',
        description: '3-A/EHEDG compliant electropolished SS316L (Ra < 0.5μm). Designed for SIP/CIP washdown.',
        longDescription: 'Engineered for the stringent requirements of the food, dairy, and pharmaceutical industries. All wetted surfaces are electropolished to Ra < 0.5 microns to prevent bacterial attachment. The probe and head interface is fully sealed to IP69K standards, allowing for intensive steam-in-place (SIP) and clean-in-place (CIP) sterilization cycles.',
        image: 'https://www.processparameters.co.uk/wp-content/uploads/2019/07/explaining-how-does-a-thermocouple-work.jpg',
        specs: {
            element: 'Thin Film Pt100 (high vibration)',
            fitting: 'ISO 2852 Tri-Clamp (1.5" - 4.0")',
            finish: 'Ra < 0.5μm (Mirror Polish)',
            material: 'SS316L (Electropolished)',
            protection: 'IP69K (Full Washdown)',
            range: '-50°C to 200°C'
        },
        applications: ['Beer Fermentation', 'Dairy Pasteurization', 'Vaccine Storage', 'Pure Water Systems'],
        configurations: [
            { name: 'Clamp Size', options: ['1.0" Tri-clamp', '1.5" Tri-clamp', '2.0" Tri-clamp'] },
            { name: 'Response', options: ['Reduced Tip Ø 3.0mm (Fast)', 'Standard Tip Ø 6.0mm'] }
        ]
    },
    // GAUGES - BIMETALLIC
    {
        id: 5,
        category: 'gauges',
        subCategory: 'Bimetall Systems',
        title: 'Bimetall Dial Gauge',
        description: 'Precision 100mm/150mm mechanical gauge with rigid stem. Hermetically sealed SS304/316 case.',
        longDescription: 'A robust, direct-acting thermometer utilizing a helically wound bimetall strip. The Unitech bimetall gauge is the industry standard for local temperature monitoring without external power. The case is hermetically sealed and nitrogen-filled to prevent fogging and internal lens corrosion. Meets EN 13190 / ASME B40.3 standards.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjadSU2nUyKzewvzfDSzQya1UhmwePJ5_LBg&s',
        specs: {
            system: 'Helically Wound Bimetall',
            accuracy: 'Class 1 (±1% of Full Scale)',
            dial: '63mm, 100mm, 150mm SS304',
            casing: 'Bayonet Bezel (IP65)',
            stem: 'SS316 (Fixed/Every-Angle)',
            range: '-40°C to 450°C'
        },
        applications: ['HVAC Ducts', 'Hydraulic Systems', 'Steam Pipelines', 'Compressed Air'],
        configurations: [
            { name: 'Entry', options: ['Back Entry', 'Bottom Entry', 'Every-Angle Adjustable'] },
            { name: 'Filling', options: ['Dry (Standard)', 'Glycerin (High Vibration)', 'Silicon Oil'] }
        ]
    },
    // GAUGES - GAS EXPANSION
    {
        id: 6,
        category: 'gauges',
        subCategory: 'Gas / Expansion',
        title: 'Distance Gas Gauge',
        description: 'Remote reading gauge with flexible capillary (up to 30m). Mercury-free expansion system.',
        longDescription: 'Designed for monitoring temperatures from a centralized control point or in hard-to-reach locations. The Gas Expansion system uses a nitrogen-filled bulb and capillary. Unlike older systems, Unitech uses a 100% mercury-free system, making it suitable for environmental and food production monitoring.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjadSU2nUyKzewvzfDSzQya1UhmwePJ5_LBg&s',
        specs: {
            system: 'Nitrogen Expansion (Mercury-Free)',
            accuracy: 'Class 1 (EN 13190)',
            capillary: 'SS316 with SS Armor (Flexible)',
            bulb: 'SS316 Standard / Hard Stem',
            mounting: 'Panel Mounting / Flush / Wall',
            range: '-200°C to 650°C'
        },
        applications: ['Oil & Gas Control Rooms', 'Cryogenic Tanks', 'Cold Storage', 'Refineries'],
        configurations: [
            { name: 'Capillary Protection', options: ['Bare Capillary', 'Interlock Armor', 'PVC Coated Armor'] },
            { name: 'Scale Display', options: ['Single (°C)', 'Dual (°C / °F)', 'Custom Logo Dial'] }
        ]
    }
];

const Features = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) setSelectedProduct(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <section id="products" className="py-24 sm:py-32 relative bg-brand-primary overflow-hidden">
            {/* Structural Accent */}
            <div className="absolute top-0 right-0 w-full sm:w-1/3 h-full bg-brand-accent/5 -z-10 translate-x-10 sm:translate-x-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-main">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-20 gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-md mb-6">
                            <span className="text-brand-highlight text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
                                Industrial Standards: ASTM | IEC | EN | ASME
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[1] sm:leading-[0.9] gradient-text">
                            PRODUCT <br className="hidden sm:block" /> DIRECTORY.
                        </h2>
                        <p className="text-base sm:text-lg text-muted">
                            Select a component category to explore hyper-specific sensor assemblies and engineering specifications.
                        </p>
                    </div>

                    {/* Hierarchical Filter */}
                    <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-2 glass-panel p-1.5 sm:p-2 rounded-xl border-white/5 no-scrollbar shadow-inner">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex-none px-4 sm:px-6 py-3 rounded-lg font-black text-[9px] sm:text-[10px] tracking-widest uppercase transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20'
                                    : 'text-muted hover:text-main hover:bg-white/5'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group relative animate-fade-in flex flex-col">
                            <div
                                className="glass-panel overflow-hidden border border-white/5 hover:border-brand-accent/40 transition-all duration-700 flex-1 flex flex-col hover:-translate-y-2 cursor-pointer shadow-2xl relative"
                                onClick={() => setSelectedProduct(product)}
                            >
                                {/* Product Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-brand-deep/80 backdrop-blur-md text-brand-highlight text-[8px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded border border-brand-accent/30 shadow-2xl">
                                        {product.subCategory}
                                    </span>
                                </div>

                                <div className="h-56 sm:h-64 overflow-hidden relative bg-brand-deep/20">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-60"></div>
                                </div>

                                <div className="p-8 sm:p-10 flex-1 flex flex-col">
                                    <h3 className="text-xl sm:text-2xl font-black group-hover:text-brand-highlight transition-colors tracking-tighter leading-tight text-main uppercase">
                                        {product.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-brand-accent/20 my-4 transition-all group-hover:w-full group-hover:bg-brand-accent/40"></div>
                                    <p className="text-xs sm:text-sm text-muted mb-8 leading-relaxed line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* Performance Specs */}
                                    <div className="mt-auto space-y-3 border-t border-white/5 pt-8">
                                        {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                                            <div key={key} className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest py-1 border-b border-white/[0.03]">
                                                <span className="text-muted opacity-60">{key}:</span>
                                                <span className="text-main/80 text-right ml-4">{value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="mt-10 w-full py-4 glass-panel bg-brand-accent/10 border-brand-accent/20 hover:bg-brand-accent hover:text-white transition-all text-brand-highlight font-black text-[10px] tracking-[0.2em] uppercase active:scale-95 shadow-lg flex items-center justify-center gap-3">
                                        Engineering Datasheet
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DETAILED TECHNICAL CATALOG MODAL */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-10">
                    <div
                        className="absolute inset-0 bg-brand-deep/95 backdrop-blur-3xl animate-fade-in"
                        onClick={() => setSelectedProduct(null)}
                    ></div>

                    <div className="relative w-full max-w-6xl max-h-[92vh] glass-panel bg-brand-primary overflow-hidden flex flex-col animate-slide-up border-white/10 shadow-[0_0_150px_rgba(0,0,0,0.8)] rounded-3xl">
                        {/* Catalog Modal Header */}
                        <div className="flex justify-between items-center p-6 sm:p-10 border-b border-white/5 shrink-0 bg-white/[0.02]">
                            <div className="flex items-center gap-6">
                                <div className="flex flex-col">
                                    <p className="text-[10px] font-black text-brand-highlight uppercase tracking-[0.4em] mb-1.5 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                                        TECHNICAL SPECIFICATION
                                    </p>
                                    <p className="text-xs font-black text-muted uppercase tracking-widest">UNITEC-INSTRUMENTATION-v2.6</p>
                                </div>
                                <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                                <h3 className="text-xl sm:text-4xl font-black tracking-tighter text-main uppercase leading-none">{selectedProduct.title}</h3>
                            </div>
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="w-12 h-12 flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 rounded-full transition-all text-muted group"
                            >
                                <svg className="w-8 h-8 transform group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Catalog Modal Content */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-14 custom-scrollbar text-main bg-brand-secondary/10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24">
                                {/* Left Column: Visuals & Narrative */}
                                <div className="space-y-12">
                                    <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] bg-black/40 relative aspect-[4/3] group">
                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.title}
                                            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.15]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="px-3 py-1 bg-brand-accent/90 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded">Sub-Category: {selectedProduct.subCategory}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-highlight mb-6 flex items-center gap-4">
                                            <div className="w-12 h-px bg-brand-accent"></div>
                                            Engineering Core
                                        </h4>
                                        <p className="text-xl sm:text-2xl text-main font-bold italic leading-tight mb-8">
                                            "{selectedProduct.longDescription}"
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-highlight mb-8">Primary Industrial Deployments</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {selectedProduct.applications.map(app => (
                                                <div key={app} className="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-brand-accent/30 transition-all hover:bg-brand-accent/[0.03]">
                                                    <div className="w-3 h-3 rounded-full bg-brand-accent/60 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                                                    <span className="text-[11px] font-black uppercase tracking-widest text-muted">{app}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Hard Data */}
                                <div className="space-y-14">
                                    <div className="glass-panel p-10 sm:p-12 border-white/10 bg-brand-accent/[0.04] rounded-[40px] shadow-2xl">
                                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-brand-highlight mb-10 pb-6 border-b border-white/10 flex items-center justify-between">
                                            Mechanical Parameters
                                            <span className="text-[10px] text-muted opacity-50 tracking-widest">VERIFIED</span>
                                        </h4>
                                        <div className="space-y-6">
                                            {Object.entries(selectedProduct.specs).map(([key, value]) => (
                                                <div key={key} className="flex justify-between items-start group">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted group-hover:text-brand-highlight transition-colors flex items-center gap-2">
                                                        <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                                                        {key}
                                                    </span>
                                                    <span className="text-sm font-black text-main text-right ml-10 tracking-tight uppercase">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="glass-panel p-10 sm:p-12 border-white/10 rounded-[40px] bg-white/[0.01]">
                                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-brand-highlight mb-12">Interface Geometry & Options</h4>
                                        <div className="space-y-12">
                                            {selectedProduct.configurations.map(config => (
                                                <div key={config.name}>
                                                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted mb-6 flex items-center gap-4">
                                                        <span className="w-1.5 h-6 bg-brand-accent rounded-full"></span>
                                                        {config.name}
                                                    </p>
                                                    <div className="flex flex-wrap gap-3">
                                                        {config.options.map(opt => (
                                                            <span key={opt} className="px-5 py-2.5 bg-brand-deep border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-main shadow-inner hover:border-brand-accent/50 transition-all hover:-translate-y-1">
                                                                {opt}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="pt-12 flex flex-col gap-5">
                                        <button className="button-primary w-full shadow-[0_30px_60px_-15px_rgba(37,99,235,0.4)] py-7 text-[12px] tracking-[0.4em] uppercase font-black rounded-[2rem] active:scale-95 transition-all">
                                            Download Technical Brochure (PDF)
                                        </button>
                                        <div className="flex gap-4">
                                            <button className="flex-1 py-6 glass-panel border-white/10 hover:bg-white/5 transition-all text-muted font-black text-[10px] tracking-[0.3em] uppercase rounded-[1.5rem] flex items-center justify-center gap-3">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                                CAD Schematics
                                            </button>
                                            <button className="flex-1 py-6 glass-panel border-white/10 hover:bg-white/5 transition-all text-muted font-black text-[10px] tracking-[0.3em] uppercase rounded-[1.5rem] flex items-center justify-center gap-3">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                NABL Certs
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Features;

import React from 'react';

const Hero = () => {
    return (
        <section id="dashboard" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-grid">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-accent/20 blur-glow rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-glow rounded-full animate-float"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-main">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-6 lg:mb-8 animate-fade-in text-[10px] sm:text-xs">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                            </span>
                            <span className="text-brand-highlight font-bold uppercase tracking-widest leading-none">MI Cables & NABL Traceable Assemblies</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 lg:mb-8 leading-[1] sm:leading-[0.95] gradient-text tracking-tighter animate-slide-up">
                            ADVANCED <br />
                            <span className="text-main">THERMAL</span> <br />
                            LOGIC.
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-muted mb-10 max-w-xl animate-fade-in delay-200">
                            Unitech specializes in <b>Mineral Insulated (MI) Thermocouples, Pt100/Pt1000 RTD Sensors, and High-Precision Gauges</b> designed for aerospace and petrochemical standards.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-slide-up delay-300">
                            <a href="#products" className="button-primary no-underline w-full sm:w-auto text-sm">
                                Explore Assemblies
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a href="#aboutus" className="button-secondary no-underline w-full sm:w-auto text-sm">
                                Engineering Labs
                            </a>
                        </div>

                        <div className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-white/5 pt-10 opacity-70">
                            {[
                                { label: 'Standard', val: 'IEC 584 / 751' },
                                { label: 'Tolerance', val: 'Special Limits' },
                                { label: 'Calibration', val: 'NABL Certified' }
                            ].map((item, idx) => (
                                <div key={item.label} className={`flex flex-col gap-1 ${idx === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-brand-highlight">{item.label}</span>
                                    <span className="text-[11px] sm:text-xs font-bold text-main">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative group mt-12 lg:mt-0">
                        <div className="relative z-10 glass-panel p-2 transform transition-transform duration-700 hover:scale-[1.02]">
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                                alt="MI Cable Assembly"
                                className="rounded-xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover transition-all duration-700"
                            />
                            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 glass-panel p-4 sm:p-8 max-w-[160px] sm:max-w-[220px] shadow-3xl animate-float">
                                <p className="text-2xl sm:text-3xl font-black text-main mb-1">0.5mm</p>
                                <p className="text-[8px] sm:text-[10px] text-muted font-black uppercase tracking-widest leading-tight">Minimum Sheath Diameter</p>
                            </div>
                        </div>
                        <div className="absolute -top-8 -right-8 w-48 h-48 sm:w-64 sm:h-64 bg-brand-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

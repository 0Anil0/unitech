import React from 'react';

const About = () => {
    return (
        <section id="aboutus" className="py-24 sm:py-32 bg-brand-secondary/20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none opacity-20 text-main">
                <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-brand-accent/20 blur-[100px] sm:blur-[150px] rounded-full animate-pulse-slow"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-main">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="relative mx-auto max-w-lg lg:max-w-none">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                                alt="Unitech Calibration Lab"
                                className="rounded-3xl shadow-3xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000 w-full"
                            />
                            <div className="absolute -top-6 -right-4 sm:-top-10 sm:-right-10 glass-panel p-4 sm:p-8 animate-float shadow-2xl z-20 transition-all">
                                <span className="text-2xl sm:text-4xl font-black text-brand-highlight tracking-tighter">NABL TRACEABLE</span>
                                <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-muted mt-1 sm:mt-2">Certified Calibration Labs</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-brand-accent/10 rounded-3xl -rotate-2 sm:-rotate-3 scale-[1.02] sm:scale-105 -z-10 group-hover:rotate-0 transition-transform duration-700"></div>
                    </div>

                    <div className="order-1 lg:order-2 text-left">
                        <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
                            <div className="w-8 sm:w-12 h-0.5 bg-brand-accent"></div>
                            <span className="text-brand-highlight text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">MANUFACTURING LEGACY</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black mb-8 sm:mb-10 leading-tight tracking-tighter uppercase leading-[1.1]">
                            PRECISION <br className="hidden sm:block" />
                            <span className="text-brand-accent">THERMAL ENGINEERING.</span>
                        </h2>

                        <div className="space-y-6 sm:space-y-8">
                            <p className="text-lg sm:text-xl text-main font-medium italic leading-snug">
                                "Specializing in High-Pressure MI Assemblies and NABL Traceable Calibrations for Critical Industrial Processes."
                            </p>

                            <p className="text-sm sm:text-base text-muted leading-relaxed">
                                Since 1995, Unitech has been an industry leader in manufacturing <b>MI Thermocouples, Pt100/Pt1000 RTD Sensors</b>, and <b>Temperature Gauges</b>. Our facility features advanced argon-arc welding stations and high-vacuum annealing furnaces to ensure maximum sensor longevity.
                            </p>

                            <div className="grid grid-cols-2 gap-8 sm:gap-12 py-8 sm:py-10 border-y border-white/5 my-8">
                                <div>
                                    <p className="text-3xl sm:text-4xl font-black text-main mb-1 sm:mb-2 tracking-tighter">ISO 9001</p>
                                    <p className="text-[8px] sm:text-[10px] text-muted font-black uppercase tracking-widest">Quality System</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-black text-main mb-1 sm:mb-2 tracking-tighter">1/10 DIN</p>
                                    <p className="text-[8px] sm:text-[10px] text-muted font-black uppercase tracking-widest">RTD Accuracy</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {['MI Cable Manufacturing', 'Pulse TIG Welding', 'Vacuum Annealing'].map(tag => (
                                    <span key={tag} className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-3 py-1 glass-panel border border-white/10 rounded-full text-muted transition-all hover:border-brand-accent/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

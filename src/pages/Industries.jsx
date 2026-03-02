import React from 'react';

const Industries = () => {
    const industriesData = [
        {
            title: 'Aluminium Products',
            description: 'High-precision thermal solutions designed for melting furnaces, holding furnaces, and extrusion processes in the aluminium industry.',
            pdf: '/datasheets/aluminium-products.pdf'
        },
        {
            title: 'Glass Industries',
            description: 'Specialized sensors for molten glass temperature measurement, ensuring stability and accuracy in feeder and forehearth applications.',
            pdf: '/datasheets/glass-industries.pdf'
        },
        {
            title: 'Power Plan Products',
            description: 'Robust instrumentation for steam and gas turbines, boiler monitoring, and critical cooling systems in power generation facilities.',
            pdf: '/datasheets/power-plan-products.pdf'
        },
        {
            title: 'Steel Products',
            description: 'Extremely durable thermal assemblies for blast furnaces, reheating furnaces, and continuous casting operations in the steel manufacturing sector.',
            pdf: '/datasheets/steel-products.pdf'
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <nav className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-muted mb-6">
                <span>Home</span>
                <span>/</span>
                <span className="text-brand-accent">Industries</span>
            </nav>
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8 leading-[0.9]">
                Specialized <br /><span className="text-brand-accent">Industrial</span> <br />Solutions
            </h1>
            <p className="text-muted text-lg max-w-2xl leading-relaxed">
                We provide high-precision temperature instrumentation and thermal assemblies tailored for the most demanding industrial environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {industriesData.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-10 border border-white/5 bg-white/5 rounded-[2.5rem] hover:bg-brand-accent/10 hover:border-brand-accent/40 transition-all duration-500 relative overflow-hidden"
                    >
                        {/* Decorative Background Icon/Number */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-all duration-700"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-12 h-1.5 bg-brand-accent/20 mb-8 group-hover:w-full group-hover:bg-brand-accent transition-all duration-700"></div>

                            <h3 className="text-3xl font-black text-main mb-6 uppercase tracking-tighter leading-none group-hover:text-brand-accent transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-muted text-sm leading-relaxed mb-10 flex-1 opacity-80 group-hover:opacity-100 italic">
                                "{item.description}"
                            </p>

                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                                <span>View Industry Catalog</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-24 p-12 glass-panel border-white/5 bg-white/[0.02] rounded-[3rem] text-center">
                <h4 className="text-xl font-black text-main uppercase mb-4 tracking-tight">Need a Custom Solution?</h4>
                <p className="text-muted text-sm max-w-xl mx-auto mb-8">
                    Our engineering team specializes in designing bespoke thermal instrumentation for unique process challenges. Contact us to discuss your specific requirements.
                </p>
                <div className="flex justify-center">
                    <button className="px-10 py-5 bg-brand-accent text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-accent/20">
                        Consult Our Engineers
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Industries;


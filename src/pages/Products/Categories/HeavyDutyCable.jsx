import React from 'react';

const HeavyDutyCable = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <nav className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-muted mb-6">
                <span>Products</span>
                <span>/</span>
                <span>Categories</span>
                <span>/</span>
                <span className="text-brand-accent">Heavy Duty Cable</span>
            </nav>
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8 leading-[0.9]">Heavy Duty <br /><span className="text-brand-accent">Cable</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-muted">
                <div className="p-8 border border-white/5 bg-white/5 rounded-3xl font-bold">
                    <h3 className="text-2xl font-black text-main mb-4 uppercase">T/C Cable</h3>
                    <p>Thermocouple extension and compensating cables for various environments.</p>
                </div>
                <div className="p-8 border border-white/5 bg-white/5 rounded-3xl font-bold">
                    <h3 className="text-2xl font-black text-main mb-4 uppercase">RTD Cable</h3>
                    <p>Multi-core cables for Resistance Temperature Detectors with high noise immunity.</p>
                </div>
            </div>
        </div>
    );
};

export default HeavyDutyCable;

import React from 'react';

const ThermalMonitoring = () => {
    const items = ['Thermocouples (T/C)', 'RTD Sensors', 'Thermowells (T/W)', 'Process Heaters (PH)', 'Temperature Meters (TM)', 'Pyrometers'];

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <nav className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-muted mb-6">
                <span>Products</span>
                <span>/</span>
                <span>Categories</span>
                <span>/</span>
                <span className="text-brand-accent">Thermal Monitoring</span>
            </nav>
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8 leading-[0.9]">Thermal Monitoring <br /><span className="text-brand-accent">Solutions</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {items.map((item) => (
                    <div key={item} className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-accent transition-all cursor-pointer">
                        <h3 className="text-lg font-bold text-main mb-4">{item}</h3>
                        <p className="text-muted text-sm mb-6 leading-relaxed">High-accuracy monitoring for critical thermal environments. Available with various calibrations and housings.</p>
                        <div className="flex gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">View Details</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Datasheet</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThermalMonitoring;

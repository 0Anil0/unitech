import React from 'react';

const ElectrifiedHeating = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <nav className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-muted mb-6">
                <span>Products</span>
                <span>/</span>
                <span>Categories</span>
                <span>/</span>
                <span className="text-brand-accent">Electrified Heating</span>
            </nav>
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8 leading-[0.9]">Electrified Heating <br /><span className="text-brand-accent">Solutions</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-muted">
                <div className="p-8 border border-white/5 bg-white/5 rounded-3xl">
                    <h3 className="text-2xl font-black text-main mb-4 uppercase">Process Heaters</h3>
                    <p>High-performance heating elements for industrial processes, offering precise temperature control and durability.</p>
                </div>
                {/* Placeholder for more items */}
            </div>
        </div>
    );
};

export default ElectrifiedHeating;

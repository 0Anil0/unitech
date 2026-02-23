import React from 'react';

const Industries = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8">Industries</h1>
            <p className="text-muted text-lg max-w-2xl">
                Serving a diverse range of industries with high-precision temperature instrumentation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {['Aerospace', 'Semiconductor', 'Power Generation', 'Medical'].map((industry) => (
                    <div key={industry} className="p-8 border border-white/5 bg-white/5 rounded-3xl hover:bg-brand-accent/10 transition-colors">
                        <h3 className="text-2xl font-black text-main mb-4 uppercase">{industry}</h3>
                        <p className="text-muted">Specialized thermal solutions designed for the rigorous demands of the {industry.toLowerCase()} sector.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Industries;

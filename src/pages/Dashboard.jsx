import React from 'react';

const Dashboard = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8">Dashboard</h1>
            <p className="text-muted text-lg max-w-2xl">
                Welcome to your thermal instrumentation dashboard. Monitor real-time sensor data and system status.
            </p>
            {/* Dashboard content placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-accent transition-all group">
                        <div className="h-1 w-12 bg-brand-accent mb-6"></div>
                        <h3 className="text-xl font-bold text-main mb-2">Metric {i}</h3>
                        <p className="text-muted text-sm">Real-time tracking of critical thermal parameters.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

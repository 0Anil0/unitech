import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const categories = [
        { name: 'Thermal Monitoring', path: 'categories/thermal-monitoring' },
        { name: 'Electrified Heating', path: 'categories/electrified-heating' },
        { name: 'Heavy Duty Cable', path: 'categories/heavy-duty-cable' }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-12">Product Catalog</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <Link to={cat.path} key={cat.path} className="group p-10 border border-white/10 bg-white/5 rounded-3xl hover:border-brand-accent transition-all cursor-pointer">
                        <h3 className="text-2xl font-black text-main group-hover:text-brand-accent transition-colors mb-4 uppercase">{cat.name}</h3>
                        <p className="text-muted text-sm leading-relaxed mb-8">Click to explore our full range of solutions in this category.</p>
                        <div className="inline-block text-[10px] font-black uppercase tracking-widest border-b border-brand-accent pb-1">Explore Category</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

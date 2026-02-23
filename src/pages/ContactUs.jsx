import React from 'react';

const ContactUs = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
                <div className="space-y-8">
                    <p className="text-muted text-lg">
                        Have a technical query or need a custom thermal solution? Our engineering team is here to help.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">Technical Sales</h4>
                            <p className="text-xl font-bold text-main">sales@unitech.com</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">Engineering Support</h4>
                            <p className="text-xl font-bold text-main">support@unitech.com</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">Global Headquarters</h4>
                            <p className="text-xl font-bold text-main">Industrial Area Phase 2, New Delhi, India</p>
                        </div>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-accent outline-none" />
                        <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-accent outline-none" />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-accent outline-none" />
                    <textarea placeholder="Tell us about your thermal challenge" rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-accent outline-none resize-none"></textarea>
                    <button className="w-full bg-brand-accent text-white font-black py-5 rounded-xl uppercase tracking-widest hover:scale-[1.02] transition-transform active:scale-95">Send Inquiry</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;

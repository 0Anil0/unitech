import React from 'react';

const AboutUs = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-5xl font-black text-main uppercase tracking-tighter mb-8">About Us</h1>
            <p className="text-muted text-lg max-w-2xl mb-12">
                Unitech Therminstruments Pvt. Ltd. (formerly Unitech Instruments) is a premier manufacturer of temperature sensors, including Thermocouples and RTDs, along with pressure gauges, temperature gauges, heating solutions, and instrument cables. Founded in 2014, we have built a strong reputation across diverse industrial sectors for accuracy, innovation, quality, and reliable service.
            </p>
            <div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-8">
                <section>
                    <h2 className="text-3xl font-bold text-main mb-4">Our Journey</h2>
                    <p>
                        What began in 2014 as a 1,500 sq. ft. facility has grown into a modern 3,000 sq. ft. manufacturing unit, reflecting our continuous expansion and trust earned from customers. Over the years, we have extended our product range to include all types of thermocouples manufactured to international standards.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl font-bold text-main mb-4">Quality &amp; Certification</h2>
                    <p>
                        Unitech Therminstruments Pvt. Ltd., Udaipur is ISO 9001:2015 certified, achieved within a short span of establishment. This milestone reflects our culture of continuous improvement, innovation, and uncompromising quality standards.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl font-bold text-main mb-4">People &amp; Culture</h2>
                    <p>
                        Beyond products, our strength lies in our people. We foster a collaborative and efficient work culture where employees are valued, the right attitude is maintained at all times, and teamwork drives quality outcomes.
                    </p>
                    <blockquote className="border-l-4 pl-4 italic text-muted">
                        “Everyone works efficiently as a team to produce a quality end product.”
                    </blockquote>
                    <blockquote className="border-l-4 pl-4 italic text-muted mt-2">
                        “Fantastic management and a great team.”
                    </blockquote>
                </section>
                <section>
                    <h2 className="text-3xl font-bold text-main mb-4">Moving Forward</h2>
                    <p>
                        With a passion to perform better every day and to innovate continuously, Unitech Therminstruments Pvt. Ltd. remains a growing, successful organization dedicated to delivering precise measurement solutions our customers can trust.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;

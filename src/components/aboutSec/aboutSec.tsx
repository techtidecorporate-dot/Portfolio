import React from 'react';
import ThemeButton from '../themeButton/themeButton';
import TitleComponent from '../titleComponent/titleComponent';

export default function AboutSec() {
    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about" className="section-pad bg-surface dark:bg-ink relative overflow-hidden">
            {/* Background accent */}
            <div className="orb-primary w-80 h-80 bottom-[-10%] right-[-5%] opacity-10" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ── Left: Text ── */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <div className="flex flex-col gap-4">
                            <span className='inline-flex items-center justify-center  w-fit px-2 py-1 rounded-full glass-card-inset-2'>
                                <TitleComponent
                                    size="small-semibold"
                                    className="text-ink uppercase tracking-[0.18em]"
                                >
                                    About Me
                                </TitleComponent>
                            </span>
                            <h2 className="heading-h2 text-ink dark:text-surface">
                                Approach &amp;{' '}
                                <span className="gradient-text-primary">Philosophy</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4 text-muted leading-relaxed">
                            <p>I'm Muhammad Nadir, a Full Stack Developer with over 4 years of hands-on experience crafting robust, scalable web and mobile applications. I thrive at the intersection of clean code and great user experience.</p>
                            <p>My stack spans the entire product lifecycle from designing pixel-perfect React interfaces to architecting Node.js APIs, building cross-platform mobile apps with React Native, and deploying cloud-native infrastructure on AWS. I've shipped projects ranging from solo MVPs to full team collaborations.</p>
                            <p>Whether you need a landing page that converts, a backend that scales, or a mobile app your users love I bring all the pieces together, so you don't have to hire a whole team.</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <ThemeButton variant="primary" onClick={scrollToContact}>Work With Me</ThemeButton>
                            <ThemeButton variant="secondary" onClick={() => { }}>Download CV</ThemeButton>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-[4/5]">
                            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-b from-primary-start to-primary-end opacity-20 blur-xl" />

                            <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden glass-card-light dark:bg-card-bg dark:border dark:border-white/8">
                                <img
                                    src="/about-photo.jpg"
                                    alt="Muhammad Nadir"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 glass-card-light dark:bg-card-bg dark:border dark:border-white/8 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-card-hover">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-ink dark:text-surface leading-tight">Open to opportunities</p>
                                    <p className="text-xs text-muted leading-tight">Freelance &amp; full-time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
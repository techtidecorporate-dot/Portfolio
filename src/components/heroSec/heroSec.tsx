import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, DownloadSimpleIcon } from '@phosphor-icons/react';
import clsx from 'clsx';
import ThemeButton from '../themeButton/themeButton';

const ROLES = [
    'Full Stack Developer',
    'React & Next.js Expert',
    'Node.js Engineer',
    'Mobile App Developer',
    'Cloud & DevOps Enthusiast',
];

const TECH_BADGES = ['React', 'Next.js', 'Node.js', 'TypeScript', 'React Native', 'AWS'];

export default function HeroSec() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Rotate roles every 2.8s with a fade out/in transition
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setRoleIndex(prev => (prev + 1) % ROLES.length);
                setVisible(true);
            }, 350);
        }, 2800);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            <div className="container">
                <div className='relative z-10 pt-28 pb-16 md:pt-32 md:pb-20'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div className="flex flex-col gap-6 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full glass-card-inset-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-semibold text-black/80 tracking-widest uppercase">
                                    Available for work
                                </span>
                            </div>

                            {/* Name */}
                            <h1 className="heading-h1 text-black">
                                Muhammad{' '}
                                <span className="gradient-text-primary">Nadir</span>
                            </h1>

                            {/* Animated Role */}
                            <div className="flex items-center gap-3 h-10">
                                <span className="w-8 h-0.5 bg-primary rounded-full" />
                                <span
                                    className={clsx(
                                        'text-xl md:text-2xl font-semibold text-black/90 transition-all duration-350',
                                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
                                    )}
                                    style={{ transition: 'opacity 0.35s ease, transform 0.35s ease' }}
                                >
                                    {ROLES[roleIndex]}
                                </span>
                                <span className="w-0.5 h-7 bg-primary/70 rounded-full animate-[typing-blink_1s_ease_infinite]" />
                            </div>

                            {/* Value Prop */}
                            <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-lg">I craft end-to-end digital products from pixel-perfect interfaces to scalable APIs and cloud infrastructure turning ideas into production-ready solutions that actually ship.</p>

                            {/* CTAs */}
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <ThemeButton
                                    variant="primary"
                                    onClick={scrollToProjects}
                                >
                                    View Projects
                                </ThemeButton>
                                <ThemeButton
                                    variant="secondary"
                                    onClick={scrollToContact}
                                >
                                    <span className="flex items-center gap-2">
                                        <DownloadSimpleIcon size={18} />
                                        Download Resume
                                    </span>
                                </ThemeButton>
                            </div>
                        </div>

                        {/* ── Right: Initials Avatar ── */}
                        <div className="order-1 lg:order-2 flex items-center justify-center">
                            <div className="relative">
                                {/* Outer spinning ring */}
                                <div className="absolute inset-0 rounded-full animate-spin-slow"
                                    style={{
                                        background: 'conic-gradient(from 0deg, var(--color-primary-start), var(--color-primary-end), transparent, var(--color-primary-start))',
                                        padding: '3px',
                                        borderRadius: '9999px',
                                    }}
                                />

                                {/* Avatar card */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass-card-effect flex items-center justify-center border-2 border-primary/30 shadow-[0_0_80px_var(--color-primary)/0.2]">
                                    {/* Gradient initials */}
                                    <div className="flex flex-col items-center gap-2">
                                        <span
                                            className="font-extrabold select-none gradient-text-primary"
                                            style={{ fontSize: 'clamp(64px, 12vw, 100px)', lineHeight: 1, letterSpacing: '-0.04em' }}
                                        >
                                            MN
                                        </span>
                                        <span className="text-xs font-semibold tracking-[0.3em] text-black/50 uppercase">
                                            Full Stack Dev
                                        </span>
                                    </div>

                                    {/* Floating orbit dots */}
                                    <div className="absolute w-4 h-4 rounded-full bg-primary animate-float top-4 right-8" />
                                    <div className="absolute w-2.5 h-2.5 rounded-full bg-accent animate-float-reverse bottom-8 left-6" />
                                    <div className="absolute w-3 h-3 rounded-full bg-primary/50 animate-pulse-soft top-1/2 -right-2" />
                                </div>

                                {/* Floating stat chips */}
                                <div className="absolute -top-4 -right-4 glass-card-light dark:glass-card-inset rounded-2xl px-4 py-2 animate-float text-ink dark:text-black shadow-card-hover">
                                    <p className="text-xs font-medium text-muted">Experience</p>
                                    <p className="text-lg font-bold gradient-text-primary">4+ Years</p>
                                </div>
                                <div className="absolute -bottom-4 -left-4 glass-card-light dark:glass-card-inset rounded-2xl px-4 py-2 animate-float-reverse text-ink dark:text-black shadow-card-hover">
                                    <p className="text-xs font-medium text-muted">Projects</p>
                                    <p className="text-lg font-bold gradient-text-primary">50+ Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

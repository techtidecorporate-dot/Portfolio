import { useEffect, useRef, useState } from 'react';
import { DownloadSimpleIcon } from '@phosphor-icons/react';
import clsx from 'clsx';
import ThemeButton from '../themeButton/themeButton';
import heroImg from "../../assets/muhammad-nadir.webp";
import { HERO_ROLES } from '../../Data';

export default function HeroSec() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setRoleIndex(prev => (prev + 1) % HERO_ROLES.length);
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
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full glass-card-inset-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-semibold text-black/80 tracking-widest uppercase">
                                    Available for work
                                </span>
                            </div>

                            <h1 className="heading-h1 text-black">
                                Muhammad{' '}
                                <span className="gradient-text-primary">Nadir</span>
                            </h1>

                            <div className="flex items-center gap-3 h-10">
                                <span className="w-8 h-0.5 bg-primary rounded-full" />
                                <span
                                    className={clsx(
                                        'text-xl md:text-2xl font-semibold text-black/90 transition-all duration-350',
                                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
                                    )}
                                    style={{ transition: 'opacity 0.35s ease, transform 0.35s ease' }}
                                >
                                    {HERO_ROLES[roleIndex]}
                                </span>
                                <span className="w-0.5 h-7 bg-primary/70 rounded-full animate-[typing-blink_1s_ease_infinite]" />
                            </div>

                            <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-lg">I craft end-to-end digital products from pixel-perfect interfaces to scalable APIs and cloud infrastructure turning ideas into production-ready solutions that actually ship.</p>

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
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="relative rounded-xl overflow-hidden">
                                    <img className='w-full h-full object-cover' src={heroImg} alt="Muhamamd Nadir Image" />
                                </div>

                                <div className="absolute -top-4 -right-4 glass-card-light rounded-xl px-4 py-2 animate-float text-ink shadow-card-hover">
                                    <p className="text-xs font-medium text-muted">Experience</p>
                                    <p className="text-lg font-bold gradient-text-primary">4+ Years</p>
                                </div>
                                <div className="absolute -bottom-4 -left-4 glass-card-light rounded-xl px-4 py-2 animate-float-reverse text-ink shadow-card-hover">
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

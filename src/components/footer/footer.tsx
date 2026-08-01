import React from 'react';
import { Link } from 'react-router-dom';
import {
    GithubLogo,
    LinkedinLogo,
    TwitterLogo,
    EnvelopeSimple,
} from '@phosphor-icons/react';
import clsx from 'clsx';

const NAV_LINKS = [
    { label: 'Home',         href: '#home' },
    { label: 'About',        href: '#about' },
    { label: 'Services',     href: '#services' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact',      href: '#contact' },
];

const SOCIAL_LINKS = [
    { id: 'footer-github',   icon: <GithubLogo size={18} weight="fill" />,   label: 'GitHub',   href: '#' },
    { id: 'footer-linkedin', icon: <LinkedinLogo size={18} weight="fill" />, label: 'LinkedIn', href: '#' },
    { id: 'footer-twitter',  icon: <TwitterLogo size={18} weight="fill" />,  label: 'Twitter',  href: '#' },
    { id: 'footer-email',    icon: <EnvelopeSimple size={18} weight="fill" />,label: 'Email',   href: 'mailto:nadir@example.com' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    const handleNavClick = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-ink-deep dark:bg-black border-t border-white/6 relative overflow-hidden">
            {/* Subtle orb */}
            <div className="orb-primary w-80 h-40 top-0 left-1/2 -translate-x-1/2 opacity-10" />

            <div className="container relative z-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

                    {/* Brand column */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" onClick={() => handleNavClick('#home')} className="flex items-center gap-1">
                            <span className="heading-h4 gradient-text-primary font-extrabold tracking-tight select-none">M</span>
                            <span className="heading-h4 font-extrabold tracking-tight text-surface select-none">Nadir</span>
                            <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
                        </Link>
                        <p className="text-sm text-surface/50 leading-relaxed max-w-xs">
                            Full Stack Developer crafting end-to-end digital products.
                            Web · Mobile · Backend · Cloud.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-2 mt-2">
                            {SOCIAL_LINKS.map(({ id, icon, label, href }) => (
                                <a
                                    key={id}
                                    id={id}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={clsx(
                                        'w-9 h-9 rounded-lg flex items-center justify-center',
                                        'text-surface/50 border border-white/8',
                                        'hover:text-primary hover:border-primary/40 hover:bg-primary/8',
                                        'transition-all duration-200',
                                    )}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold text-surface/40 uppercase tracking-[0.2em]">
                            Quick Links
                        </p>
                        <ul className="flex flex-col gap-2">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <button
                                        onClick={() => handleNavClick(href)}
                                        className="text-sm text-surface/60 hover:text-primary transition-colors duration-200 text-left"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold text-surface/40 uppercase tracking-[0.2em]">
                            Contact
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-surface/60">
                            <p>nadir@example.com</p>
                            <p>Pakistan — Remote Worldwide</p>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-green-400 text-xs font-medium">Open to work</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-surface/30">
                        © {year} Muhammad Nadir. All rights reserved.
                    </p>
                    <p className="text-xs text-surface/30">
                        Built with React · TypeScript · Tailwind CSS v4
                    </p>
                </div>
            </div>
        </footer>
    );
}

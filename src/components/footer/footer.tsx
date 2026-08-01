import React from 'react';
import { Link } from 'react-router-dom';
import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    TwitterLogoIcon,
    EnvelopeSimpleIcon,
    ArrowUpIcon,
} from '@phosphor-icons/react';
import clsx from 'clsx';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
    { id: 'footer-github', label: 'GitHub', icon: <GithubLogoIcon size={18} weight="fill" />, href: '#' },
    { id: 'footer-linkedin', label: 'LinkedIn', icon: <LinkedinLogoIcon size={18} weight="fill" />, href: '#' },
    { id: 'footer-twitter', label: 'Twitter', icon: <TwitterLogoIcon size={18} weight="fill" />, href: '#' },
    { id: 'footer-email', label: 'Email', icon: <EnvelopeSimpleIcon size={18} weight="fill" />, href: 'mailto:nadir@example.com' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    const handleNavClick = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black/90 border-t border-white/6 relative overflow-hidden">
            <div className="orb-primary w-96 h-64 top-0 left-1/2 -translate-x-1/2 opacity-10" />

            <div className="container relative z-10 pt-16 l:pt-20 pb-10">

                {/* ── Brand / Nav / Socials / Info row ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand column */}
                    <div className="flex flex-col gap-4 l:col-span-1">
                        <Link
                            to="/"
                            onClick={() => handleNavClick('#home')}
                            className="flex items-center gap-1 w-fit"
                        >
                            <span className="heading-h4 gradient-text-primary font-extrabold tracking-tight select-none">M</span>
                            <span className="heading-h4 font-extrabold tracking-tight text-surface select-none">Nadir</span>
                            <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
                        </Link>
                        <p className="text-sm sm:text-base text-surface/50 leading-relaxed max-w-xs">
                            Full Stack Developer crafting end-to-end digital products.
                            Web · Mobile · Backend · Cloud.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold text-surface/40 uppercase tracking-[0.2em]">
                            Navigate
                        </p>
                        <ul className="flex flex-col gap-2.5">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <button
                                        onClick={() => handleNavClick(href)}
                                        className="text-sm sm:text-base text-surface/60 hover:text-primary transition-colors duration-200 text-left"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold text-surface/40 uppercase tracking-[0.2em]">
                            Elsewhere
                        </p>
                        <ul className="flex flex-col gap-2.5">
                            {SOCIAL_LINKS.map(({ id, label, icon, href }) => (
                                <li key={id}>
                                    <a
                                        id={id}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-2 text-sm sm:text-base text-surface/60 hover:text-primary transition-colors duration-200 w-fit"
                                    >
                                        {icon}
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold text-surface/40 uppercase tracking-[0.2em]">
                            Info
                        </p>
                        <div className="flex flex-col gap-2.5 text-sm sm:text-base text-surface/60">
                            <p>nadir@example.com</p>
                            <p>Pakistan — Remote Worldwide</p>
                        </div>
                    </div>
                </div>

                {/* ── Giant wordmark ── */}
                <div className="relative mt-16 l:mt-20 select-none">
                    <Link
                        to="/"
                        onClick={() => handleNavClick('#home')}
                        className="block"
                    >
                        <span className="block text-[18vw] l:text-[9vw] leading-none font-extrabold tracking-tight text-transparent [-webkit-text-stroke:1px_var(--color-surface)] opacity-20 hover:opacity-40 transition-opacity duration-500">
                            M Nadir
                        </span>
                    </Link>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="absolute right-0 bottom-2 l:bottom-4 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-surface/60 hover:text-surface hover:border-primary hover:bg-primary/10 transition-all duration-250"
                    >
                        <ArrowUpIcon size={18} />
                    </button>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <p className="text-xs sm:text-sm text-white/50">
                        © {year} Muhammad Nadir. All rights reserved.
                    </p>
                </div>
            </div>
        </footer >
    );
}
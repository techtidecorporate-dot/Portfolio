import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import clsx from 'clsx';
import ThemeButton from '../themeButton/themeButton';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    // Detect scroll to add border + blur intensification
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleNavClick = (href: string) => {
        setActiveLink(href);
        setMenuOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-parchment/80 dark:bg-ink/80 backdrop-blur-xl border-b border-black/8 dark:border-white/8 shadow-card-hover'
                    : 'bg-transparent',
            )}
        >
            <div className="container">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => handleNavClick('#home')}
                        className="flex items-center gap-1 group"
                        aria-label="M Nadir — Home"
                    >
                        <span className="heading-h5 gradient-text-primary font-extrabold tracking-tight select-none">
                            M
                        </span>
                        <span className={clsx(
                            'heading-h5 font-extrabold tracking-tight select-none transition-colors duration-300',
                            scrolled ? 'text-ink dark:text-black' : 'text-black',
                        )}>
                            Nadir
                        </span>
                        <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <button
                                    onClick={() => handleNavClick(href)}
                                    className={clsx(
                                        'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                                        scrolled
                                            ? 'text-ink/70 dark:text-black/70 hover:text-ink dark:hover:text-black'
                                            : 'text-black/80 hover:text-black',
                                        'after:absolute after:bottom-0.5 after:left-4 after:right-4 after:h-px after:rounded-full',
                                        'after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 after:origin-left',
                                        'hover:after:scale-x-100',
                                        activeLink === href && 'text-primary after:scale-x-100',
                                    )}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeButton
                            variant="primary"
                            onClick={() => handleNavClick('#contact')}
                        >
                            Let's Talk
                        </ThemeButton>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        id="mobile-menu-toggle"
                        className={clsx(
                            'md:hidden flex items-center justify-center size-10 rounded-xl transition-all duration-200',
                            scrolled
                                ? 'text-ink dark:text-black glass-card-light dark:glass-card-inset'
                                : 'text-black glass-card-inset',
                        )}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <XIcon size={20} weight="bold" /> : <ListIcon size={20} weight="bold" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden animate-slide-down border-t border-black/8 dark:border-white/8 bg-parchment/95 dark:bg-ink/95 backdrop-blur-xl">
                    <div className="container py-4 flex flex-col gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <button
                                key={href}
                                onClick={() => handleNavClick(href)}
                                className={clsx(
                                    'w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                                    'text-ink/70 dark:text-black/70 hover:text-ink dark:hover:text-black hover:bg-black/5 dark:hover:bg-white/5',
                                    activeLink === href && 'text-primary bg-primary/8',
                                )}
                            >
                                {label}
                            </button>
                        ))}
                        <div className="pt-2 pb-1">
                            <ThemeButton
                                variant="primary"
                                className="w-full rounded-full justify-center"
                                onClick={() => handleNavClick('#contact')}
                            >
                                Let's Talk
                            </ThemeButton>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

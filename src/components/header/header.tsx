import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import clsx from 'clsx';
import ThemeButton from '../themeButton/themeButton';
import brandlogo from '../../assets/logo-dark.svg';
import { NAV_LINKS } from '../../Data';

interface FooterProps {
    scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export default function Header({ scrollToSection }: FooterProps) {
    const [, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const handleNavClick = (href: string) => {
        setActiveLink(href);
        setMenuOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleMobileNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
        setActiveLink(href);
        setMenuOpen(false);
        if (href.startsWith('#')) {
            scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, href.replace('#', ''));
        }
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-parchment/80 backdrop-blur-xl border-b border-black/8 shadow-card-hover'
        >
            <div className="container">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    <Link
                        to="/"
                        onClick={() => handleNavClick('#home')}
                        className="flex items-center gap-1 group"
                        aria-label="M Nadir — Home"
                    >
                        <img className="w-32 h-full object-contain" src={brandlogo} alt="M Nadir." />
                    </Link>

                    <ul className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <button
                                    onClick={(e) => {
                                        if (href.startsWith('#')) {
                                            const anchorEvent = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                                            scrollToSection(anchorEvent, href.replace('#', ''));
                                        }
                                    }}
                                    className='relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-black/80 hover:text-primary'
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center gap-3">
                        <ThemeButton
                            variant="primary"
                            onClick={() => handleNavClick('#contact')}
                        >
                            Let's Talk
                        </ThemeButton>
                    </div>

                    <button
                        id="mobile-menu-toggle"
                        className='md:hidden flex items-center justify-center size-10 rounded-lg transition-all duration-200 text-ink glass-card-light'
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <XIcon size={20} weight="bold" /> : <ListIcon size={20} weight="bold" />}
                    </button>
                </nav>
            </div>

            {menuOpen && (
                <div className="md:hidden animate-slide-down border-t border-black/8 bg-white/80 backdrop-blur-xl">
                    <div className="container py-4 flex flex-col gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <button
                                key={href}
                                onClick={(e) => handleMobileNavClick(e, href)}
                                className={clsx(
                                    'w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                                    'text-ink/70 hover:text-ink hover:bg-black/5',
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

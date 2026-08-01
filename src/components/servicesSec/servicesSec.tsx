import React from 'react';
import {
    GlobeIcon,
    DeviceMobileIcon,
    CloudArrowUpIcon,
    WrenchIcon,
    PaintBrushIcon,
    DatabaseIcon,
} from '@phosphor-icons/react';
import clsx from 'clsx';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';

interface Service {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
}

const SERVICES: Service[] = [
    {
        id: 'web-dev',
        icon: <GlobeIcon size={32} weight="duotone" />,
        title: 'Web App Development',
        description:
            'High-performance web applications built with React, Next.js, and TypeScript. From MVPs to complex SaaS platforms — responsive, accessible, and blazing fast.',
        tags: ['React', 'Next.js', 'TypeScript', 'SEO'],
    },
    {
        id: 'mobile-dev',
        icon: <DeviceMobileIcon size={32} weight="duotone" />,
        title: 'Mobile App Development',
        description:
            'Cross-platform iOS & Android apps with React Native and Expo. Native-feeling performance, single codebase, published to both app stores.',
        tags: ['React Native', 'Expo', 'iOS', 'Android'],
    },
    {
        id: 'backend',
        icon: <DatabaseIcon size={32} weight="duotone" />,
        title: 'API & Backend Engineering',
        description:
            'RESTful and GraphQL APIs with Node.js, Express, and NestJS. Designed for scale — with proper auth, rate limiting, and clean architecture.',
        tags: ['Node.js', 'NestJS', 'GraphQL', 'PostgreSQL'],
    },
    {
        id: 'devops',
        icon: <CloudArrowUpIcon size={32} weight="duotone" />,
        title: 'Cloud & DevOps',
        description:
            'End-to-end deployment pipelines, Docker containers, CI/CD workflows, and AWS infrastructure. Ship faster and more reliably with automation.',
        tags: ['AWS', 'Docker', 'CI/CD', 'Nginx'],
    },
    {
        id: 'ui-code',
        icon: <PaintBrushIcon size={32} weight="duotone" />,
        title: 'UI/UX to Code',
        description:
            'Figma designs converted to pixel-perfect, interactive components. Every spacing, hover state, and animation — exactly as designed.',
        tags: ['Figma', 'Tailwind', 'Framer', 'CSS'],
    },
    {
        id: 'full-stack',
        icon: <WrenchIcon size={32} weight="duotone" />,
        title: 'Full Stack Solutions',
        description:
            'Complete product builds — from database schema to deployed frontend. The full package: auth, payments, notifications, dashboards, and more.',
        tags: ['End-to-End', 'Auth', 'Stripe', 'Realtime'],
    },
];

export default function ServicesSec() {
    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="services" className="section-pad bg-parchment dark:bg-ink relative overflow-hidden">
            <div className="orb-primary w-96 h-96 top-0 right-[-10%] opacity-15" />
            <div className="orb-accent w-64 h-64 bottom-0 left-[-5%] opacity-15" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-14">
                    <span className='inline-flex items-center justify-center  w-fit px-2 py-1 rounded-full glass-card-inset-2'>
                        <TitleComponent
                            size="small-semibold"
                            className="text-ink uppercase tracking-[0.18em]"
                        >
                            Services
                        </TitleComponent>
                    </span>
                    <h2 className="heading-h2 text-ink dark:text-surface max-w-2xl">
                        Professional{' '}
                        <span className="gradient-text-primary">Services</span>
                    </h2>
                    <p className="text-muted max-w-xl leading-relaxed">From concept to deployment — I cover every layer of the stack so your product ships complete, polished, and production-ready.</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((svc, i) => (
                        <div
                            key={svc.id}
                            id={`service-${svc.id}`}
                            className={clsx(
                                'card-base group relative overflow-hidden',
                                'glass-card-light dark:bg-card-bg dark:border dark:border-white/8',
                                'hover:shadow-card-hover hover:-translate-y-2 hover:border-primary/30',
                                'cursor-default',
                                'animate-fade-in-up',
                            )}
                            style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
                        >
                            {/* Gradient top border on hover */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary-start to-primary-end scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center text-white mb-5 shadow-[0_4px_14px_var(--color-primary)/0.25] group-hover:scale-110 transition-transform duration-300">{svc.icon}</div>

                            {/* Content */}
                            <h3 className="heading-h6 text-ink dark:text-surface mb-3 group-hover:text-primary transition-colors duration-300">{svc.title}</h3>
                            <p className="text-sm text-muted leading-relaxed mb-5">{svc.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {svc.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/8 text-primary border border-primary/15"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

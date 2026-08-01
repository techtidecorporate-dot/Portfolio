import React, { useState } from 'react';
import clsx from 'clsx';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';

interface Project {
    id: string;
    title: string;
    description: string;
    category: 'Frontend' | 'Backend' | 'Full Stack' | 'Mobile';
    tags: string[];
    liveUrl: string;
    image: string; // TODO: replace with real project screenshots
}

// MOCK DATA — replace with real projects
const PROJECTS: Project[] = [
    {
        id: 'ecommerce',
        title: 'E-Commerce Platform',
        description:
            'Full-featured online store with product management, cart, Stripe payments, order tracking, and an admin dashboard.',
        category: 'Full Stack',
        tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
        liveUrl: '#',
        image: '/projects/ecommerce.jpg',
    },
    {
        id: 'booking-dashboard',
        title: 'Booking Dashboard',
        description:
            'Real-time appointment management system for service businesses. Calendar view, notifications, and multi-staff scheduling.',
        category: 'Full Stack',
        tags: ['React', 'NestJS', 'Socket.io', 'MongoDB', 'AWS'],
        liveUrl: '#',
        image: '/projects/booking-dashboard.jpg',
    },
    {
        id: 'social-app',
        title: 'Social Media App',
        description:
            'Mobile-first social platform with posts, stories, real-time chat, push notifications, and media uploads.',
        category: 'Mobile',
        tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
        liveUrl: '#',
        image: '/projects/social-app.jpg',
    },
    {
        id: 'saas-analytics',
        title: 'SaaS Analytics Platform',
        description:
            'Multi-tenant data analytics dashboard with custom charts, CSV exports, role-based access, and billing integration.',
        category: 'Full Stack',
        tags: ['Next.js', 'Prisma', 'Recharts', 'Stripe', 'Docker'],
        liveUrl: '#',
        image: '/projects/saas-analytics.jpg',
    },
    {
        id: 'portfolio-builder',
        title: 'Portfolio Builder',
        description:
            'Drag-and-drop website builder for creatives. Live preview, custom domain support, and SEO settings.',
        category: 'Frontend',
        tags: ['React', 'TypeScript', 'DnD Kit', 'Zustand'],
        liveUrl: '#',
        image: '/projects/portfolio-builder.jpg',
    },
    {
        id: 'api-gateway',
        title: 'Microservices API Gateway',
        description:
            'Production API gateway with JWT auth, rate limiting, request logging, health checks, and service discovery.',
        category: 'Backend',
        tags: ['Node.js', 'Express', 'Redis', 'Docker', 'Nginx'],
        liveUrl: '#',
        image: '/projects/api-gateway.jpg',
    },
    {
        id: 'food-delivery',
        title: 'Food Delivery App',
        description:
            'End-to-end food ordering platform with real-time driver tracking, restaurant portal, and customer app.',
        category: 'Mobile',
        tags: ['React Native', 'Node.js', 'Maps API', 'Firebase'],
        liveUrl: '#',
        image: '/projects/food-delivery.jpg',
    },
    {
        id: 'crm-system',
        title: 'CRM System',
        description:
            'Customer relationship management tool with pipeline view, email integration, analytics, and team collaboration.',
        category: 'Full Stack',
        tags: ['React', 'NestJS', 'PostgreSQL', 'GraphQL'],
        liveUrl: '#',
        image: '/projects/crm-system.jpg',
    },
];

const FILTER_TABS = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'] as const;
type FilterTab = typeof FILTER_TABS[number];

export default function ProjectsSec() {
    const [activeFilter, setActiveFilter] = useState<FilterTab>('All');

    const filtered = activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="section-pad relative overflow-hidden">
            <div className="orb-accent w-80 h-80 top-0 left-[-5%] opacity-10" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-10">
                    <TitleComponent size="small-semibold" className="text-primary uppercase tracking-[0.18em]">
                        Work
                    </TitleComponent>
                    <h2 className="heading-h2 text-ink dark:text-surface max-w-2xl">
                        Selected{' '}
                        <span className="gradient-text-primary">Work</span>
                    </h2>
                    <p className="text-muted max-w-xl leading-relaxed">A curated selection from 50+ shipped projects — each solving a real problem with clean code and intentional design.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {FILTER_TABS.map(tab => (
                        <button
                            key={tab}
                            id={`filter-${tab.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setActiveFilter(tab)}
                            className={clsx(
                                'px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-250',
                                activeFilter === tab
                                    ? 'bg-gradient-to-r from-primary-start to-primary-end text-white border-transparent shadow-[0_4px_14px_var(--color-primary)/0.35]'
                                    : 'bg-transparent border-black/10 dark:border-white/10 text-muted hover:border-primary/40 hover:text-primary',
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-20 l:gap-28">
                    {filtered.map((project, index) => {
                        const reversed = index % 2 === 1;
                        return (
                            <div
                                key={project.id}
                                className={clsx(
                                    'grid grid-cols-1 lg:grid-cols-2 gap-10 l:gap-16 items-center group duration-300 p-4 rounded-3xl hover:bg-black',
                                )}
                            >
                                <div
                                    className={clsx(
                                        'flex flex-col gap-5 l:order-1',
                                        reversed && 'l:order-2',
                                    )}
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="heading-h1 font-extrabold text-stroke-outlined duration-300 leading-none select-none group-hover:text-white/20">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex flex-col gap-3 pt-2">
                                            <TitleComponent
                                                size="small-semibold"
                                                className="text-muted uppercase tracking-[0.18em]"
                                            >
                                                {project.category}
                                            </TitleComponent>
                                            <h3 className="heading-h3 text-ink dark:text-surface duration-300 group-hover:text-white">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-muted leading-relaxed max-w-md group-hover:text-white/70 duration-300">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs rounded-md bg-primary/8 text-primary font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-2">
                                        <ThemeButton
                                            as="link"
                                            to={project.liveUrl}
                                            variant="primary"
                                        >
                                            Live Preview
                                        </ThemeButton>
                                    </div>
                                </div>

                                {/* Image side */}
                                <div
                                    className={clsx(
                                        'l:order-2',
                                        reversed && 'l:order-1',
                                    )}
                                >
                                    <div className="rounded-3xl bg-secondary-end p-6 l:p-10 aspect-[16/11] flex items-center justify-center overflow-hidden">
                                        {/* TODO: swap for real project mockup/screenshot */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
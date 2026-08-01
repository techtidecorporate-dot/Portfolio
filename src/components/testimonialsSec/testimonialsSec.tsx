import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quotes } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';
import 'swiper/css';
import 'swiper/css/pagination';

// MOCK DATA — replace with real testimonials before going live
const TESTIMONIALS = [
    {
        id: 't1',
        quote:
            'Muhammad delivered a stunning e-commerce platform that exceeded every expectation. His attention to performance and code quality is genuinely impressive. Shipped on time, zero bugs in production.',
        name: 'Sarah K.',
        role: 'Founder, Online Retail Brand',
        rating: 5,
        initials: 'SK',
    },
    {
        id: 't2',
        quote:
            'Nadir completely rebuilt our legacy dashboard in React. The new UI is fast, intuitive, and our team productivity went up noticeably. He communicates clearly and meets every deadline.',
        name: 'James R.',
        role: 'CTO, B2B SaaS Startup',
        rating: 5,
        initials: 'JR',
    },
    {
        id: 't3',
        quote:
            'He built our mobile app from scratch — iOS and Android — in 8 weeks. The quality is on par with apps from much larger teams. Highly recommend if you need full-stack mobile talent.',
        name: 'Aisha M.',
        role: 'Product Manager, HealthTech Company',
        rating: 5,
        initials: 'AM',
    },
    {
        id: 't4',
        quote:
            'Our API was a nightmare before Nadir stepped in. He refactored the entire backend, added proper auth and caching, and reduced our response times by 60%. Exceptional engineer.',
        name: 'David L.',
        role: 'Lead Developer, Agency',
        rating: 5,
        initials: 'DL',
    },
    {
        id: 't5',
        quote:
            'Translated our Figma designs to pixel-perfect React components in record time. Every hover state, every animation — exactly as designed. Will hire again without hesitation.',
        name: 'Priya S.',
        role: 'UI/UX Designer & Entrepreneur',
        rating: 5,
        initials: 'PS',
    },
    {
        id: 't6',
        quote:
            'Muhammad set up our entire cloud infrastructure on AWS — CI/CD, Docker, auto-scaling. Our deployment process went from manual uploads to fully automated in two weeks.',
        name: 'Omar F.',
        role: 'DevOps Manager, Scale-up',
        rating: 5,
        initials: 'OF',
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={14} weight="fill" className="text-accent" />
            ))}
        </div>
    );
}

export default function TestimonialsSec() {
    return (
        <section id="testimonials" className="section-pad bg-parchment dark:bg-ink-deep relative overflow-hidden">
            <div className="orb-primary w-96 h-96 top-[-15%] right-[-5%] opacity-10" />
            <div className="orb-accent   w-64 h-64 bottom-[-5%] left-[10%]  opacity-10" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-12">
                    <TitleComponent size="small-semibold" className="text-primary uppercase tracking-[0.18em]">
                        Testimonials
                    </TitleComponent>
                    <h2 className="heading-h2 text-ink dark:text-surface max-w-2xl">
                        What Clients{' '}
                        <span className="gradient-text-primary">Say</span>
                    </h2>
                    <p className="text-muted max-w-md leading-relaxed">
                        Real feedback from real clients. These are placeholder testimonials
                        — replace with genuine reviews before launch.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true, el: '.testimonials-pagination' }}
                    loop
                    breakpoints={{
                        640:  { slidesPerView: 1.3 },
                        768:  { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!pb-14"
                >
                    {TESTIMONIALS.map((t) => (
                        <SwiperSlide key={t.id} className="h-auto">
                            <div className="card-base glass-card-light dark:bg-card-bg dark:border dark:border-white/8 h-full flex flex-col gap-5 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                                {/* Quote icon */}
                                <Quotes size={36} weight="fill" className="text-primary/30" />

                                {/* Stars */}
                                <StarRating count={t.rating} />

                                {/* Quote text */}
                                <p className="text-sm text-muted leading-relaxed flex-1 italic">
                                    "{t.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-black/6 dark:border-white/6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-ink dark:text-surface">{t.name}</p>
                                        <p className="text-xs text-muted">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination */}
                <div className="testimonials-pagination flex justify-center gap-2 mt-2" />
            </div>
        </section>
    );
}

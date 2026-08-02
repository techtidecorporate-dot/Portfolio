import React from 'react';
import clsx from 'clsx';
import TitleComponent from '../titleComponent/titleComponent';
import { SERVICES } from '../../Data';
import {
    GlobeIcon,
    DeviceMobileIcon,
    CloudArrowUpIcon,
    WrenchIcon,
    PaintBrushIcon,
    DatabaseIcon,
} from '@phosphor-icons/react';

const serviceIcons: Record<string, React.ReactNode> = {
    'web-dev': <GlobeIcon size={32} weight="duotone" />,
    'mobile-dev': <DeviceMobileIcon size={32} weight="duotone" />,
    'backend': <DatabaseIcon size={32} weight="duotone" />,
    'devops': <CloudArrowUpIcon size={32} weight="duotone" />,
    'ui-code': <PaintBrushIcon size={32} weight="duotone" />,
    'full-stack': <WrenchIcon size={32} weight="duotone" />,
};

export default function ServicesSec() {
    return (
        <section id="services" className="section-pad bg-parchment relative overflow-hidden">
            <div className="orb-primary w-96 h-96 top-0 right-[-10%] opacity-15" />
            <div className="orb-accent w-64 h-64 bottom-0 left-[-5%] opacity-15" />

            <div className="container relative z-10">
                <div className="flex flex-col items-center text-center gap-4 mb-14">
                    <span className='inline-flex items-center justify-center w-fit px-2.5 py-1.5 rounded-full glass-card-inset-2'>
                        <TitleComponent
                            size="extra-small-semibold"
                            className="text-ink uppercase"
                        >
                            Services
                        </TitleComponent>
                    </span>
                    <h2 className="heading-h2 text-ink max-w-2xl">
                        Professional{' '}
                        <span className="gradient-text-primary">Services</span>
                    </h2>
                    <p className="text-muted max-w-xl leading-relaxed">From concept to deployment — I cover every layer of the stack so your product ships complete, polished, and production-ready.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((svc, i) => (
                        <div
                            key={svc.id}
                            id={`service-${svc.id}`}
                            className={clsx(
                                'card-base group relative overflow-hidden',
                                'glass-card-light',
                                'hover:shadow-card-hover hover:-translate-y-2 hover:border-primary/30',
                                'cursor-default',
                                'animate-fade-in-up',
                            )}
                            style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary-start to-primary-end scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center text-white mb-5 shadow-[0_4px_14px_var(--color-primary)/0.25] group-hover:scale-110 transition-transform duration-300">{serviceIcons[svc.id]}</div>

                            <h3 className="heading-h6 text-ink mb-3 group-hover:text-primary transition-colors duration-300">{svc.title}</h3>
                            <p className="text-sm text-muted leading-relaxed mb-5">{svc.description}</p>

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

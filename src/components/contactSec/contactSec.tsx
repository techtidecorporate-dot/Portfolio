import React from 'react';
import { useForm } from 'react-hook-form';
import {
    GithubLogo,
    LinkedinLogo,
    TwitterLogo,
    EnvelopeSimple,
    MapPin,
    PaperPlaneTilt,
    WarningCircle,
} from '@phosphor-icons/react';
import clsx from 'clsx';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const SOCIAL_LINKS = [
    { id: 'github',   icon: <GithubLogo size={20} weight="fill" />,   label: 'GitHub',   href: '#' },
    { id: 'linkedin', icon: <LinkedinLogo size={20} weight="fill" />, label: 'LinkedIn', href: '#' },
    { id: 'twitter',  icon: <TwitterLogo size={20} weight="fill" />,  label: 'Twitter',  href: '#' },
    { id: 'email',    icon: <EnvelopeSimple size={20} weight="fill" />,label: 'Email',    href: 'mailto:nadir@example.com' },
];

const CONTACT_INFO = [
    { icon: <EnvelopeSimple size={18} weight="duotone" />, label: 'Email', value: 'nadir@example.com' },
    { icon: <MapPin size={18} weight="duotone" />,         label: 'Location', value: 'Pakistan — Remote Worldwide' },
];

export default function ContactSec() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>();

    // TODO: wire to backend/email service in Phase 2
    const onSubmit = async (_data: ContactFormData) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // simulate network
        reset();
    };

    const inputBase = clsx(
        'w-full px-4 py-3 rounded-xl text-sm text-ink dark:text-surface',
        'bg-white dark:bg-card-bg border transition-all duration-200',
        'placeholder:text-muted/60',
        'focus:ring-2 focus:ring-primary/30 focus:border-primary',
    );

    return (
        <section id="contact" className="section-pad bg-surface dark:bg-ink relative overflow-hidden">
            <div className="orb-primary w-96 h-96 bottom-[-10%] right-[-5%] opacity-10" />
            <div className="orb-accent   w-64 h-64 top-0 left-[5%]   opacity-10" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-14">
                    <TitleComponent size="small-semibold" className="text-primary uppercase tracking-[0.18em]">
                        Contact
                    </TitleComponent>
                    <h2 className="heading-h2 text-ink dark:text-surface max-w-2xl">
                        Let's Build Something{' '}
                        <span className="gradient-text-primary">Together</span>
                    </h2>
                    <p className="text-muted max-w-xl leading-relaxed">
                        Have a project in mind? I'd love to hear about it. Fill out the
                        form or reach out directly — I respond within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

                    {/* ── Left: Info + Socials ── */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Contact Info */}
                        <div className="glass-card-light dark:bg-card-bg dark:border dark:border-white/8 rounded-2xl p-6 flex flex-col gap-5">
                            <p className="text-sm font-bold text-ink dark:text-surface uppercase tracking-[0.15em]">
                                Get in Touch
                            </p>
                            {CONTACT_INFO.map(({ icon, label, value }) => (
                                <div key={label} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        {icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted font-medium mb-0.5">{label}</p>
                                        <p className="text-sm font-medium text-ink dark:text-surface">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="glass-card-light dark:bg-card-bg dark:border dark:border-white/8 rounded-2xl p-6 flex flex-col gap-4">
                            <p className="text-sm font-bold text-ink dark:text-surface uppercase tracking-[0.15em]">
                                Find Me Online
                            </p>
                            <div className="flex gap-3">
                                {SOCIAL_LINKS.map(({ id, icon, label, href }) => (
                                    <a
                                        key={id}
                                        id={`social-${id}`}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className={clsx(
                                            'w-10 h-10 rounded-xl flex items-center justify-center',
                                            'bg-primary/8 text-primary border border-primary/15',
                                            'hover:bg-primary hover:text-white hover:border-primary',
                                            'transition-all duration-200 hover:scale-110',
                                        )}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="rounded-2xl p-4 border border-green-400/20 bg-green-400/5 flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                            <p className="text-sm text-ink dark:text-surface">
                                <span className="font-semibold">Available now</span>
                                <span className="text-muted"> — new projects, freelance &amp; contracts</span>
                            </p>
                        </div>
                    </div>

                    {/* ── Right: Form ── */}
                    <div className="lg:col-span-3">
                        <div className="glass-card-light dark:bg-card-bg dark:border dark:border-white/8 rounded-3xl p-8">
                            {isSubmitSuccessful ? (
                                <div className="flex flex-col items-center gap-4 py-8 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        <PaperPlaneTilt size={32} className="text-primary" weight="duotone" />
                                    </div>
                                    <h3 className="heading-h5 text-ink dark:text-surface">Message Sent!</h3>
                                    <p className="text-muted text-sm max-w-xs">
                                        Thanks for reaching out. I'll get back to you within 24 hours.
                                    </p>
                                    <ThemeButton variant="secondary" onClick={() => reset()}>
                                        Send Another
                                    </ThemeButton>
                                </div>
                            ) : (
                                <form
                                    id="contact-form"
                                    onSubmit={handleSubmit(onSubmit)}
                                    noValidate
                                    className="flex flex-col gap-5"
                                >
                                    {/* Name + Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Name */}
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="contact-name" className="text-xs font-semibold text-ink dark:text-surface uppercase tracking-widest">
                                                Name
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                placeholder="Muhammad Nadir"
                                                className={clsx(
                                                    inputBase,
                                                    errors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-black/10 dark:border-white/10',
                                                )}
                                                {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })}
                                            />
                                            {errors.name && (
                                                <p className="flex items-center gap-1 text-xs text-red-400">
                                                    <WarningCircle size={12} /> {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="contact-email" className="text-xs font-semibold text-ink dark:text-surface uppercase tracking-widest">
                                                Email
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className={clsx(
                                                    inputBase,
                                                    errors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-black/10 dark:border-white/10',
                                                )}
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                                                })}
                                            />
                                            {errors.email && (
                                                <p className="flex items-center gap-1 text-xs text-red-400">
                                                    <WarningCircle size={12} /> {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="contact-subject" className="text-xs font-semibold text-ink dark:text-surface uppercase tracking-widest">
                                            Subject
                                        </label>
                                        <input
                                            id="contact-subject"
                                            type="text"
                                            placeholder="Project inquiry / Collaboration / Question"
                                            className={clsx(
                                                inputBase,
                                                errors.subject ? 'border-red-400 focus:ring-red-400/20' : 'border-black/10 dark:border-white/10',
                                            )}
                                            {...register('subject', { required: 'Subject is required', minLength: { value: 4, message: 'At least 4 characters' } })}
                                        />
                                        {errors.subject && (
                                            <p className="flex items-center gap-1 text-xs text-red-400">
                                                <WarningCircle size={12} /> {errors.subject.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="contact-message" className="text-xs font-semibold text-ink dark:text-surface uppercase tracking-widest">
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            rows={5}
                                            placeholder="Tell me about your project — scope, timeline, tech stack, budget..."
                                            className={clsx(
                                                inputBase,
                                                'resize-none',
                                                errors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-black/10 dark:border-white/10',
                                            )}
                                            {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters' } })}
                                        />
                                        {errors.message && (
                                            <p className="flex items-center gap-1 text-xs text-red-400">
                                                <WarningCircle size={12} /> {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit */}
                                    <ThemeButton
                                        variant="primary"
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full justify-center mt-1"
                                    >
                                        <span className="flex items-center gap-2">
                                            <PaperPlaneTilt size={18} />
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </span>
                                    </ThemeButton>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

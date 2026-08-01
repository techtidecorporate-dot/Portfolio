import React from 'react';
import { useForm } from 'react-hook-form';
import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    TwitterLogoIcon,
    ArrowUpRightIcon,
    PaperPlaneTiltIcon,
    WarningCircleIcon,
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
    { id: 'github', label: 'GitHub', icon: <GithubLogoIcon size={16} weight="fill" />, href: '#' },
    { id: 'linkedin', label: 'LinkedIn', icon: <LinkedinLogoIcon size={16} weight="fill" />, href: '#' },
    { id: 'twitter', label: 'Twitter', icon: <TwitterLogoIcon size={16} weight="fill" />, href: '#' },
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

    const fieldBase = clsx(
        'w-full bg-transparent border-0 border-b py-3 text-lg text-ink dark:text-surface',
        'placeholder:text-muted/50 focus:outline-none transition-colors duration-300',
    );

    return (
        <section id="contact" className="section-pad bg-surface dark:bg-ink relative overflow-hidden">
            <div className="orb-primary w-96 h-96 bottom-[-15%] right-[-10%] opacity-10" />

            <div className="container relative z-10">
                {/* ── Big editorial header ── */}
                <div className="flex flex-col gap-6 mb-16 l:mb-24 max-w-4xl">
                    <TitleComponent size="small-semibold" className="text-primary uppercase tracking-[0.18em]">
                        (04) — Contact
                    </TitleComponent>
                    <h2 className="heading-h1 text-ink dark:text-surface leading-[1.05]">
                        Got a project?
                        <br />
                        Let's talk about{' '}
                        <span className="gradient-text-primary">it.</span>
                    </h2>

                    {/* Email as the hero CTA — classic Awwwards move */}
                    <a
                        id="contact-mailto"
                        href="mailto:nadir@example.com"
                        className="group inline-flex items-center gap-3 w-fit mt-2"
                    >
                        <span className="heading-h3 text-ink dark:text-surface border-b-2 border-transparent group-hover:border-primary transition-all duration-300">
                            nadir@example.com
                        </span>
                        <span className="w-10 h-10 l:w-12 l:h-12 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-ink dark:text-surface group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:rotate-45 transition-all duration-300 flex-shrink-0">
                            <ArrowUpRightIcon size={20} />
                        </span>
                    </a>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 l:gap-8 items-start border-t border-black/8 dark:border-white/8 pt-14">

                    {/* ── Left: meta info, sticky on desktop ── */}
                    <div className="flex flex-col gap-12 lg:sticky lg:top-28">
                        <div className="flex flex-col gap-3">
                            <p className="text-xs font-bold text-muted uppercase tracking-[0.15em]">
                                Based in
                            </p>
                            <p className="text-lg text-ink dark:text-surface font-medium">
                                Pakistan — Remote Worldwide
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-1">
                                {SOCIAL_LINKS.map(({ id, label, icon, href }) => (
                                    <a
                                        key={id}
                                        id={`social-${id}`}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between py-3 border-b border-black/8 dark:border-white/8 text-ink dark:text-surface hover:text-primary transition-colors duration-250"
                                    >
                                        <span className="flex items-center gap-3 font-medium">
                                            {icon}
                                            {label}
                                        </span>
                                        <ArrowUpRightIcon
                                            size={20}
                                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Right: minimal underline form ── */}
                    <div className="">
                        {isSubmitSuccessful ? (
                            <div className="flex flex-col items-start gap-4 py-8">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                    <PaperPlaneTiltIcon size={26} className="text-primary" weight="duotone" />
                                </div>
                                <h3 className="heading-h4 text-ink dark:text-surface">Message sent.</h3>
                                <p className="text-muted max-w-sm">
                                    Thanks for reaching out — I'll get back to you within 24 hours.
                                </p>
                                <ThemeButton variant="underline" onClick={() => reset()}>Send another message</ThemeButton>
                            </div>
                        ) : (
                            <form
                                id="contact-form"
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                                className="flex flex-col gap-10"
                            >
                                {/* Name */}
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-baseline justify-between">
                                        <label htmlFor="contact-name" className="text-xs font-bold text-muted uppercase tracking-[0.15em]">
                                            01 — Your Name
                                        </label>
                                        {errors.name && (
                                            <span className="flex items-center gap-1 text-xs text-red-400">
                                                <WarningCircleIcon size={12} /> {errors.name.message}
                                            </span>
                                        )}
                                    </div>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder="John Doe"
                                        className={clsx(
                                            fieldBase,
                                            errors.name
                                                ? 'border-red-400'
                                                : 'border-black/15 dark:border-white/15 focus:border-primary',
                                        )}
                                        {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-baseline justify-between">
                                        <label htmlFor="contact-email" className="text-xs font-bold text-muted uppercase tracking-[0.15em]">
                                            02 — Your Email
                                        </label>
                                        {errors.email && (
                                            <span className="flex items-center gap-1 text-xs text-red-400">
                                                <WarningCircleIcon size={12} /> {errors.email.message}
                                            </span>
                                        )}
                                    </div>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className={clsx(
                                            fieldBase,
                                            errors.email
                                                ? 'border-red-400'
                                                : 'border-black/15 dark:border-white/15 focus:border-primary',
                                        )}
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                                        })}
                                    />
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-baseline justify-between">
                                        <label htmlFor="contact-subject" className="text-xs font-bold text-muted uppercase tracking-[0.15em]">
                                            03 — Subject
                                        </label>
                                        {errors.subject && (
                                            <span className="flex items-center gap-1 text-xs text-red-400">
                                                <WarningCircleIcon size={12} /> {errors.subject.message}
                                            </span>
                                        )}
                                    </div>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        placeholder="Project inquiry / Collaboration"
                                        className={clsx(
                                            fieldBase,
                                            errors.subject
                                                ? 'border-red-400'
                                                : 'border-black/15 dark:border-white/15 focus:border-primary',
                                        )}
                                        {...register('subject', { required: 'Subject is required', minLength: { value: 4, message: 'Too short' } })}
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-baseline justify-between">
                                        <label htmlFor="contact-message" className="text-xs font-bold text-muted uppercase tracking-[0.15em]">
                                            04 — Message
                                        </label>
                                        {errors.message && (
                                            <span className="flex items-center gap-1 text-xs text-red-400">
                                                <WarningCircleIcon size={12} /> {errors.message.message}
                                            </span>
                                        )}
                                    </div>
                                    <textarea
                                        id="contact-message"
                                        rows={3}
                                        placeholder="Tell me about your project — scope, timeline, budget..."
                                        className={clsx(fieldBase, 'resize-none',
                                            errors.message
                                                ? 'border-red-400'
                                                : 'border-black/15 dark:border-white/15 focus:border-primary',
                                        )}
                                        {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters' } })}
                                    />
                                </div>

                                {/* Submit */}
                                <ThemeButton
                                    variant="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-fit mt-2"
                                >
                                    <span className="flex items-center gap-2">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <PaperPlaneTiltIcon size={18} />
                                    </span>
                                </ThemeButton>
                            </form>
                        )}
                    </div>
                </div>
            </div >
        </section >
    );
}
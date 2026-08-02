import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
    PaperPlaneTiltIcon,
    WarningCircleIcon,
    EnvelopeSimpleIcon,
    PhoneIcon,
    MapPinIcon,
} from '@phosphor-icons/react';
import clsx from 'clsx';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';
import { CONTACT_INFO } from '../../Data';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactSec() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>();

    const onSubmit = async (_data: ContactFormData) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        reset();
    };

    const fieldBase = clsx(
        'w-full bg-transparent border-0 border-b py-3 text-lg text-ink',
        'placeholder:text-muted/50 focus:outline-none transition-colors duration-300',
    );

    const contactInfo = [
        { icon: EnvelopeSimpleIcon, ...CONTACT_INFO[0] },
        { icon: PhoneIcon, ...CONTACT_INFO[1] },
        { icon: MapPinIcon, ...CONTACT_INFO[2] },
    ];

    return (
        <section id="contact" className="section-pad bg-surface relative overflow-hidden">
            <div className="container">
                <div className='relative flex xl:flex-row flex-col gap-12 xl:gap-20 z-10'>
                    <div className="w-1/2 flex flex-col gap-6">
                        <span className='inline-flex items-center justify-center w-fit px-2.5 py-1.5 rounded-full glass-card-inset-2'>
                            <TitleComponent
                                size="extra-small-semibold"
                                className="text-ink uppercase"
                            >
                                Contact Us
                            </TitleComponent>
                        </span>
                        <h2 className="heading-h1 text-ink leading-[1.05]">
                            Get In
                            <span className="ml-2.5 gradient-text-primary">Touch.</span>
                        </h2>

                        <ul className="flex flex-col gap-6">
                            {contactInfo.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} className="group flex items-center gap-5">
                                        <div className="flex justify-center items-center lg:size-12 size-10 bg-primary/5 rounded-md duration-300 group-hover:bg-primary">
                                            <item.icon className="lg:size-6 size-5 text-primary duration-300 group-hover:text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <TitleComponent size="small-semibold" className="text-black/65 mb-1 md:text-base">{item.label}</TitleComponent>
                                            <TitleComponent size="large-medium" className="text-black duration-300 group-hover:text-primary">{item.title}</TitleComponent>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        {isSubmitSuccessful ? (
                            <div className="flex flex-col items-start gap-4 py-8">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                    <PaperPlaneTiltIcon size={26} className="text-primary" weight="duotone" />
                                </div>
                                <h3 className="heading-h4 text-ink">Message sent.</h3>
                                <p className="text-muted">
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
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-baseline justify-between">
                                        <label htmlFor="contact-name" className="text-sm font-bold text-muted">
                                            Your Name
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
                                                : 'border-black/15 focus:border-primary',
                                        )}
                                        {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-baseline justify-between">
                                        <label htmlFor="contact-email" className="text-sm font-bold text-muted">
                                            Your Email
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
                                                : 'border-black/15 focus:border-primary',
                                        )}
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                                        })}
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-baseline justify-between">
                                        <label htmlFor="contact-subject" className="text-sm font-bold text-muted">
                                            Subject
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
                                                : 'border-black/15 focus:border-primary',
                                        )}
                                        {...register('subject', { required: 'Subject is required', minLength: { value: 4, message: 'Too short' } })}
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-baseline justify-between">
                                        <label htmlFor="contact-message" className="text-sm font-bold text-muted">
                                            Message
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
                                                : 'border-black/15 focus:border-primary',
                                        )}
                                        {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters' } })}
                                    />
                                </div>

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

            </div>
        </section>
    );
}
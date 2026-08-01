import {
    EnvelopeSimpleIcon,
    GithubLogoIcon,
    LinkedinLogoIcon,
    PhoneCallIcon,
} from '@phosphor-icons/react';

const SOCIAL_LINKS = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: <LinkedinLogoIcon size={20} weight="fill" />,
        href: 'https://www.linkedin.com',
    },
    {
        id: 'github',
        label: 'GitHub',
        icon: <GithubLogoIcon size={20} weight="fill" />,
        href: 'https://github.com',
    },
    {
        id: 'phone',
        label: 'Phone',
        icon: <PhoneCallIcon size={20} weight="fill" />,
        href: 'tel:+1234567890',
    },
    {
        id: 'email',
        label: 'Email',
        icon: <EnvelopeSimpleIcon size={20} weight="fill" />,
        href: 'mailto:nadir@example.com',
    },
];

export default function SocialSidebar() {
    return (
        <nav aria-label="Social links" className="fixed left-4 top-1/2 z-50 hidden flex-col items-center gap-3 -translate-y-1/2 md:flex">
            {SOCIAL_LINKS.map(({ id, label, icon, href }) => (
                <a
                    key={id}
                    href={href}
                    target={id !== 'phone' && id !== 'email' ? '_blank' : undefined}
                    rel={id !== 'phone' && id !== 'email' ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-12 h-12 rounded-full bg-surface/95 shadow-[0_16px_40px_rgba(0,0,0,0.09)] border border-slate-200/70 dark:bg-slate-950/95 dark:border-white/10 flex items-center justify-center text-ink dark:text-surface transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                    {icon}
                </a>
            ))}
        </nav>
    );
}

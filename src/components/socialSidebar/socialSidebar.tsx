import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, PhoneCallIcon } from '@phosphor-icons/react';
import { SOCIAL_LINKS } from '../../Data';

const sidebarLinks = [
    { id: 'linkedin', label: 'LinkedIn', icon: <LinkedinLogoIcon size={22} weight="regular" />, href: SOCIAL_LINKS[0].href },
    { id: 'github', label: 'GitHub', icon: <GithubLogoIcon size={22} weight="regular" />, href: SOCIAL_LINKS[1].href },
    { id: 'phone', label: 'Phone', icon: <PhoneCallIcon size={22} weight="regular" />, href: SOCIAL_LINKS[2].href },
    { id: 'email', label: 'Email', icon: <EnvelopeSimpleIcon size={22} weight="regular" />, href: SOCIAL_LINKS[3].href },
];

export default function SocialSidebar() {
    return (
        <nav aria-label="Social links" className="fixed left-4 top-1/2 z-50 hidden flex-col items-center gap-3 -translate-y-1/2 md:flex">
            {sidebarLinks.map(({ id, label, icon, href }) => (
                <a
                    key={id}
                    href={href}
                    target={id !== 'phone' && id !== 'email' ? '_blank' : undefined}
                    rel={id !== 'phone' && id !== 'email' ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-12 h-12 rounded-full bg-surface/95 shadow-inset border border-slate-200/70 flex items-center justify-center text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                    {icon}
                </a>
            ))}
        </nav>
    );
}

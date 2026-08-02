import TitleComponent from '../titleComponent/titleComponent';
import { SKILL_CATEGORIES, type SkillItem } from '../../Data';

const buildSimpleIconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

function SkillBadge({ name, slug, iconSrc }: SkillItem) {
    const resolvedIconSrc = iconSrc ?? buildSimpleIconUrl(slug);

    return (
        <div className="group flex flex-col items-center gap-3 rounded-2xl border border-white/40 bg-white/55 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-white/80 hover:shadow-[0_20px_45px_rgba(124,82,149,0.16)]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 via-white/80 to-primary/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30 group-hover:shadow-[0_12px_30px_rgba(124,82,149,0.18)] lg:h-24 lg:w-24">
                <img
                    src={resolvedIconSrc}
                    alt={name}
                    loading="lazy"
                    className="h-9 w-9 object-contain lg:h-10 lg:w-10"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = buildSimpleIconUrl('codeium');
                    }}
                />
            </div>
            <span className="text-center text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-primary">
                {name}
            </span>
        </div>
    );
}

export default function SkillsSec() {
    return (
        <section id="skills" className="section-pad relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(124,82,149,0.08),_transparent_35%)]">
            <div className="container relative z-10">
                <div className="mb-16 flex flex-col items-center text-center gap-4">
                    <TitleComponent size="small-semibold" className="text-primary uppercase tracking-[0.18em]">
                        Skills
                    </TitleComponent>
                    <h2 className="heading-h2 max-w-2xl text-ink">
                        Tools I{' '}
                        <span className="gradient-text-primary">Work With</span>
                    </h2>
                    <p className="max-w-2xl leading-relaxed text-muted">
                        A full-stack toolbox spanning languages, frameworks, databases,
                        and infrastructure — built up over 4+ years and 50+ shipped projects.
                    </p>
                </div>

                <div className="flex flex-col gap-14">
                    {SKILL_CATEGORIES.map(({ title, skills }) => (
                        <div key={title} className="rounded-[2rem] bg-white/60 p-6 glass-card-inset-2 backdrop-blur-sm md:p-8">
                            <div className="mb-8 flex items-center gap-4">
                                <p className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.15em] text-ink">
                                    {title}
                                </p>
                                <div className="h-px flex-1 bg-black/8" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
                                {skills.map((skill) => (
                                    <SkillBadge key={skill.name} {...skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
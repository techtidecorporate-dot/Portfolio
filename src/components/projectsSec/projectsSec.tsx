import clsx from 'clsx';
import TitleComponent from '../titleComponent/titleComponent';
import { PROJECTS } from '../../Data';

export default function ProjectsSec() {
    return (
        <section id="projects" className="section-pad relative overflow-hidden">
            <div className="orb-accent w-80 h-80 top-0 left-[-5%] opacity-10" />

            <div className="container relative z-10">
                <div className="flex flex-col items-center text-center gap-4 mb-10">
                    <span className='inline-flex items-center justify-center w-fit px-2.5 py-1.5 rounded-full glass-card-inset-2'>
                        <TitleComponent
                            size="extra-small-semibold"
                            className="text-ink uppercase"
                        >
                            Projects
                        </TitleComponent>
                    </span>
                    <h2 className="heading-h2 text-ink max-w-2xl">
                        Selected{' '}
                        <span className="gradient-text-primary">Work</span>
                    </h2>
                    <p className="text-muted max-w-xl leading-relaxed">A curated selection from 50+ shipped projects — each solving a real problem with clean code and intentional design.</p>
                </div>

                <div className="flex flex-col gap-20 lg:gap-28">
                    {PROJECTS.map((project, index) => {
                        const reversed = index % 2 === 1;
                        return (
                            <div
                                key={project.title}
                                className={clsx(
                                    'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center group duration-300 p-4 rounded-3xl border border-black/20 hover:bg-black/90',
                                )}
                            >
                                <div
                                    className={clsx(
                                        'flex flex-col gap-5 lg:order-1',
                                        reversed && 'lg:order-2',
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
                                            <h3 className="heading-h3 text-ink duration-300 group-hover:text-white">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-muted leading-relaxed max-w-md group-hover:text-white/70 duration-300">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs rounded-md bg-primary/8 text-primary font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>


                                </div>

                                <div
                                    className={clsx(
                                        'lg:order-2',
                                        reversed && 'lg:order-1',
                                    )}
                                >
                                    <div className="rounded-xl aspect-[16/11] flex items-center justify-center overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title + project.description}
                                            className="w-full h-full object-cover"
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
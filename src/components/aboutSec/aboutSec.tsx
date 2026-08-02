import ThemeButton from '../themeButton/themeButton';
import TitleComponent from '../titleComponent/titleComponent';

import heroImg from "../../assets/muhammad-nadir.webp";

export default function AboutSec() {
    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about" className="section-pad bg-surface relative overflow-hidden">
            <div className="orb-primary w-80 h-80 bottom-[-10%] right-[-5%] opacity-10" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <div className="flex flex-col gap-4">
                            <span className='inline-flex items-center justify-center w-fit px-2.5 py-1.5 rounded-full glass-card-inset-2'>
                                <TitleComponent
                                    size="extra-small-semibold"
                                    className="text-ink uppercase"
                                >
                                    About Me
                                </TitleComponent>
                            </span>
                            <h2 className="heading-h2 text-ink">
                                Approach &amp;{' '}
                                <span className="gradient-text-primary">Philosophy</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4 text-muted leading-relaxed">
                            <p>I'm Muhammad Nadir, a Full Stack Developer with over 4 years of hands-on experience crafting robust, scalable web and mobile applications. I thrive at the intersection of clean code and great user experience.</p>
                            <p>My stack spans the entire product lifecycle from designing pixel-perfect React interfaces to architecting Node.js APIs, building cross-platform mobile apps with React Native, and deploying cloud-native infrastructure on AWS. I've shipped projects ranging from solo MVPs to full team collaborations.</p>
                            <p>Whether you need a landing page that converts, a backend that scales, or a mobile app your users love I bring all the pieces together, so you don't have to hire a whole team.</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <ThemeButton variant="primary" onClick={scrollToContact}>Work With Me</ThemeButton>
                            <ThemeButton variant="secondary" onClick={() => { }}>Download CV</ThemeButton>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-[4/5]">
                            <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden glass-card-light">
                                <img
                                    src={heroImg}
                                    alt="Muhammad Nadir"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
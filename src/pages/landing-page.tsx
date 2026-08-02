import Header from '../components/header/header';
import HeroSec from '../components/heroSec/heroSec';
import StatsSec from '../components/statsSec/statsSec';
import AboutSec from '../components/aboutSec/aboutSec';
import ServicesSec from '../components/servicesSec/servicesSec';
import ProjectsSec from '../components/projectsSec/projectsSec';
import TestimonialsSec from '../components/testimonialsSec/testimonialsSec';
import ContactSec from '../components/contactSec/contactSec';
import Footer from '../components/footer/footer';
import SocialSidebar from '../components/socialSidebar/socialSidebar';
import SkillsSec from '@/components/skillsSec/skillsSec';

interface FooterProps {
    scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export default function LandingPage({ scrollToSection }: FooterProps) {
    return (
        <>
            <Header scrollToSection={scrollToSection} />
            <SocialSidebar />
            <main>
                <HeroSec />
                <StatsSec />
                <AboutSec />
                <SkillsSec />
                <ServicesSec />
                <ProjectsSec />
                <TestimonialsSec />
                <ContactSec />
            </main>
            <Footer scrollToSection={scrollToSection} />
        </>
    );
}

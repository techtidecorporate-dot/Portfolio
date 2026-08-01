import Header          from '../components/header/header';
import HeroSec         from '../components/heroSec/heroSec';
import StatsSec        from '../components/statsSec/statsSec';
import AboutSec        from '../components/aboutSec/aboutSec';
import ServicesSec     from '../components/servicesSec/servicesSec';
import ProjectsSec     from '../components/projectsSec/projectsSec';
import TestimonialsSec from '../components/testimonialsSec/testimonialsSec';
import ContactSec      from '../components/contactSec/contactSec';
import Footer          from '../components/footer/footer';

export default function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <HeroSec />
                <StatsSec />
                <AboutSec />
                <ServicesSec />
                <ProjectsSec />
                <TestimonialsSec />
                <ContactSec />
            </main>
            <Footer />
        </>
    );
}

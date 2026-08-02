import { Link } from 'react-router-dom';
import TitleComponent from '../titleComponent/titleComponent';
import logo from '../../assets/logo-outline.svg';
import { NAV_LINKS } from '../../Data';

interface FooterProps {
    scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black pt-10 pb-10 lg:pb-16 overflow-hidden">
            <div className="container">
                <div>
                    <ul className='md:flex items-center justify-between grid grid-cols-2 gap-6 md:gap-12 lg:gap-16 mb-12 lg:mb-20'>
                        {NAV_LINKS.map((item) => (
                            <li key={item.label} className='max-md:even:justify-self-end'>
                                <Link
                                    to={item.href}
                                    className="text-white text-xl xl:text-2xl font-bold uppercase hover:text-primary duration-300 tracking-tighter"
                                    onClick={(e) => {
                                        if (item.href.startsWith('#')) {
                                            scrollToSection(e, item.href.replace('#', ''));
                                        }
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mb-10 md:mb-12 lg:mb-16">
                        <img
                            src={logo}
                            alt="Muhammad Nadir"
                            className="w-full max-w-[1400px] h-auto object-contain select-none pointer-events-none"
                        />
                    </div>

                    <div className="border-t border-white/10 pt-8 flex justify-center xl:gap-10 gap-4">
                        <TitleComponent size="small" className="text-white/65 text-center md:text-base">
                            © {currentYear} <Link to="/" className="text-white uppercase font-bold duration-300 hover:text-primary">M NADIR.</Link> All Rights Reserved.
                        </TitleComponent>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
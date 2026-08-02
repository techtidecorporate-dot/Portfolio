import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import SmoothScroll from './components/smoothScroll/smoothScroll';
import Loader from './components/loader/loader';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <>
      {
        loading ?
          <Loader /> :
          <>
            <SmoothScroll />
            <Routes>
              <Route path="/" element={<LandingPage scrollToSection={scrollToSection} />} />
            </Routes>
          </>
      }
    </>
  )
}

export default App

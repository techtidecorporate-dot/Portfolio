import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import ThemeSwitch from './components/themeSwitch/themeSwitch'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <ThemeSwitch />
    </>
  )
}

export default App

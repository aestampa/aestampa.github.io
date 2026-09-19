import './App.css'
import { useEffect, useState } from 'react'
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import About from './About.tsx';
import Arcade from './Arcade.tsx';
import Cesium from './lib/CesiumGame.tsx';
import initials from './assets/initials.svg';
import githubLogo from './assets/github.svg';
import linkedInLogo from './assets/linkedin.svg';

function App() {
  const [isFirstLoad] = useState(true);
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
      useEffect(() => {
          const handleResize = () => {
              setIsMobile(window.innerWidth < 768);
          };
  
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <>
      <img className={`initials-element ${isFirstLoad ? 'fade-in-delay-3' : ''}`} src={initials} onClick={() => navigate('/')} alt="Initials logo" />

      <nav className="top-navbar">
        <h4 className={`navbar-element ${isFirstLoad ? 'fade-in-delay-3' : ''}`} onClick={() => navigate('/')}>HOME</h4>
        <h4 className={`navbar-element ${isFirstLoad ? 'fade-in-delay-3' : ''}`} onClick={() => navigate('/about')}>ABOUT</h4>
        <h4 className={`navbar-element ${isFirstLoad ? 'fade-in-delay-3' : ''}`} onClick={() => navigate('/arcade')}>ARCADE</h4>
        <div className={`media-container ${isFirstLoad ? 'fade-in-delay-3' : ''}`}>
          <img src={githubLogo} alt="GitHub logo" className="media-element" />
          <img src={linkedInLogo} alt="LinkedIn logo" className="media-element" />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/arcade" element={<Arcade />} />
        <Route path="/arcade/cesium" element={!isMobile ? <Cesium /> : <Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

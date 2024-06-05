import { useState } from 'react';
import hero from './assets/desktop.svg';
import logo from './assets/logo.svg';
import menu from './assets/menu.svg';
import partners from './assets/partners.svg';
import CompanyModal from './components/CompanyModal';
import FeaturesModal from './components/FeaturesModal';
import { links } from './data';

function App() {
  const [navLinks, setNavLinks] = useState(links);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);
  const [companySublinks, setCompanySublinks] = useState(links.filter(item => item.link === 'Company'));
  const [featuresSublinks, setFeaturesSublinks] = useState(links.filter(item => item.link === 'Features'));

  const handleClick = item => {
    if(item.link === 'Features') {
      setIsFeaturesModalOpen(!isFeaturesModalOpen);
    }
    if(item.link === 'Company') {
      setIsCompanyModalOpen(!isCompanyModalOpen);
    }
  }
  return (
    <div className='lg:relative'>
      {/* Header */}
      {isCompanyModalOpen && <CompanyModal companySublinks={companySublinks}/> }
      {isFeaturesModalOpen && <FeaturesModal featuresSublinks={featuresSublinks}/> }
      <header>
        <nav className='navigation'>
          <div className='navigation-wrapper'>
            <div className='logo-wrapper'>
              <img src={logo} alt="logo" />
            </div>
            <button className='menu-btn'>
              <img src={menu} alt="menu" />
            </button>
            <ul className='links-wrapper'>
              {navLinks.map(item => (
                <li key={item.id} className='link' >
                  <button href={item.link} onClick = {() => handleClick(item)}>
                    <span>{item.link}</span>
                    {item.img && <img src={item.img} alt={item.link} className='inline-block ml-1' />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='login-wrapper'>
            <button>Login</button>
            <button className='register-btn'>Register</button>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className='main'>
        <div className='hero-wrapper'>
          <img src={hero} alt="hero" className='hero-img' />
        </div>
        <div className='main-content'>
          <h1 className='title'>
            Make remote work
          </h1>
          <p className='text'>
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <button className='main-content-btn'>
            Learn more
          </button>
          <div className='partners'>
            <img src={partners} alt="partners" className='partners-img' />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

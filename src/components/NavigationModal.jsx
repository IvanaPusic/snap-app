import close from '../assets/close.svg';
import CompanyMobileModal from './CompanyMobileModal';
import FeaturesMobileModal from './FeaturesMobileModal';

const NavigationModal = ({
  closeModal,
  navLinks,
  handleClick,
  companySublinks,
  featuresSublinks,
  isCompanyModalOpen,
  isFeaturesModalOpen
}) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className='close-modal-btn' onClick={closeModal}>
          <img src={close} alt="close-btn" />
        </button>
        <nav className='mobile-navigation'>
          <ul>
            {
              navLinks.map(item => {
                return (
                  <div key={item.id}>
                    <li className='mobile-navigation-item'>
                      <button href={item.link} onClick={() => handleClick(item)}>
                        <a className='text-[#686868] inline-block'>{item.link}</a>
                        {item.img && <img src={item.img} alt={item.link} className='inline-block ml-1' />}
                      </button>
                    </li>
                    {item.link === 'Features' && isFeaturesModalOpen && <FeaturesMobileModal featuresSublinks={featuresSublinks} />}
                    {item.link === 'Company' && isCompanyModalOpen && <CompanyMobileModal companySublinks={companySublinks} />}
                  </div>
                );
              })
            }
          </ul>
          <div className='mobile-login-wrapper'>
            <button className='mobile-login-btn'>Login</button>
            <button className='mobile-register-btn'>Register</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavigationModal;

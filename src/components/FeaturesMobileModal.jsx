const FeaturesMobileModal = ({ featuresSublinks }) => {
  return (
    <div className="features-mobile-modal">
      {
        featuresSublinks[0].subLinks.map(item => {
          return (
            <li key={item.id} className="features-mobile-item">
              <span className="inline-block">
                <img src={item.img} alt={item.link} />
              </span>
              <a href={item.link} className="features-mobile-link">{item.link}</a>
            </li>
          );
        })
      }
    </div>
  );
}

export default FeaturesMobileModal;

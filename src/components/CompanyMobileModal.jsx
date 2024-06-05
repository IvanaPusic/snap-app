const CompanyMobileModal = ({ companySublinks }) => {
  return (
    <div className="company-mobile-modal">
      {
        companySublinks[0].subLinks.map(item => {
          return (
            <li key={item.id} className="company-mobile-item">
              <a className="company-mobile-link" href={item.link}>{item.link}</a>
            </li>
          );
        })
      }
    </div>
  );
}

export default CompanyMobileModal;

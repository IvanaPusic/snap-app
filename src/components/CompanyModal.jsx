import { useEffect } from "react";

const CompanyModal = ({ companySublinks }) => {

  useEffect(() => {
    console.log(companySublinks[0].subLinks);
  }, []);

  return (
    <>
      <div className="company">
        {
          companySublinks[0].subLinks.map(item => {
            return (
              <li key={item.id} className="company-list-item">
                <a className="company-link" href={item.link}>{item.link}</a>
              </li>
            );
          })
        }
      </div>
    </>
  );
}

export default CompanyModal;

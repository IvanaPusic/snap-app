import { useEffect } from "react";

const FeaturesModal = ({ featuresSublinks }) => {

  useEffect(() => {
    console.log(featuresSublinks[0].subLinks)
  },[]);

  return (
    <div className="features">
      {
        featuresSublinks[0].subLinks.map(item => {
          return <li key = {item.id} className="features-list-item">
            <span className="inline-block">
              <img src={item.img} alt={item.link} />
            </span>
            <a href={item.link} className="features-link">{item.link}</a>
          </li>
        })
      }
    </div>
  )
}

export default FeaturesModal
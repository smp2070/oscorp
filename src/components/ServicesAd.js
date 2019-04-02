import React from 'react';
import Boxes from './Boxes.js'

const ServicesAd = () => {
  const { ad } = window.servicesInner
  return (
    <div className="conad">
    	<h2 className="conad__title mobile">{ad.title}</h2>
  	  <div className="conad__inner">
  			<div className="conad__content">
  				<div className="conad__left">
  					<div className="conad__text">
  						<h2 className="conad__title desktop">{ad.title}</h2>
  						<p>{ad.descr}</p>
  					</div>
  				</div>
  				<div className="conad__right">
  					<img src={ad.img} alt={ad.img}/>
  				</div>
  			</div>
  		</div>
    	<Boxes/>
    </div>
  )
};
export default ServicesAd;

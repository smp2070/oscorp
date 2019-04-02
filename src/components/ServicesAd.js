import React from 'react';
import Boxes from './Boxes.js'

const ServicesAd = () => {
  const { ad } = window.servicesInner
  return (
    <div className="ad">
    	<h2 className="ad__title mobile">{ad.title}</h2>
  	  <div className="ad__inner">
  			<div className="ad__content">
  				<div className="ad__left">
  					<div className="ad__text">
  						<h2 className="ad__title desktop">{ad.title}</h2>
  						<p>{ad.descr}</p>
  					</div>
  				</div>
  				<div className="ad__right">
  					<img src={ad.img} alt={ad.img}/>
  				</div>
  			</div>
  		</div>
    	<Boxes/>
    </div>
  )
};
export default ServicesAd;

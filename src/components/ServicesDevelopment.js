import React from 'react';
import Boxes from './Boxes.js';

const ServicesDevelopment = () => {
  const { development } = window.servicesInner
  return (
    <div className="development">
      <div className="development__inner">
    	  <h2 className="development__title mobile">{development.title}</h2>
  			<div className="development__content">
  				<div className="development__left">
  					<div className="development__text">
  						<h2 className="development__title desktop">{development.title}</h2>
  						<p>{development.descr}</p>
  					</div>
  				</div>
  				<div className="development__right">
  					<img src={development.img} alt={development.img}/>
  				</div>
  			</div>
  		</div>
    	<Boxes/>
    </div>
  )
}
export default ServicesDevelopment;

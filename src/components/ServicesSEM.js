import React from 'react';
import Boxes from './Boxes.js';

const ServicesSEM = () => {
  const { sem } = window.servicesInner
  return (
    <div className="sem">
    	<h2 className="sem__title mobile">{sem.title}</h2>
  	  <div className="sem__inner">
  			<div className="sem__content">
  				<div className="sem__left">
  					<div className="sem__text">
  						<h2 className="sem__title desktop">{sem.title}</h2>
  						<p>{sem.descr}</p>
  					</div>
  				</div>
  				<div className="sem__right">
  					<img src={sem.img} alt={sem.img}/>
  				</div>
  			</div>
  		</div>
    	<Boxes/>
    </div>
  )
}
export default ServicesSEM;

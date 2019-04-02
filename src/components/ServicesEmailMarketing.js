import React from 'react';
import Boxes from './Boxes.js';

const ServicesEmailMarketing = () => {
  const { emailMarketing } = window.servicesInner
  return (
    <div className="email-marketing">
    	<h2 className="email-marketing__title mobile">{emailMarketing.title}</h2>
  	  <div className="email-marketing__inner">
  			<div className="email-marketing__content">
  				<div className="email-marketing__left">
  					<div className="email-marketing__text">
  						<h2 className="email-marketing__title desktop">{emailMarketing.title}</h2>
  						<p>{emailMarketing.descr}</p>
  					</div>
  				</div>
  				<div className="email-marketing__right">
  					<img src={emailMarketing.img} alt={emailMarketing.img}/>
  				</div>
  			</div>
  		</div>
    	<Boxes/>
    </div>
  )
}
export default ServicesEmailMarketing;

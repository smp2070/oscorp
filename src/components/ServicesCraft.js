import React from 'react';
import Boxes from './Boxes.js';

const ServicesCraft = () => {
  return (
    <div className="craft">
  		<h2 className="craft__title mobile">craft</h2>
  		<div className="craft__inner" >
  			<div className="craft__content">
  				<div className="craft__left">
  					<div className="craft__text">
  						<h2 className="craft__title desktop">craft</h2>
  						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend risus vel lorem placerat tempus. Nullam ultrices tellus molestie pulvinar ultrices. Nulla facilisi. Aliquam euismod purus quis orci placerat consequat. Proin pulvinar dui neque. Aenean finibus at lorem et tempus. Morbi nec dolor elit. Donec nec enim a elit viverra ornare bibendum id purus. Mauris tincidunt porttitor mauris, sed ultricies erat. Etiam tempus vehicula rutrum. Integer tempor dolor vitae tincidunt aliquet. Nulla feugiat feugiat eleifend. Donec eu arcu lorem. Praesent eget dolor lacus.</p>
  					</div>
  				</div>
  				<div className="craft__right">
  					<img src="/img/services_craft.jpg" alt="services_craft"/>
  				</div>
  			</div>
  		</div>
  		<Boxes/>
  	</div>
  )
};
export default ServicesCraft;

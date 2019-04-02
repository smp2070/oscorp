import React from 'react';
import Overdrive from 'react-overdrive';
import Boxes from './Boxes.js';

const ServicesWebsiteContent = (props) => {
	const { websiteContent } = window.servicesInner
	return (
		<Overdrive id="test">
			<div className="website-content">
				<div className="website-content__inner">
					<h2 className="website-content__title mobile">{websiteContent.title}</h2>
					<div className="website-content__content">
						<div className="website-content__left">
							<div className="website-content__text">
								<h2 className="website-content__title desktop">{websiteContent.title}</h2>
								<p className="website-content__desc">{websiteContent.descr}</p>
							</div>
						</div>
						<div className="website-content__right">
							<img src={websiteContent.img} alt={websiteContent.img}/>
						</div>
					</div>
				</div>
				<Boxes/>
			</div>
		</Overdrive>
	)
};
export default ServicesWebsiteContent;

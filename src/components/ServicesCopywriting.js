import React from 'react';
import Overdrive from 'react-overdrive';
import Boxes from './Boxes.js';

const ServicesCopywriting = () => {
  const { copywriting } = window.servicesInner
  return (
		<Overdrive id="test">
			<div className="copywriting">
				<h2 className="copywriting__title mobile">{copywriting.title}</h2>
				<div className="copywriting__inner">
					<div className="copywriting__content">
						<div className="copywriting__left">
							<div className="copywriting__text">
								<h2 className="copywriting__title desktop">{copywriting.title}</h2>
								<p>{copywriting.descr}</p>
							</div>
						</div>
						<div className="copywriting__right">
							<img src={copywriting.img} alt={copywriting.img}/>
						</div>
					</div>
				</div>
				<Boxes/>
			</div>
		</Overdrive>
  )
};
export default ServicesCopywriting;

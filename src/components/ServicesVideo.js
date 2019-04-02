import React from 'react';
import Overdrive from 'react-overdrive';
import Boxes from './Boxes.js';

const ServicesVideo = (props) => {
	const { video } = window.servicesInner
	return (
		<Overdrive id="test">
			<div className="video">
				<div className="video__inner">
					<h2 className="video__title mobile">{video.title}</h2>
					<div className="video__content">
						<div className="video__left">
							<div className="video__text">
								<h2 className="video__title desktop">{video.title}</h2>
								<p className="video__desc">{video.descr}</p>
							</div>
						</div>
						<div className="video__right">
							<img src={video.img} alt={video.img}/>
						</div>
					</div>
				</div>
				<Boxes/>
			</div>
		</Overdrive>
	)
};

export default ServicesVideo;

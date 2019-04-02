import React from 'react';
import Overdrive from 'react-overdrive';
import {Link} from 'react-router-dom';

// const data = [
// 	[
// 		{url: 'strategy', title: 'digital strategy', img: {backgroundImage: 'url("/img/services_strategy.jpg")'} },
// 		{url: 'smm', title: 'SMM', img: {backgroundImage: 'url("/img/services_smm.jpg")'} }
// 	],
// 	[
// 		{url: 'development', title: 'web development', img: {backgroundImage: 'url("/img/services_development.jpg")'} },
// 		{url: 'video', title: 'video production', img: {backgroundImage: 'url("/img/services_video.jpg")'} }
// 	],
// 	[
// 		{url: 'design', title: 'design', img: {backgroundImage: 'url("/img/services_design.jpg")'} },
// 		{url: 'ad', title: 'context advertising', img: {backgroundImage: 'url("/img/services_ad.jpg")'} }
// 	],
// 	[
// 		{url: 'email-marketing', title: 'e-mail marketing', img: {backgroundImage: 'url("/img/services_email-marketing.jpg")'} },
// 		{url: 'copywriting', title: 'copywriting', img: {backgroundImage: 'url("/img/services_copywriting.jpg")'}}
// 	],
// 	[
// 		{url: 'sem', title: 'context SEM', img: {backgroundImage: 'url("/img/services_sem.jpg")'} },
// 		{url: 'website-content', title: 'website content', img: {backgroundImage: 'url("/img/services_website-content.jpg")'} }
// 	]
// ];
const data = [...window.services];

const links = data.map((v, i) => (
	<div className="services__item" key={v[0]['url']}>
		{data[i].map(v => (
			<Link
				to={`/services/${v.url}`}
				key={v.url}
				className="services__link"
				onClick={() => window.scrollTo(0,0)}
				style={v.img}>
				<h2 className="services__title">{v.title}</h2>
			</Link>
		))}
	</div>
));

const Services = (props) => {
	return (
		<Overdrive id="test">
			<div className="wrapper">
				<div className="services">{links}</div>
			</div>
		</Overdrive>
	)
};
export default Services;

import React from 'react';
import Overdrive from 'react-overdrive';

const PortfolioDiadema = () => {
  const { diadema } = window.portfolioInner
  return (
	<Overdrive id="test">
		<div className="diadema">

			<h2 className="diadema__title mobile">{diadema.titleTop}</h2>
			<div className="diadema-bg-top">
				<img className="diadema-bg-top__img" src="/img/portfolio_diadema-top_bg.jpg" alt="portfolio_diadema-top_bg"/>
			</div>

			<div className="diadema__top diadema__grid">
				<div className="diadema__top-content">
					<h2 className="diadema__title desktop">{diadema.titleTop}</h2>
					<p className="diadema__top-txt">{diadema.descrTop}</p>
					<div className="diadema__link">
						<a href="https://diadema.ua/" target="_blank" rel="noopener noreferrer" className="btn">Перейти на сайт</a>
					</div>
				</div>
				<div className="diadema__top-image">
					<img src="/img/portfolio_diadema-rings.jpg" alt="portfolio_diadema-rings"/>
				</div>
			</div>
			<div className="diadema-bg-bottom">
				<img className="diadema-bg-bottom__img" src="/img/portfolio_diadema-bottom-bg.jpg" alt="portfolio_diadema-bottom-bg"/>
			</div>
			<div className="diadema__bottom diadema__grid">
				<div className="diadema__bottom-image">
					<img src="/img/portfolio_diadema-insta.png" alt="portfolio_diadema-insta"/>
				</div>
				<div className="diadema__bottom-content">
					<h2 className="diadema__bottom-title">{diadema.titleBottom}</h2>
					<p className="diadema__bottom-txt">{diadema.descrBottom}</p>
				</div>
			</div>
		</div>
	</Overdrive>
  )
}

export default PortfolioDiadema;

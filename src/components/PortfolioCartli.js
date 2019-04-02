import React from 'react';
import Overdrive from 'react-overdrive';

const PortfolioCartli = () => {
  const { cartli } = window.portfolioInner
  return (
		<Overdrive id="test">
			<div className="cartli">
				<h2 className="cartli__title mobile">{cartli.title}</h2>
				<picture className="cartli-top">
					<source srcSet="/img/portfolio_cartli-bg-mobile.jpg" media="(max-width: 600px)"/>
					<img src="/img/portfolio_cartli-bg.jpg" alt="portfolio_diamo-bg"/>
				</picture>
				<div className="cartli-about">
					<div className="cartli-about__left">
						<img src="/img/portfolio_cartli-smile.jpg" alt="portfolio_cartli-smile"/>
					</div>
					<div className="cartli-about__right">
						<h2 className="cartli__title desktop">{cartli.title}</h2>
						<p className="cartli-about__right-txt">{cartli.descrTop}</p>
						<a href="http://zoolux.ua/" target="_blank" rel="noopener noreferrer" className="btn zoolux-top__link">Перейти на сайт</a>
					</div>
				</div>
				<div className="cartli-bottom">
					<div className="cartli-bottom__left">
						<p className="cartli-bottom__left-txt">{cartli.descrBottom}</p>
					</div>
					<div className="cartli-bottom__right">
						<img src="/img/portfolio_cartli-animal.png" alt="portfolio_cartli-animal"/>
					</div>
				</div>
			</div>
		</Overdrive>
  )
}

export default PortfolioCartli;

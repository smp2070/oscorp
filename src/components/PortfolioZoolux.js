import React from 'react';
import Overdrive from 'react-overdrive';

const PortfolioZoolux = () => {
  const { zoolux } = window.portfolioInner
  return (
		<Overdrive id="test">
			<div className="zoolux wrapper">
				<h2 className="zoolux-top__right-title mobile">{zoolux.title}</h2>
				<div className="zoolux-top">
					<div className="zoolux-top__left">
						<img src="/img/portfolio_zoolux-top.png" alt="portfolio_zoolux-top"/>
					</div>
					<div className="zoolux-top__right">
						<h2 className="zoolux-top__right-title desktop">{zoolux.title}</h2>
						<p className="zoolux-top__right-txt">{zoolux.descrTop}</p>
						<a href="http://zoolux.ua/" target="_blank" rel="noopener noreferrer" className="btn zoolux-top__link">Перейти на сайт</a>
					</div>
				</div>
				<div className="zoolux-bottom">
					<div className="zoolux-bottom__left">
						<p className="zoolux-bottom__left-txt">{zoolux.descrBottom}</p>
					</div>
					<div className="zoolux-bottom__right">
						<img src="/img/portfolio_zoolux-bottom.png" alt="portfolio_zoolux-bottom"/>
					</div>
				</div>
			</div>
		</Overdrive>
  )
}

export default PortfolioZoolux;

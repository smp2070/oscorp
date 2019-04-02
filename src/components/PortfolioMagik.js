import React from 'react';

const PortfolioMagik = () => {
  const { magik } = window.portfolioInner
  return (
    <div className="magik">
  		<h2 className="magik-top__middle--title mobile">{magik.title}</h2>
  		<div className="magik-top">
  			<div className="magik-top__left">
  				<picture>
  					<source srcSet="/img/portfolio_magik-hands.png" media="(min-width: 1200px)"/>
  					<img src="/img/portfolio_magik-hands--horizontal.png" alt="portfolio_magik-hands--horizontal"/>
  				</picture>
  			</div>
  			<div className="magik-top__middle">
  				<h2 className="magik-top__middle--title desktop">{magik.title}</h2>
  				<p className="magik-top__middle--txt">{magik.descrTop}</p>
  				<a href="http://magik-show.com.ua/" target="_blank" rel="noopener noreferrer" className="btn magik--link">Перейти на сайт</a>
  			</div>
  			<div className="magik-top__right">
  				<img src="/img/portfolio_magik-couple.png" alt="portfolio_magik-couple"/>
  			</div>
  		</div>
  		<div className="magik-bottom wrapper">
  			<div className="magik-bottom__left">
  				<img src="/img/portfolio_magik-couple2.jpg" alt="portfolio_magik-couple2"/>
  			</div>
  			<div className="magik-bottom__right">
  				<p className="magik-bottom__right--txt">{magik.descrBottom}</p>
  			</div>
  		</div>
    </div>
  )
}

export default PortfolioMagik;

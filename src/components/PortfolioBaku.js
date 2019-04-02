import React from 'react';
import Overdrive from 'react-overdrive';

const PortfolioBaku = () => {
  const { baku } = window.portfolioInner
  return (
		<Overdrive id="test">
			<div className="baku">
				<h2 className="baku__title mobile">{baku.title}</h2>
				<div className="baku-bg">
					<img className="baku-bg__img" src="/img/portfolio_baku-bg.jpg" alt="portfolio_baku-bg"/>
				</div>
				<div className="wrapper">
					<div className="baku-box box">
						<div className="baku-flex-first">
							<div className="baku-flex-first__left">
								<h2 className="baku__title desktop">{baku.title}</h2>
								<p className="baku__txt baku__txt--first">{baku.descrTop}</p>
								<a href="http://ogni-baku.com.ua/" target="_blank" rel="noopener noreferrer" className="btn baku__link">Перейти на сайт</a>
							</div>

							<div className="baku-flex-first__right">
								<img src="/img/portfolio_baku-kebab.png" alt="portfolio_baku-kebab"/>
							</div>
						</div>
						<div className="baku-flex-second">
							<div className="baku-flex-second__image">
								<img src="/img/portfolio_baku-device.png" alt="portfolio_baku-device"/>
							</div>
							<p className="baku__txt baku__txt--second">{baku.descrBottom}</p>
						</div>
					</div>
				</div>
			</div>
		</Overdrive>
  )
}

export default PortfolioBaku;

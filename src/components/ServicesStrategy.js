import React from 'react';
import Overdrive from 'react-overdrive';
import Boxes from './Boxes.js';

const ServicesStrategy = () => {
  const { strategy } = window.servicesInner
  return (
		<Overdrive id="test">
			<div className="strategy">
				<div className="strategy__inner">
					<h2 className="strategy__title mobile">{strategy.title}</h2>
					<div className="strategy__content">
						<div className="strategy__left">
							<div className="strategy__text">
								<h2 className="strategy__title desktop">{strategy.title}</h2>
								<p>{strategy.descr}</p>
								<img src="/img/services_strategy_chess.png" alt="services_strategy_chess"/>
							</div>
						</div>
						<div className="strategy__right">
							<img src="/img/services_strategy.jpg" alt="services_strategy"/>
						</div>
					</div>
				</div>
				<Boxes/>
			</div>
		</Overdrive>
  )
};
export default ServicesStrategy;

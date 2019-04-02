import React from 'react';
import Overdrive from 'react-overdrive';

const PortfolioTopgym = () => {
  const { topgym } = window.portfolioInner
  return (
    <Overdrive id="test">
      <div className="topgym">
        <div className="topgym-about__skew mobile">
          <h2 className="topgym-about__skew--txt">{topgym.middleTop.title}</h2>
        </div>
        <div className="topgym-top">
          <div className="wrapper">
            <div className="topgym-top__inner">
              <div className="topgym__skew topgym__skew--mb"><span>{topgym.top.first}</span></div>
              <div className="topgym__skew topgym__skew--white topgym__skew--noleft"><span>{topgym.top.second}</span></div>
            </div>
          </div>
        </div>
        <div className="topgym-about">
          <div className="topgym-about__left">
            <div className="topgym-about__skew desktop">
              <h2 className="topgym-about__skew--txt">{topgym.middleTop.title}</h2>
            </div>
            <p className="topgym-about--text">{topgym.middleTop.descr}</p>
            <a href="http://topgym.com.ua/" target="_blank" rel="noopener noreferrer" className="btn topgym-about--link">Перейти на сайт</a>
          </div>
          <div className="topgym-about__right">
            <img src="/img/portfolio_topgym-body.jpg" alt="portfolio_topgym-body"/>
          </div>
        </div>
        <div className="topgym-smm">
          <div className="topgym-smm__left">
            <img src="/img/portfolio_topgym-phone.png" className="topgym-smm__left--image" alt="portfolio_topgym-phone"/>
            <div className="topgym-smm__skew">
              <h2 className="topgym-smm__skew--txt">{topgym.middleBottom.title}</h2>
            </div>
          </div>
          <div className="topgym-smm__right">
            <p className="topgym-smm__right--txt">{topgym.middleBottom.descr}</p>
          </div>
        </div>
        <div className="topgym__bottom">
          <div className="topgym__bottom-img">
            <img src="/img/portfolio_topgym-man-with-yellow-duck.jpg" alt="portfolio_topgym-man-with-yellow-duck"/>
          </div>
          <div className="topgym__bottom-info">
            <h2>{topgym.bottom.title}</h2>
            <p>{topgym.bottom.descr}</p>
          </div>
        </div>
      </div>
    </Overdrive>
  )
}

export default PortfolioTopgym;

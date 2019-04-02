import React from 'react';
import Overdrive from 'react-overdrive';

const PortfolioDiamo = () => {
  const { diamo } = window.portfolioInner
  return (
    <Overdrive id="test">
      <div className="diamo">
        <h2 className="diamo__title mobile">{diamo.title}</h2>
        <div className="diamo__top">
          <img className="diamo__top-image" src="/img/portfolio_diamo-bg.jpg" alt="portfolio_diamo-bg"/>
          <div className="diamo__top-content">
            <div className="diamo__top-content-group">
              <span className="big">BODY</span>
              <span className="small">Идеальная одежда</span>
            </div>
            <p>для идеальной женщины</p>
          </div>
        </div>
        <div className="diamo__middle wrapper">
          <div className="diamo__middle-grid">
            <div className="diamo__middle-left">
              <div className="diamo__middle-content">
                <h2 className="diamo__title desktop">{diamo.title}</h2>
                <p className="diamo__middle-txt">{diamo.descr}</p>
                <a href="http://diamo.com.ua/" target="_blank" rel="noopener noreferrer" className="btn diamo__link">Перейти на сайт</a>
              </div>
            </div>
            <div className="diamo__middle-right">
              <img src="/img/portfolio_diamo-ring.png" alt="portfolio_diamo-ring"/>
            </div>
          </div>
        </div>
        <div className="diamo__bottom">
          <div className="diamo__bottom-grid wrapper">
            <div className="diamo__bottom-left">
              <div className="diamo__bottom-content">
                <h2 className="diamo__bottom-title">Большой выбор</h2>
                <p className="diamo__bottom-subtitle">Обручальных колец</p>
              </div>
            </div>
            <div className="diamo__bottom-right">
              <div className="diamo__bottom-img-box">
                <img className="diamo__bottom-image" src="/img/portfolio_diamo-rings.png" alt="portfolio_diamo-rings"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overdrive>
  )
}

export default PortfolioDiamo;

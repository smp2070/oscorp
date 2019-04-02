import React from 'react';
import Boxes from './Boxes.js';

const ServicesDesign = () => {
  const { design } = window.servicesInner
  return (
    <div className="design">
      <div className="design__inner">
        <h2 className="design__title mobile">{design.title}</h2>
        <div className="design__content">
          <div className="design__left">
            <div className="design__text">
              <h2 className="design__title desktop">{design.title}</h2>
              <p>{design.descr}</p>
            </div>
          </div>
          <div className="design__right">
            <img src={design.img} alt={design.img}/>
          </div>
        </div>
      </div>
      <Boxes/>
    </div>
  )
};
export default ServicesDesign;

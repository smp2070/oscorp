import React from 'react';
import Overdrive from 'react-overdrive';
import Boxes from './Boxes.js';

const ServicesSMM = () => {
  const { smm } = window.servicesInner
  return (
    <Overdrive id="test">
      <div className="smm">
        <h2 className="smm__title mobile">{smm.title}</h2>
        <div className="smm__inner">
          <div className="smm__content">
            <div className="smm__left">
              <div className="smm__text">
                <h2 className="smm__title desktop">{smm.title}</h2>
                <p>{smm.descr}</p>
              </div>
            </div>
            <div className="smm__right">
              <img src={smm.img} alt={smm.img}/>
            </div>
          </div>
        </div>
        <Boxes/>
      </div>
    </Overdrive>
  )
};
export default ServicesSMM;

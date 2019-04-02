import React from 'react';
import { Link } from 'react-router-dom';

const Boxes = () => {
  return (
    <div className="links">
      <Link to="/portfolio" className="links__left links__flex" onClick={() => window.scrollTo(0,0)}>
        <div className="links__left-txt  links__txt">наши работы</div>
      </Link>
      <Link to="/" className="links__right links__flex" onClick={() => window.scrollTo(0,0)}>
        <div className="links__right-txt  links__txt">заказать услугу</div>
      </Link>
    </div>
  )
}

export default Boxes;

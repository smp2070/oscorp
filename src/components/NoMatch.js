import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="page404">
      <div className="page404__inner">
        <div className="page404__img">
        	<img src="/img/404.png" alt="404.png" />
        </div>
        <div className="page404__txt">
            <p className="page404__title">Вы зашли слишком далеко</p>
            <p className="page404__code">404</p>
            <p className="page404__subtitle">
              Вернитесь на <Link to="/">главную</Link> пока не поздно
            </p>
        </div>
      </div>
    </div>
  )
};
export default NoMatch;

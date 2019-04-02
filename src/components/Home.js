import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
      const listItems = this.props.homeMenu.map(v =>
        <Link to={v.url} key={v.url} className={`home__link home__link--${v.url}`}>
          <div className="home__link-inner">
              <div className="home__txt">{v.title}</div>
          </div>
          <div className="home__glitch">
            <div className="home__glitch-img"></div>
            <div className="home__glitch-img"></div>
            <div className="home__glitch-img"></div>
            <div className="home__glitch-img"></div>
          </div>
        </Link>
      );
      return (
        <div id="home" className="home">
          <div className="home__oscorp">
            <img
              className="home__logo"
              src="/img/oscorp_logo.png"
              alt="oscorp_logo"
              title="Oscorp"/>
            <h1 className="home__title">Digital agency</h1>
          </div>
          { listItems }
        </div>
      )
    }
}

export default Home;

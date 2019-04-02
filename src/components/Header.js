import React, { Component } from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

class Header extends Component {
  state = {
    isMobMenuActive: false
  }
  toggleMobileMenu = e => {
    this.setState({isMobMenuActive: !this.state.isMobMenuActive});
    if (e.target.tagName === 'A') window.scrollTo(0,0);
  }
  render() {
    const { headerMenu: menu, location: { pathname : path } } = this.props;
    const { isMobMenuActive } = this.state;


    // const isPortfolioInner = (/\/portfolio\/.+/).test(path);
    // const addPortfolioClass = isPortfolioInner ? 'header__nav-link--portfolio' : '';
    //
    // let logo;
    // if(isPortfolioInner && window.innerWidth >= 1200) {
    //   logo = '/img/oscorp_logo-white.png';
    // }else{
    //   logo = '/img/new_oscorp_logo.png';
    // }

    const addPortfolioClass = '';
    const logo = '/img/new_oscorp_logo.png';


    const style = {
      show: {
        display: 'block'
      }
    };
    const links = menu.map(v => {
      return (
        <li className="menu-mobile__item" key={v.url}>
          <NavLink
            activeClassName="menu-mobile__link--active"
            className="menu-mobile__link"
            to={`/${v.url}`}
            onClick={this.toggleMobileMenu}
          >{v.title}</NavLink>
        </li>
      )
    });
    const nav = menu.map(v => {
      return (
        <li className="header__nav-item" key={v.url}>
          <NavLink
            activeClassName="router-link-active"
            className={`header__nav-link ${addPortfolioClass}`}
            to={`/${v.url}`}
          >{v.title}</NavLink>
        </li>
      )
    });
    return (
      <header>
        <div className="menu-mobile" style={isMobMenuActive ? style.show : null}>
          <ul className="menu-mobile__list">
            {links}
          </ul>
        </div>
        <div className="header">
          <div className={isMobMenuActive ? 'burg close' : 'burg'} onClick={this.toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/" className="header__logo-box">
            <img
              src={logo}
              alt="oscorp_logo"
              title="Oscorp"
              className="header__logo"
            />
          </Link>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {nav}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
};

export default withRouter(Header);

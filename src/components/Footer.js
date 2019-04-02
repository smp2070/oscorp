import React from 'react';
import {Link} from 'react-router-dom';
import SVG from 'react-inlinesvg';

const Footer = (props) => {

  const contactsInfo = [
    {name: 'email', info: 'info@oscorp.pro'},
    {name: 'skype', info: 'onesmilecorp'},
    {name: 'phone', info: '+38 (063) 108 42 43'},
    {name: 'location', info: 'Украина, Винница, ул.Профессора Шульги, 2'}
  ];

  const footerOscorpInfo = contactsInfo.map(item => {
    return (
      <li className="footer__item" key={item.name}>
        <SVG
          src={`/img/${item.name}.svg`}
          className="footer__svg-wrap"
          wrapper={React.createFactory('div')}
          />
        <p className="footer__txt">{item.info}</p>
      </li>
    )
  });

  const footerMenu = props.footerMenu.map(item => {
    return (
      <li className="footer__nav-list" key={item.url}>
        <Link
          to={`/${item.url}`}
          onClick={() => window.scrollTo(0, 0)}
          className="footer__nav-link"
          >{item.title}</Link>
      </li>
    )
  });

  return (
    <footer>
      <div className="footer">
        <div className="footer__left">
          <Link to="/" className="footer__logo-box">
            <img
              className="footer__logo"
              src="/img/new_oscorp_logo.png"
              alt="oscorp_logo"
              title="Oscorp"
              width="272"
            />
          </Link>
          <nav>
            <ul className="footer__nav">{footerMenu}</ul>
          </nav>
        </div>
        <div className="footer__right">
          <ul className="footer__list">{footerOscorpInfo}</ul>
        </div>
      </div>
      <div className="footer__copy">&copy; Oscorp 2014 &mdash; { new Date().getFullYear() }</div>
    </footer>
  )
};

export default Footer;

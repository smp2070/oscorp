import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

import Services from './components/Services';
import ServicesVideo from './components/ServicesVideo';
import ServicesDevelopment from './components/ServicesDevelopment';
import ServicesStrategy from './components/ServicesStrategy';
import ServicesSMM from './components/ServicesSMM';
import ServicesDesign from './components/ServicesDesign';
import ServicesAd from './components/ServicesAd';
import ServicesEmailMarketing from './components/ServicesEmailMarketing';
import ServicesCopywriting from './components/ServicesCopywriting';
import ServicesSEM from './components/ServicesSEM';
import ServicesWebsiteContent from './components/ServicesWebsiteContent';

import Portfolio from './components/Portfolio';
import PortfolioDiadema from './components/PortfolioDiadema';
import PortfolioDiamo from './components/PortfolioDiamo';
import PortfolioTopgym from './components/PortfolioTopgym';
import PortfolioMagik from './components/PortfolioMagik';
import PortfolioBaku from './components/PortfolioBaku';
import PortfolioZoolux from './components/PortfolioZoolux';
import PortfolioCartli from './components/PortfolioCartli';

import Contacts from './components/Contacts';
import NoMatch from './components/NoMatch';

import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {

  render() {

    const menu = [
      {title: 'наши работы', url: 'portfolio'},
      {title: 'услуги', url: 'services'},
      {title: 'о нас', url: 'about'},
      {title: 'контакты', url: 'contacts'}
    ];
    return (

      <Router>
        <React.Fragment>
          <Route path="/" render={props => ( props.location.pathname !== "/") && <Header headerMenu={menu}/> }/>
          <Switch>
            <Route exact path="/" render={props => <Home homeMenu={menu}/>}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>

            <Route path="/services/video" component={ServicesVideo}/>
            <Route path="/services/development" component={ServicesDevelopment}/>
            <Route path="/services/strategy" component={ServicesStrategy}/>
            <Route path="/services/smm" component={ServicesSMM}/>
            <Route path="/services/design" component={ServicesDesign}/>
            <Route path="/services/ad" component={ServicesAd}/>
            <Route path="/services/email-marketing" component={ServicesEmailMarketing}/>
            <Route path="/services/copywriting" component={ServicesCopywriting}/>
            <Route path="/services/sem" component={ServicesSEM}/>
            <Route path="/services/website-content" component={ServicesWebsiteContent}/>
            <Route exact path="/services" component={Services}/>

            <Route path="/portfolio/diadema" component={PortfolioDiadema}/>
            <Route path="/portfolio/diamo" component={PortfolioDiamo}/>
            <Route path="/portfolio/topgym" component={PortfolioTopgym}/>
            <Route path="/portfolio/magik" component={PortfolioMagik}/>
            <Route path="/portfolio/baku" component={PortfolioBaku}/>
            <Route path="/portfolio/zoolux" component={PortfolioZoolux}/>
            <Route path="/portfolio/cartli" component={PortfolioCartli}/>
            <Route exact path="/portfolio" component={Portfolio}/>

            <Route component={NoMatch}/>
          </Switch>
          <Route path="/" render={props => ( props.location.pathname !== "/") && <Footer footerMenu={menu}/> }/>
        </React.Fragment>
    	</Router>
    );
  }
}

export default App;

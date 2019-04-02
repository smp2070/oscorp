import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {

  componentDidMount() {
    // console.log( [...this.refs.cards.querySelectorAll('.portfolio__item')] );
    // this.refs.cards.
    // test()  {
    //   const item = this.refs['test'+i]
    //   console.log( item.parentNode.style.setProperty('--weight',  Math.ceil(item.height / 5) + Math.ceil(item.nextElementSibling.clientHeight / 5) ) )
    // }
    // let i = 0;
    // while()
  }
  state = {
    portfolio: [...window.portfolio],
    items: [...window.portfolio],
    height: [],
    activeTab: 0
  }
  test(i)  {
    const height = [...this.state.height]

    const item = this.refs['test'+i]
    const sibling = this.refs['test'+(i+1)]

    // console.log(item)
    const counted = Math.ceil(item.height / 5) + 14
    height.splice(i, 1, counted)
    console.log(height)
    console.log(counted)
    this.setState({height: height})

  }
  activeTab = (i) => this.state.activeTab == i ? 'portfolio__tab--active' : '';

  filter(i) {
    const { portfolio } = this.state
    this.setState({activeTab: i})
    if (i === 0) {
      this.setState({items: portfolio});
    } else {
      const filtered = portfolio.filter(v => v.label.find(el => el === i) === i)
      this.setState({items: filtered})
    };
  }

  render() {
    const items = [...this.state.items];
    const tabs = ['Все', 'Дизайн', 'Брендинг', 'SEO', 'Разработка'];
    const tabsList = tabs.map((v, i) => <li onClick={this.filter.bind(this, i)} className={`portfolio__tab ` + this.activeTab(i)} key={v}>{v}</li>);

    const cards = items.map((v,i) => {
      return (
        <Link
          to={`/portfolio/${v.url}`}
          className="portfolio__item"
          onClick={() => window.scrollTo(0,0)}
          key={v.id}
          style={{'--weight': this.state.height[i]}}
          >
          <img
            src={`${v.imageUrl}`}
            alt={`${v.imageUrl}`}
            className="portfolio__image"
            ref={'test'+i}
            onLoad={this.test.bind(this, i)}
          />
          <div>
            <h4 className="portfolio__item-title">{v.title}</h4>
            <p className="portfolio__item-subtitle">{v.descr}</p>
          </div>
        </Link>
      )
    });

    return (
      <div className="portfolio">
        <div className="wrapper">
          <ul className="portfolio__tabs">{tabsList}</ul>
          <div className="portfolio__box" ref="cards">{cards}</div>
        </div>
      </div>
    )
  }
};
export default Portfolio;

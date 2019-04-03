import React, { Component } from 'react'
import Overdrive from 'react-overdrive';

export default class About extends Component {

  render() {
    const { left, right } = window.about

    return (
      <Overdrive id="test">
        <div className="about">
          <div className="about__first">
            <div className="about__first-info">
              <h2>{left.title}</h2>
              <p>{left.descr}</p>
            </div>
          </div>
          <div className="about__second">
            <div className="about__second-img-box">
              <img src={right.img} alt={right.img}/>
            </div>
          </div>
          <div className="about__third">
            <div className="about__third-img-box">
              <img src={left.img} alt={left.img}/>
            </div>
          </div>
          <div className="about__fourth">
            <div className="about__fourth-info">
              <h2>{right.title}</h2>
              <p>{right.descr}</p>
            </div>
          </div>
        </div>
      </Overdrive>
    )
  }
}

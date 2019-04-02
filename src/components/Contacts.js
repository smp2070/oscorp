import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import Popup from './Popup';
// import Select from 'react-select';

const reasonList = [
  'Консультация',
  'Создание сайта',
  'SEO-продвижение',
  'SMM',
  'Web-аналитика',
  'Другая тема'
];

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.select = React.createRef();
    this.phone = React.createRef();
  }

  state = {
    showPopup: false,
    isDropdown: false,
    validation: {
      name: false,
      email: false,
      phone: false,
      reason: false
    }
  }

  isDropdown = () => this.setState({isDropdown: !this.state.isDropdown})

  onSubmit = e => {
    const form = e.target;
    e.preventDefault();
    // fetch('http://new.oscorp.pro/ajax/feedback.php', {method: 'POST', body: new FormData(form)})
    fetch('/ajax/feedback.php', {method: 'POST', body: new FormData(form)})
      .then(() => {
        this.clearFeedback(form);
        this.togglePopup();
      });
  }

  togglePopup() {
    this.setState({showPopup: !this.state.showPopup})
  }

  clearFeedback(form) {
    const validation = {...this.state.validation};
    for(let key in validation) validation[key] = false;
    form.reset();
    this.phone.current.value = ''; // because using mask-component :(
    this.setState({validation});
  }

  handleValidation = e => {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const emailRegExp = / /; 
    const validation = {...this.state.validation}
    e = e.target
    switch (e.name) {
      case 'name': validation.name = (e.value.trim() !== ''); break;
      case 'email': validation.email = emailRegExp.test(e.value); break;
      case 'phone': validation.phone = (/\d/).test(e.value[e.value.length-1]) && !(/_/).test(e.value); break;
      default:;
    }
    this.setState({validation})
  }

  chooseOption = e => {
    this.setState({validation: {...this.state.validation, reason: true}})
    this.select.current.value = e.target.textContent
    this.isDropdown()
  }

  render() {
    const { validation: {name, email, phone, reason}, validation, isDropdown, showPopup } = this.state;
    const list = reasonList.map(v => <li key={v} onClick={this.chooseOption}>{v}</li>);
    const isValid = Object.values(validation).every(v => v === true);
    showPopup ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    let styles = {
      select: {
        display: 'block'
      }
    };
    return (
      <div className="contacts">
        {showPopup ? <Popup closePopup={this.togglePopup.bind(this)}/> : null}
        {isDropdown ? <div className="backdrop" onClick={this.isDropdown} /> : null}
        <div className="wrapper">
          <div className="feedback">
          	<div className="feedback__container">
          		<form className="feedback__form" onSubmit={this.onSubmit}>
          			<h3 className="feedback__title">Форма обратной связи</h3>
          			<label>Ваше имя</label>
          			<input
                  name="name"
                  type="text"
                  onChange={this.handleValidation}
                  className={name ? 'valid' : ''}
                  autoComplete="off"
                />
          			<label>E-mail</label>
          			<input
                  name="email"
                  type="email"
                  onChange={this.handleValidation}
                  className={email ? 'valid' : ''}
                  autoComplete="off"
                />
          			<label>Номер телефона</label>
                <InputMask
                  name="phone"
                  type="tel"
                  onChange={this.handleValidation}
                  className={phone ? 'valid' : ''}
                  placeholder="+38(0__)__-__-___"
                  mask="+38(099)99-99-999"
                  ref={this.phone}
                />
          			<label>Причина обращения</label>
          			<div className="feedback__reason">
          				<input
                    readOnly
                    name="reason"
                    type="text"
                    onChange={this.handleValidation}
                    onClick={this.isDropdown}
                    className={reason ? 'valid' : ''}
                    ref={this.select}
                  />
          				<span className={isDropdown ? 'chevron up' : 'chevron down'}></span>
          				<ul className="feedback__custom-select" style={isDropdown ? styles.select : null}>
                    {list}
          				</ul>
          			</div>
          			<button	type="submit" disabled={!isValid}>Отправить</button>
          		</form>
            </div>
          </div>
        </div>
        <div className="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1303.1268897662828!2d28.437197813829734!3d49.214714033434205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c8a14edc06f%3A0xb2e9ca2d93a84f63!2sOscorp.pro!5e0!3m2!1sru!2sua!4v1536133075650"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
            title="Карта"
          ></iframe>
        </div>
        <div className="contacts__info">
          <div className="contacts__address">
            <p>
              <span>Адрес: </span>
              <span>Украина, Винница, ул. Профессора Шульги, 2</span>
            </p>
          </div>
          <ul className="contacts__list">
            <li>
              <span>Тел: </span>
              <span>+38 (063) 108 42 43</span>
            </li>
            <li>
              <span>E-mail: </span>
              <span>info@oscorp.pro</span>
            </li>
            <li>
              <span>Skype: </span>
              <span>onesmilecorp</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};
export default Contacts;

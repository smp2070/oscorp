import React from 'react';

const Popup = props => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__close" onClick={props.closePopup}>x</div>
        <h1 className="popup__title">Спасибо за сообщение!</h1>
        <div className="popup__info">
          <div className="popup__content">
            <p>Мы ответим вам как только проверим почту, так что надейтесь на лудшее.</p>
            <p>А пока вы ожидаете ответ можете:</p>
            <p>Посмотреть наше портфолио или Перейти на главную. Также можна занять свой досуг и узнать направления в которых мы работаем.</p>
            <b>Если вам надело ждать и вы хотите действовать то зайдите в раздел контакты где есть наш номер телефона и адрес.</b>
          </div>
          <div className="popup__image">
            <img src="/img/contacts-thumb-up.png" alt="contacts-thumb-up"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Popup;

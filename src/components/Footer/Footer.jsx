import React from 'react';
import './Footer.scss';
import instagramIcon from './instagram.svg';
import viberIcon from './viber.svg';
import telegramIcon from './telegram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="comtacts">
          <h3>Контакт - центр</h3>
          <p>098 900 09 09 </p>
          <p>Пн - Пт 09:00 - 21:00</p>
          <p>Пн - Пт 09:00 - 21:00</p>
        </div>

        <div className="social-icon-wrapper">
          <img src={instagramIcon} alt="instagram" />
          <img src={viberIcon} alt="viber" />
          <img src={telegramIcon} alt="telegram" />
        </div>

        <div className="buyer">
          <h3>Покупцям</h3>
          <p>Оплата і доставка</p>
          <p>Повернення</p>
          <p>Питання та відповіді</p>
        </div>

        <div className="personal-cabiner">
          <h3>Особистий кабінет</h3>
          <p>Мої дані</p>
          <p>Історія замовлень</p>
          <p>Улюблені</p>
          <p>Розсилки</p>
        </div>

        <div className="about-us">
          <h3>Про компанію</h3>
          <p>Про нас</p>
          <p>Новини</p>
          <p>Стати партнером</p>
          <p>Угода користувача</p>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-wrapper">
          <nav className="main-nav">
            <a href="/">новинки</a>
            <a href="/">чоловіки</a>
            <a href="/">жінки</a>
            <a href="/">аксесуари</a>
            <a href="/">акції</a>
          </nav>
          <p className="copyright">© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

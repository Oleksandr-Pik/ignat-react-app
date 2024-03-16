import React from 'react';
import logo from './logo.svg';
import search from './search-icon.svg';
import heart from './heart.svg';
import bag from './bag.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <a href="tel:+0989000909">098 900 09 09</a>
            <a href="/">Допомога</a>
          </div>

          <div className="header-top-right">
            <a href="/">Увійти</a>
            <span> &#x2f; </span>
            <a href="/">Зареєструватися</a>
          </div>
        </div>
      </div>

      <div className="header-bottom container">
        <a className="logo" href="/">
          {/* <span>Ignat</span> */}
          <img src={logo} alt="app logo" />
        </a>
        <nav className="main-nav">
          <a href="/">новинки</a>
          <a href="/">чоловіки</a>
          <a href="/">жінки</a>
          <a href="/">аксесуари</a>
          <a href="/">акції</a>
        </nav>

        <div className="search-icon-wrapper">
          <div className="input-wrapper">
            <label className="search-wrapper" htmlFor="search">
              <input className="search" type="text" name="search" id="search" />
              <button className="search-btn">
                <img src={search} alt="search-icon" />
              </button>
            </label>
          </div>
          <button className="heart-btn">
            <img src={heart} alt="heart" className="header-icon" />
          </button>
          <button className="bag-btn ">
            <img src={bag} alt="bag" className="header-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

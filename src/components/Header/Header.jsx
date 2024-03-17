import React from 'react';
import logo from './logo.svg';
import search from './search-icon.svg';
import heart from './heart.svg';
import bag from './bag.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <Link href="tel:+0989000909">098 900 09 09</Link>
            <Link to="/">Допомога</Link>
          </div>

          <div className="header-top-right">
            <Link to="/">Увійти</Link>
            <span> &#x2f; </span>
            <Link to="/">Зареєструватися</Link>
          </div>
        </div>
      </div>

      <div className="header-bottom container">
        <Link className="logo" to="/">
          {/* <span>Ignat</span> */}
          <img src={logo} alt="app logo" />
        </Link>
        <nav className="main-nav">
          <Link to="/">новинки</Link>
          <Link to="/product">чоловіки</Link>
          <Link to="/product">жінки</Link>
          <Link to="/product">аксесуари</Link>
          <Link to="/">акції</Link>
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

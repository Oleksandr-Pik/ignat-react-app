import React from 'react';
import './Hero.scss';
import angleLeft from './angle-left.svg';
import angleRight from './angle-right.svg';
import pagination from './pagination.svg';

const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
          <div className="hero-left-side">
            <p className="hero-title">Швидше.</p>
            <p className="hero-title">Вище.</p>
            <p className="hero-title">Сильніше.</p>
            <p className="hero-subtitle">Разом із Nike</p>
          </div>
          <div className="hero-right-side">
            <p className="discont-title">Знижки до 40%</p>
            <p className="discont-subtitle">Залишився лише тиждень</p>
          </div>
          <img className='angle-left' src={angleLeft} alt="angle left" />
          <img className='angle-right' src={angleRight} alt="angle right" />
          <img className='pagination' src={pagination} alt="pagination" />
        </div>
      </section>
  )
}

export default Hero

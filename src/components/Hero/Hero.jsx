import React from 'react';
import './Hero.scss';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';
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
          <img className='arrow-left' src={arrowLeft} alt="arrow left" />
          <img className='arrow-right' src={arrowRight} alt="arrow right" />
          <img className='pagination' src={pagination} alt="pagination" />
        </div>
      </section>
  )
}

export default Hero

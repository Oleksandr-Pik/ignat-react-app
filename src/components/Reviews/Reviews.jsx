import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Reviews.scss';
import stars from './stars.svg';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';
import customerPhoto from './customer-photo.png';

const Reviews = () => {
  return (
    <section className="rewiews container">
      <header className="rewiews-header">
        <h2 className="rewiews-title">Відгуги наших клієнтів</h2>
        <div className="cards-pagination">
          <p>01 / 03</p>
          <img
            className="rewiews-button-prev"
            src={arrowLeft}
            alt="arrow left"
          />
          <img
            className="rewiews-button-next"
            src={arrowRight}
            alt="arrow right"
          />
        </div>
      </header>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        className="rewiews-cards"
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        navigation={{
          prevEl: '.rewiews-button-prev',
          nextEl: '.rewiews-button-next',
        }}
      >
        <SwiperSlide>
          <div className="rewiew-card">
            <div className="customer-wrapper">
              <img
                src={customerPhoto}
                alt="customer"
              />
              <div className="rewiew-rating">
                <img src={stars} alt="stars icon" className="stars-icon" />
              <h3>Жора Ремінгтон</h3>
              </div>
            </div>
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rewiew-card">
            <div className="customer-wrapper">
              <img
                src={customerPhoto}
                alt="customer"
              />
              <div className="rewiew-rating">
                <img src={stars} alt="stars icon" className="stars-icon" />
                <h3>Жора Ремінгтон</h3>
              </div>
            </div>
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rewiew-card">
            <div className="customer-wrapper">
              <img
                src={customerPhoto}
                alt="customer"
              />
              <div className="rewiew-rating">
                <img src={stars} alt="stars icon" className="stars-icon" />
              <h3>Жора Ремінгтон</h3>
              </div>
            </div>
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rewiew-card">
            <div className="customer-wrapper">
              <img
                src={customerPhoto}
                alt="customer"
              />
              <div className="rewiew-rating">
                <img src={stars} alt="stars icon" className="stars-icon" />
              <h3>Жора Ремінгтон</h3>
              </div>
            </div>
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rewiew-card">
            <div className="customer-wrapper">
              <img
                src={customerPhoto}
                alt="customer"
              />
              <div className="rewiew-rating">
                <img src={stars} alt="stars icon" className="stars-icon" />
              <h3>Жора Ремінгтон</h3>
              </div>
            </div>
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rewiew-card">
            <div className="customer-wrapper">
              <img
                src={customerPhoto}
                alt="customer"
              />
              <div className="rewiew-rating">
                <img src={stars} alt="stars icon" className="stars-icon" />
              <h3>Жора Ремінгтон</h3>
              </div>
            </div>
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rewiew-card">
            <div className="customer-wrapper">
              <img
                src={customerPhoto}
                alt="customer"
              />
              <div className="rewiew-rating">
                <img src={stars} alt="stars icon" className="stars-icon" />
              <h3>Жора Ремінгтон</h3>
              </div>
            </div>
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rewiew-card">
            <div className="customer-wrapper">
              <img
                src={customerPhoto}
                alt="customer"
              />
              <div className="rewiew-rating">
                <img src={stars} alt="stars icon" className="stars-icon" />
              <h3>Жора Ремінгтон</h3>
              </div>
            </div>
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;

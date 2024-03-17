import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './HotProducts.scss';
import heartIcon from './heart.svg';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';
import slideImg1 from './slide-img-1.jpg';
import slideImg2 from './slide-img-2.jpg';
import slideImg3 from './slide-img-3.jpg';

const HotProducts = () => {
  return (
    <section className="hot-products container">
      <header className="hot-products-header">
        <h2 className="hot-products-title">Найгарячіші товари</h2>
        <div className="cards-pagination">
          <p>01 / 03</p>
          <img className='hot-products-button-prev' src={arrowLeft} alt="arrow left" />
          <img className='hot-products-button-next' src={arrowRight} alt="arrow right" />
        </div>
      </header>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        className="hot-products-cards"
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation={{
          prevEl: ".hot-products-button-prev",
          nextEl: ".hot-products-button-next",
        }}
        // pagination={{
        //   type: 'fraction',
        // }}
      >
        <SwiperSlide >
          <img className='product-img' src={slideImg1} alt="slide img 1" />
          <div className=''><img src={heartIcon} alt="heart icon" className="heart-icon" /></div>
          <h3>Термобілизна для бодібілдерів</h3>
          <p>Для чоловіків</p>
          <p>2 кольори</p>
          <h4>4000 грн.</h4>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg2} alt="slide img 2" />
          <div className=''><img src={heartIcon} alt="heart icon" className="heart-icon" /></div>
          <h3>Майка для бодібілдерів</h3>
          <p>Для жінок</p>
          <p>6 кольорів</p>
          <h4>1100 грн.</h4>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg3} alt="slide img 3" />
          <div className=''><img src={heartIcon} alt="heart icon" className="heart-icon" /></div>
          <h3>Ланцюжок для бодібілдерів</h3>
          <p>Аксесуари</p>
          <p>30 кг.</p>
          <h4>2000 грн.</h4>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg1} alt="slide img 1" />
          <div className=''><img src={heartIcon} alt="heart icon" className="heart-icon" /></div>
          <h3>Термобілизна для бодібілдерів</h3>
          <p>Для чоловіків</p>
          <p>2 кольори</p>
          <h4>4000 грн.</h4>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg2} alt="slide img 2" />
          <div className=''><img src={heartIcon} alt="heart icon" className="heart-icon" /></div>
          <h3>Майка для бодібілдерів</h3>
          <p>Для жінок</p>
          <p>6 кольорів</p>
          <h4>1100 грн.</h4>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg3} alt="slide img 3" />
          <div className=''><img src={heartIcon} alt="heart icon" className="heart-icon" /></div>
          <h3>Ланцюжок для бодібілдерів</h3>
          <p>Аксесуари</p>
          <p>30 кг.</p>
          <h4>2000 грн.</h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HotProducts;

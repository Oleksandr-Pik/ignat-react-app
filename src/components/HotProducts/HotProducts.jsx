import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './HotProducts.scss';
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
        <div className="cads-pagination">
          <p>01 / 03</p>
          <img src={arrowLeft} alt="arrow left" />
          <img src={arrowRight} alt="arrow right" />
        </div>
      </header>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        className="hot-products-cards"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slideImg1} alt="slide img 1" />
          <h3>Термобілизна для бодібілдерів</h3>
          <p>Для чоловіків</p>
          <p>2 кольори</p>
          <p>4000 грн.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg2} alt="slide img 2" />
          <h3>Майка для бодібілдерів</h3>
          <p>Для жінок</p>
          <p>6 кольорів</p>
          <p>1100 грн.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg3} alt="slide img 3" />
          <h3>Ланцюжок для бодібілдерів</h3>
          <p>Аксесуари</p>
          <p>30 кг.</p>
          <p>2000 грн.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg1} alt="slide img 1" />
          <h3>Термобілизна для бодібілдерів</h3>
          <p>Для чоловіків</p>
          <p>2 кольори</p>
          <p>4000 грн.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg2} alt="slide img 2" />
          <h3>Майка для бодібілдерів</h3>
          <p>Для жінок</p>
          <p>6 кольорів</p>
          <p>1100 грн.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg3} alt="slide img 3" />
          <h3>Ланцюжок для бодібілдерів</h3>
          <p>Аксесуари</p>
          <p>30 кг.</p>
          <p>2000 грн.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg1} alt="slide img 1" />
          <h3>Термобілизна для бодібілдерів</h3>
          <p>Для чоловіків</p>
          <p>2 кольори</p>
          <p>4000 грн.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg2} alt="slide img 2" />
          <h3>Майка для бодібілдерів</h3>
          <p>Для жінок</p>
          <p>6 кольорів</p>
          <p>1100 грн.</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slideImg3} alt="slide img 3" />
          <h3>Ланцюжок для бодібілдерів</h3>
          <p>Аксесуари</p>
          <p>30 кг.</p>
          <p>2000 грн.</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HotProducts;

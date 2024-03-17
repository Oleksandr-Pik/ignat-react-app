import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Hero.scss';
import angleLeft from './angle-left.svg';
import angleRight from './angle-right.svg';
import pagination from './pagination.svg';

const Hero = () => {
  return (
    <section className="hero parallax-bg" data-swiper-parallax="-25%">
      <div className="container" >
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          parallax={true}
          navigation={{
            prevEl: '.angle-left',
            nextEl: '.angle-right',
          }}
          pagination
          // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="slide-wrapper" data-swiper-parallax="25%">
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
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-wrapper" data-swiper-parallax="50%">
              <div className="hero-left-side">
                <p className="hero-title">Швидше.</p>
                {/* <p className="hero-title">Вище.</p> */}
                {/* <p className="hero-title">Сильніше.</p> */}
                <p className="hero-subtitle">Разом із Nike</p>
              </div>
              <div className="hero-right-side">
                <p className="discont-title">Знижки до 40%</p>
                <p className="discont-subtitle">Залишився лише тиждень</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-wrapper" data-swiper-parallax="75%">
              <div className="hero-left-side">
                {/* <p className="hero-title">Швидше.</p> */}
                <p className="hero-title">Вище.</p>
                {/* <p className="hero-title">Сильніше.</p> */}
                <p className="hero-subtitle">Разом із Nike</p>
              </div>
              <div className="hero-right-side">
                <p className="discont-title">Знижки до 40%</p>
                <p className="discont-subtitle">Залишився лише тиждень</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-wrapper" data-swiper-parallax="100%">
              <div className="hero-left-side">
                {/* <p className="hero-title">Швидше.</p> */}
                {/* <p className="hero-title">Вище.</p> */}
                <p className="hero-title">Сильніше.</p>
                <p className="hero-subtitle">Разом із Nike</p>
              </div>
              <div className="hero-right-side">
                <p className="discont-title">Знижки до 40%</p>
                <p className="discont-subtitle">Залишився лише тиждень</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <img className="angle-left" src={angleLeft} alt="angle left" />
        <img className="angle-right" src={angleRight} alt="angle right" />
        <img className="pagination" src={pagination} alt="pagination" />
      </div>
    </section>
  );
};

export default Hero;

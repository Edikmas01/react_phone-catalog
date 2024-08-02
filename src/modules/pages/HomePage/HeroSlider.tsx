import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.scss';

export const HeroSlider = () => {
  return (
    <Swiper
      className="mySwiper"
      loop={true}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="image-container">
          <img src="/img/banner-accessories.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image-container">
          <img src="/img/Banner.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image-container">
          <img src="/img/banner-phones.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image-container">
          <img src="/img/banner-tablets.png" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

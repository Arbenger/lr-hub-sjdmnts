import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Container, Wrapper } from "./styled";

SwiperCore.use([Navigation, Autoplay]);

export default function ImageCarousel() {
  const images = [
    { src: "/images/1.png" },
    { src: "/images/2.png" },
    { src: "/images/3.png" },
    { src: "/images/4.png" },
    { src: "/images/5.png" },
    { src: "/images/6.png" },
    { src: "/images/7.png" },
    { src: "/images/8.png" },
    { src: "/images/9.png" },
  ];

  return (
    <Container>
      <Swiper
        navigation={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.src}
            className="swiper-slide"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <Wrapper />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

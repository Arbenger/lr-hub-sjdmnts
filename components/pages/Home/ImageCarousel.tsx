import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Container, Wrapper } from "./styled";

SwiperCore.use([Navigation, Autoplay]);

export default function ImageCarousel() {
  const images = [
    { src: "/images/1.png", alt: "image-1" },
    { src: "/images/2.png", alt: "image-2" },
    { src: "/images/3.png", alt: "image-3" },
    { src: "/images/4.png", alt: "image-4" },
    { src: "/images/5.png", alt: "image-5" },
    { src: "/images/6.png", alt: "image-6" },
    { src: "/images/7.png", alt: "image-7" },
    { src: "/images/8.png", alt: "image-8" },
    { src: "/images/9.png", alt: "image-9" },
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
        {images.map(({ src, alt }) => (
          <SwiperSlide key={src} className="swiper-slide">
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              alt={alt}
              loading={alt === "image-1" ? "eager" : "lazy"}
            />
            <Wrapper />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

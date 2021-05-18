import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import { Container, Wrapper } from "./styled";
import { useTheme } from "@material-ui/core";

SwiperCore.use([Navigation, Thumbs]);

export default function ImageCarousel() {
  const { breakpoints } = useTheme();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slidePerView, setSlidePerView] = useState(4);
  const [hasNavigation, setHasNavigation] = useState(true);

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

  useEffect(() => {
    const observeWindoWidth = () => {
      const width = window.innerWidth;
      const isXS = width <= breakpoints.values.sm;
      setSlidePerView(isXS ? 2 : 4);
      setHasNavigation(!isXS);
    };
    window.addEventListener("resize", observeWindoWidth);
    return () => {
      window.removeEventListener("resize", observeWindoWidth);
    };
  }, []);

  return (
    <Container>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={hasNavigation}
        thumbs={{ swiper: thumbsSwiper }}
        className="swiper-main"
      >
        {images.map(({ src, alt }) => (
          <SwiperSlide key={src}>
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

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={8}
        slidesPerView={slidePerView}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="swiper-sub"
      >
        {images.map(({ src, alt }) => (
          <SwiperSlide key={src}>
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              alt={alt}
              loading={alt === "image-1" ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

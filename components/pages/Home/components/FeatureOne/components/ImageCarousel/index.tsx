import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import SwiperCore, { Autoplay, Navigation, Thumbs } from "swiper/core";
import {
  Container,
  Wrapper,
  WrapperHeader,
  WrapperBody,
  WrapperAction,
  WrapperContainer,
} from "./styled";
import {
  Button,
  Typography,
  TypographyVariant,
  useTheme,
} from "@material-ui/core";

SwiperCore.use([Autoplay, Navigation, Thumbs]);

export default function ImageCarousel() {
  const { breakpoints } = useTheme();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slidePerView, setSlidePerView] = useState(4);
  const [headerVariant, setHeaderVariant] = useState<TypographyVariant>("h3");

  useEffect(() => {
    const observeWindoWidth = () => {
      const width = window.innerWidth;
      const isXS = width <= breakpoints.values.sm;
      setSlidePerView(isXS ? 2 : 4);
      setHeaderVariant(isXS ? "h4" : "h3");
    };
    window.addEventListener("resize", observeWindoWidth);
    return () => {
      window.removeEventListener("resize", observeWindoWidth);
    };
  }, []);

  const images = [
    {
      src: "/images/1.png",
      alt: "image-1",
      wrapper: (
        <WrapperContainer>
          <Wrapper>
            <WrapperHeader>
              <Typography variant={headerVariant}>
                Welcome To Learning Resources Hub
              </Typography>
            </WrapperHeader>
            <WrapperBody>
              <Typography>
                We provide tools that will help you efficiently deal with your
                tasks and visualize all the activities that you've commited
                using a precise graphical representations.
              </Typography>
            </WrapperBody>
            <WrapperAction>
              <Button variant="contained" color="inherit">
                Get Started
              </Button>
            </WrapperAction>
          </Wrapper>
        </WrapperContainer>
      ),
    },
    {
      src: "/images/3.png",
      alt: "image-3",
      wrapper: (
        <WrapperContainer>
          <Wrapper>
            <WrapperHeader>
              <Typography variant={headerVariant}>
                A Library Management System For SJDMNTS
              </Typography>
            </WrapperHeader>
            <WrapperBody>
              <Typography>
                We developed this web application for the purpose of making the
                library of San Jose Del Monte National Trade School (SJDMNTS)
                sustainable and efficient.
              </Typography>
            </WrapperBody>
            <WrapperAction>
              <Button variant="contained" color="inherit">
                Learn More
              </Button>
            </WrapperAction>
          </Wrapper>
        </WrapperContainer>
      ),
    },

    {
      src: "/images/5.png",
      alt: "image-4",
      wrapper: (
        <WrapperContainer>
          <Wrapper>
            <WrapperHeader>
              <Typography variant={headerVariant}>Our Mission</Typography>
            </WrapperHeader>
            <WrapperBody>
              <Typography>
                To ensure a high quality educational library services, we
                developed a web application to support students, teachers, and
                staffs in pursuit of educational excellence in a welcoming
                environment of cultivating literacy skills.
              </Typography>
            </WrapperBody>
          </Wrapper>
        </WrapperContainer>
      ),
    },
    {
      src: "/images/6.png",
      alt: "image-5",
      wrapper: (
        <WrapperContainer>
          <Wrapper>
            <WrapperHeader>
              <Typography variant={headerVariant}>Our Vision</Typography>
            </WrapperHeader>
            <WrapperBody>
              <Typography>
                We serves as digital learning and discovery in the educational
                community. We develop, organize, provide access, and preserve
                materials to meet the needs of present and future generations of
                students, teachers, and staffs.
              </Typography>
            </WrapperBody>
          </Wrapper>
        </WrapperContainer>
      ),
    },
  ];

  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="swiper-main"
      >
        {images.map(({ src, alt, wrapper }) => (
          <SwiperSlide key={src}>
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              alt={alt}
              loading={alt === "image-1" ? "eager" : "lazy"}
            />
            {wrapper}
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

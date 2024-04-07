"use client";
import React, { Fragment } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface ISlide {
  title: string;
  description: string;
  image_url: string;
}

interface ICarouselSection {
  slides: ISlide[];
}

export default function CarouselSection(props: ICarouselSection) {
  const { slides } = props;

  return (
    <Carousel
      responsive={responsive}
      showDots
      autoPlay
      infinite
      autoPlaySpeed={5000}
      containerClass="w-full"
    >
      {slides.map((slide, key) => {
        return (
          <div
            key={key}
            className="w-full min-h-screen flex items-center justify-center lg:justify-start bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(229, 229, 229, 0) 0%, rgba(0, 0, 0, 0.5) 60%), url(${slide.image_url})`,
            }}
          >
            <div className="text-center lg:text-start lg:pl-[136px] md:max-w-[700px]">
              <h1 className="font-yesevaone text-6xl md:text-8xl lg:text-9xl text-white px-[31%] md:p-0 mb-2 md:mb-0">
                {slide.title}
              </h1>
              <p className="font-phetsarath text-lg md:text-xl lg:text-2xl text-white px-[20%] md:p-0">
                {slide.description}
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

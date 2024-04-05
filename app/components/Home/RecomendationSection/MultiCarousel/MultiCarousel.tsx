"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ISlide {
  title: string;
  images: string[];
}

interface IMultiCarousel {
  slides: ISlide[];
}

export default function MultiCarousel(props: IMultiCarousel) {
  const { slides } = props;

  const responsive = {
    "3xl": {
      breakpoint: { max: 2560, min: 1920 },
      items: 5.5,
    },
    "2xl": {
      breakpoint: { max: 1920, min: 1536 },
      items: 4.5,
    },
    xl: {
      breakpoint: { max: 1536, min: 1280 },
      items: 3.5,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 2.5,
    },
    md: {
      breakpoint: { max: 1024, min: 640 },
      items: 1.8,
    },
    xs: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} infinite containerClass="w-full min-h-96">
      {slides.map((slide, key) => {
        return (
          <div
            key={key}
            className="flex flex-col p-6 items-center justify-evenly max-h-96 w-80 bg-winds-breath rounded-3xl cursor-pointer hover:bg-alabaster-white hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              alt={slide.title}
              src={slide.images[0]}
              className="h-44 w-auto rounded-3xl"
            />
            <h2 className="font-phetsarath font-bold text-basil-green text-base uppercase mt-8">
              {slide.title}
            </h2>
          </div>
        );
      })}
    </Carousel>
  );
}

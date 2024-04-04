"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import Carousel from "./Carousel";

interface IHome {}

export default function Home(props: IHome) {
  const [carouselItems, setCarouselItems] = useState([]);

  const fetchCarouselItems = useCallback(async () => {
    try {
      // const res = await fetch("/api/carousel", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     title: "title",
      //     description: "desck",
      //     url: "url",
      //   }),
      // });
      // if (res.ok) {
      //   const data = await res.json();
      //   console.log(data);
      // } else {
      //   console.error("Failed to fetch carousel items");
      // }
      const res = await fetch("/api/carousel");
      if (res.ok) {
        const data = await res.json();
        setCarouselItems(data);
      } else {
        console.error("Failed to fetch carousel items");
      }
    } catch (error) {
      console.error("Error fetching carousel items:", error);
    }
  }, []);

  useEffect(() => {
    fetchCarouselItems();
  }, [fetchCarouselItems]);

  return (
    <Fragment>
      <Carousel slides={carouselItems} />
    </Fragment>
  );
}

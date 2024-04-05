"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import CarouselSection from "./CarouselSection";
import ImpactSection from "./ImpactSection";
import TrustSection from "./TrustSection";
import CustomerServiceSection from "./CustomerServiceSection";
import RecomendationSection from "./RecomendationSection";
import CustomersSection from "./CustomersSection";

interface IHome {}

export default function Home(props: IHome) {
  const [carouselItems, setCarouselItems] = useState([]);
  const [kitItems, setKitItems] = useState([]);

  //POST SOME SHIT
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

  const fetchCarouselItems = useCallback(async () => {
    try {
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
  const fetchKitItems = useCallback(async () => {
    try {
      const res = await fetch("/api/product/kit");
      if (res.ok) {
        const data = await res.json();
        setKitItems(data);
      } else {
        console.error("Failed to fetch carousel items");
      }
    } catch (error) {
      console.error("Error fetching carousel items:", error);
    }
  }, []);

  useEffect(() => {
    fetchCarouselItems();
    fetchKitItems();
  }, [fetchCarouselItems, fetchKitItems]);

  return (
    <Fragment>
      <CarouselSection slides={carouselItems} />
      <ImpactSection />
      <TrustSection />
      <CustomerServiceSection />
      <RecomendationSection kits={kitItems} />
      <CustomersSection />
    </Fragment>
  );
}

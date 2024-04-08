// FILEPATH: /c:/Users/garzi/OneDrive/Documentos/PROJECTS/ReactJS/solerco-web/__tests__/CarouselSection.test.tsx

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CarouselSection from "@/app/components/Home/CarouselSection/CarouselSection";

describe("CarouselSection", () => {
  it("renders without crashing", () => {
    render(<CarouselSection slides={[]} />);
  });

  it("renders the correct number of slides", () => {
    const slides = [
      {
        title: "string1",
        description: "stringx1",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1920px-Image_created_with_a_mobile_phone.png",
      },
      {
        title: "string2",
        description: "stringx2",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1920px-Image_created_with_a_mobile_phone.png",
      },
    ];

    render(<CarouselSection slides={slides} />);

    slides.forEach(async (slide) => {
      const element = await screen.findByText(slide.title);
      expect(element).toBeInTheDocument();
    });
  });

  // Add more tests as needed
});

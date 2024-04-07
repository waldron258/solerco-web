"use server";

export async function GET() {
  try {
    // const carouselItems = await getCollection("carousel");

    const res = await fetch("http://127.0.0.1:8000/api/carousel/");
    const carouselItems = await res.json();
    return Response.json(carouselItems);
  } catch (error) {
    console.error("Error fetching carousel items: ", error);
    return Response.json({ error: "Unable to fetch carousel items" });
  }
}

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     await addDocument("carousel", body);
//     return Response.json({ message: "Carousel item created successfully" });
//   } catch (error) {
//     console.error("Error creating carousel item: ", error);
//     return Response.json({ error: "Unable to create carousel item" });
//   }
// }

"use server";
import { addDocument, getCollection } from "@/app/lib/firebase/firestore";

import type { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  try {
    const carouselItems = await getCollection("carousel");

    return Response.json(carouselItems.data);
  } catch (error) {
    console.error("Error fetching carousel items: ", error);
    return Response.json({ error: "Unable to fetch carousel items" });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await addDocument("carousel", body);
    return Response.json({ message: "Carousel item created successfully" });
  } catch (error) {
    console.error("Error creating carousel item: ", error);
    return Response.json({ error: "Unable to create carousel item" });
  }
}

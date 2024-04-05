"use server";
import { getDocumentsByQuery } from "@/app/lib/firebase/firestore";

export async function GET() {
  try {
    const kitItems = await getDocumentsByQuery("products", "type", "kit");

    return Response.json(kitItems.data);
  } catch (error) {
    console.error("Error fetching kit items: ", error);
    return Response.json({ error: "Unable to fetch kit items" });
  }
}

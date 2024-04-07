"use server";

export async function GET() {
  try {
    // const kitItems = await getDocumentsByQuery("products", "type", "kit");

    return Response.json([]);
  } catch (error) {
    console.error("Error fetching kit items: ", error);
    return Response.json({ error: "Unable to fetch kit items" });
  }
}

"use server";

export async function GET() {
  try {
    return Response.json([]);
  } catch (error) {
    console.error("Error fetching carousel item: ", error);
    return Response.json({ error: "Unable to fetch this carousel item" });
  }
}

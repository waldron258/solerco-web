"use server";

import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await axios.post("http://127.0.0.1:8000/api/login/", body);

    // const res = await fetch("http://127.0.0.1:8000/api/login/", {
    //   method: "POST",
    //   body: request,
    // });
    // const response = await res.json();
    return Response.json(response.data);
  } catch (error) {
    console.error("Error loging user: ", error);
    return Response.json({ error: "Unable to login" });
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

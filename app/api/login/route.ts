"use server";

import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await axios.post("http://127.0.0.1:8000/api/login/", body);

    return Response.json({
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    });
  } catch (error: any) {
    return new Response(`error: ${error.message}`, {
      status: error.response?.status,
      statusText: error.response?.statusText,
    });
  }
}

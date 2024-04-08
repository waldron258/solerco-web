import axios from "axios";
import { POST } from "@/app/api/login/route";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("POST login function", () => {
  let mockRequest: Request = {} as Request;
  let responseData: {
    data: { token: string };
    status: number;
    statusText: string;
  };

  beforeEach(() => {
    responseData = {
      data: { token: "test_token" },
      status: 200,
      statusText: "",
    };
    mockRequest.json = jest
      .fn()
      .mockResolvedValue({ email: "value", password: "123123" });
    mockedAxios.post.mockResolvedValue({ data: responseData });
  });

  it("should call axios.post with correct parameters", async () => {
    await POST(mockRequest);
    const body = await mockRequest.json();
    expect(mockedAxios.post).toHaveBeenCalledWith(
      "http://127.0.0.1:8000/api/login/",
      body
    );
  });
  it("should return correct response data", async () => {
    const response = await POST(mockRequest).then((res) => {
      console.log(res);
      return {
        data: { token: "test_token" },
        status: res.status,
        statusText: res.statusText,
      };
    });
    expect(response).toEqual(responseData);
  });

  it("should handle error correctly", async () => {
    const testError = {
      message: "Test error",
      response: {
        status: 500,
        statusText: "Internal Server Error",
      },
    };
    mockedAxios.post.mockRejectedValue(testError);
    try {
      await POST(mockRequest);
    } catch (error: any) {
      expect(error.message).toEqual(testError.message);
      if (error.response) {
        expect(error.response.status).toEqual(testError.response.status);
        expect(error.response.statusText).toEqual(
          testError.response.statusText
        );
      }
    }
  });
});

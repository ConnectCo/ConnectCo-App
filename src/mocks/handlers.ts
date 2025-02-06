import { http, HttpResponse } from "msw";

import { generateMock } from "../utils/mock";

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

export const handlers = [
  http.get(`${baseUrl}/user`, () => {
    return HttpResponse.json(
      generateMock({
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
];

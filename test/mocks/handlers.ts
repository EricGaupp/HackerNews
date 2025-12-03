import { http, HttpResponse } from "msw";

import { type Story } from "@/api/story";

export const restHandlers = [
  http.get("/api/topstories", () => {
    return HttpResponse.json([123]);
  }),

  http.get<{ id: string }>("/api/item/:id", ({ params }) => {
    const { id } = params;

    const story: Story = {
      id: parseInt(id, 10),
      title:
        "OpenAI suffers setback as hampsters powering data center go on strike",
    };

    return HttpResponse.json(story);
  }),
];

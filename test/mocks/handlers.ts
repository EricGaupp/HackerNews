import { http, HttpResponse } from "msw";

import { type Story } from "@/api/story";

export const restHandlers = [
  http.get<{ id: string }>("/api/item/:id", ({ params }) => {
    const { id } = params;

    const story: Story = {
      id: parseInt(id, 10),
      title: "OpenAI suffers setback as hamsters powering data center unionize",
      url: "https://techcrunch.com/2025/12/03/the-hamster-revolution-is-here/",
      by: "hackernewsuserman",
      time: 1764790143,
      score: 10000,
      descendants: 1000,
    };

    return HttpResponse.json(story);
  }),
];

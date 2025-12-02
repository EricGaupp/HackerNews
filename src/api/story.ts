import { queryOptions } from "@tanstack/react-query";

export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids?: Array<number>;
  score: number;
  text?: string;
  time: number;
  title: string;
  type: "story";
  url: string;
}

async function fetchStory(id: number): Promise<Story> {
  const response = await fetch(`/api/item/${id}`);

  if (!response.ok) {
    throw new Error("Error fetching story");
  }

  const story = await response.json();

  return story;
}

export const storyQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ["story", { id }],
    queryFn: () => fetchStory(id),
  });

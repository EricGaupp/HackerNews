import { queryOptions } from "@tanstack/react-query";

async function fetchNewStories(): Promise<Array<number>> {
  const response = await fetch("/api/newstories");

  if (!response.ok) {
    throw new Error("Error fetching new stories");
  }

  const newStories = await response.json();

  return newStories;
}

export const newStoriesQueryOptions = queryOptions({
  queryKey: ["new"],
  queryFn: () => fetchNewStories(),
});

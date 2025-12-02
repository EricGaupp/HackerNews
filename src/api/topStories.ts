import { queryOptions } from "@tanstack/react-query";

async function fetchTopStories(): Promise<Array<number>> {
  const response = await fetch("/api/topstories");

  if (!response.ok) {
    throw new Error("Error fetching top stories");
  }

  const topStories = await response.json();

  return topStories.slice(0, 10);
}

export const topStoriesQueryOptions = queryOptions({
  queryKey: ["top"],
  queryFn: () => fetchTopStories(),
});

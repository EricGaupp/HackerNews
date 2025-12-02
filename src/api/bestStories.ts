import { queryOptions } from "@tanstack/react-query";

async function fetchBestStories(): Promise<Array<number>> {
  const response = await fetch("/api/beststories");

  if (!response.ok) {
    throw new Error("Error fetching best stories");
  }

  const bestStories = await response.json();

  return bestStories.slice(0, 10);
}

export const bestStoriesQueryOptions = queryOptions({
  queryKey: ["best"],
  queryFn: () => fetchBestStories(),
});

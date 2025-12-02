import { queryOptions } from "@tanstack/react-query";

async function fetchBestStories(): Promise<Array<number>> {
  const response = await fetch("/api/beststories");

  if (!response.ok) {
    throw new Error("Error fetching best stories");
  }

  const bestStories = await response.json();

  return bestStories;
}

export const bestStoriesQueryOptions = queryOptions({
  queryKey: ["best"],
  queryFn: () => fetchBestStories(),
});

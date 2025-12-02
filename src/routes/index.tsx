import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

async function fetchTopStories(): Promise<Array<number>> {
  const response = await fetch("/api/topstories");

  if (!response.ok) {
    throw new Error("Error fetching top stories");
  }

  const topStories = await response.json();

  return topStories;
}

const topStoriesQueryOptions = queryOptions({
  queryKey: ["top"],
  queryFn: () => fetchTopStories(),
});

export const Route = createFileRoute("/")({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(topStoriesQueryOptions),
});

function RouteComponent() {
  const { data } = useSuspenseQuery(topStoriesQueryOptions);

  return (
    <div className="border-hackernews-orange rounded-lg border-4 p-2">
      <ul>
        {data.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

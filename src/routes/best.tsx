import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { bestStoriesQueryOptions } from "@/api/bestStories";
import { StoryCard } from "@/components/StoryCard/StoryCard";

export const Route = createFileRoute("/best")({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(bestStoriesQueryOptions),
});

function RouteComponent() {
  const { data } = useSuspenseQuery(bestStoriesQueryOptions);

  return (
    <div className="flex flex-col gap-2">
      {data.map((id, index) => (
        <StoryCard key={id} id={id} rank={index + 1} />
      ))}
    </div>
  );
}

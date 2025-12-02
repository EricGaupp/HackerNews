import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { newStoriesQueryOptions } from "@/api/newStories";
import { StoryCard } from "@/components/StoryCard/StoryCard";

export const Route = createFileRoute("/new")({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(newStoriesQueryOptions),
});

function RouteComponent() {
  const { data } = useSuspenseQuery(newStoriesQueryOptions);

  return (
    <div className="flex flex-col gap-2">
      {data.map((id, index) => (
        <StoryCard key={id} id={id} rank={index + 1} />
      ))}
    </div>
  );
}

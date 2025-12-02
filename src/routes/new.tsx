import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { newStoriesQueryOptions } from "@/api/newStories";

import { usePagination } from "@/hooks/usePagination";

import { StoryCard } from "@/components/StoryCard/StoryCard";

export const Route = createFileRoute("/new")({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(newStoriesQueryOptions),
  pendingComponent: PendingComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(newStoriesQueryOptions);
  const {
    currentPage,
    items: stories,
    nextDisabled,
    nextOnClick,
    prevDisabled,
    prevOnClick,
    storiesPerPage,
  } = usePagination(data);

  return (
    <>
      <div className="flex flex-col gap-2">
        {stories.map((id, index) => (
          <StoryCard
            key={id}
            id={id}
            rank={currentPage * storiesPerPage + index + 1}
          />
        ))}
      </div>
      <div className="flex justify-between pt-2">
        <Button disabled={prevDisabled} onClick={prevOnClick} variant="ghost">
          <ArrowLeft />
          Previous
        </Button>
        <Button disabled={nextDisabled} onClick={nextOnClick} variant="ghost">
          Next
          <ArrowRight />
        </Button>
      </div>
    </>
  );
}

function PendingComponent() {
  return <h1>Fetching Stories...</h1>;
}

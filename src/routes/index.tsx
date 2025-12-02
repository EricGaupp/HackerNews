import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/Select";

import { topStoriesQueryOptions } from "@/api/topStories";

import { usePagination } from "@/hooks/usePagination";

import { StoryCard } from "@/components/StoryCard/StoryCard";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(topStoriesQueryOptions),
  pendingComponent: PendingComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(topStoriesQueryOptions);
  const {
    currentPage,
    items: stories,
    itemsPerPage: storiesPerPage,
    nextDisabled,
    nextOnClick,
    prevDisabled,
    prevOnClick,
    setItemsPerPage: setStoriesPerPage,
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
      <div className="flex justify-between py-2">
        <Button disabled={prevDisabled} onClick={prevOnClick} variant="ghost">
          <ArrowLeft />
          Previous
        </Button>
        <div className="flex gap-2">
          <Label htmlFor="storiesPerPageSelect">Stories Per Page</Label>
          <Select
            onValueChange={(value) => {
              setStoriesPerPage(parseInt(value, 10));
            }}
            value={storiesPerPage.toString()}
          >
            <SelectTrigger id="storiesPerPageSelect">
              <SelectValue placeholder="Stories Per Page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>
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

import { useSuspenseQuery } from "@tanstack/react-query";

import { ArrowBigUpIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";
import { MessagesSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { storyQueryOptions } from "@/api/story";

interface StoryCardProps {
  id: number;
  rank: number;
}

export function StoryCard({ id, rank }: StoryCardProps) {
  const {
    data: { by: author, descendants, score, time, title, url },
  } = useSuspenseQuery(storyQueryOptions(id));

  return (
    <div className="flex flex-col rounded-sm border-2 border-gray-800 bg-white p-2">
      <div className="flex items-baseline gap-2">
        <p className="text-lg sm:text-xl">{`${rank}.`}</p>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2">
            <a href={url} target="__blank" className="text-lg sm:text-xl">
              {title}
            </a>
            {url ? (
              <p className="text-hackernews-orange">{new URL(url).hostname}</p>
            ) : null}
          </div>
          <p className="text-sm sm:hidden">{`by ${author}`}</p>
          <p className="text-sm sm:hidden">{`${time ? ` ${timestampToElapsedTime(time)}` : null}`}</p>
          <div className="hidden sm:-ml-2 sm:flex sm:items-center sm:gap-2">
            <Button
              aria-label="Upvote"
              className="rounded-full hover:bg-orange-400"
              size="icon-sm"
              variant="ghost"
            >
              <ArrowBigUpIcon />
            </Button>
            <p className="-ml-2">{`${score} points`}</p>
            <p>|</p>
            <p>{`by ${author}`}</p>
            <p>|</p>
            <p>{`${time ? ` ${timestampToElapsedTime(time)}` : null}`}</p>
            <p>|</p>
            <p>{`${descendants} comments`}</p>
          </div>
        </div>
        <div className="hidden sm:ml-auto sm:flex sm:self-center">
          <Button
            aria-label="Hide"
            className="rounded-full"
            size="icon-sm"
            variant="ghost"
          >
            <EyeOffIcon />
          </Button>
        </div>
      </div>
      <div className="-mx-2 mt-2 -mb-2 flex items-center border-t-2 border-t-gray-400 sm:hidden">
        <Button aria-label="Upvote" className="flex-1" variant="ghost">
          <ArrowBigUpIcon /> {score}
        </Button>
        <Button aria-label="Comment" className="flex-1" variant="ghost">
          <MessagesSquareIcon /> {descendants}
        </Button>
        <Button aria-label="Hide" className="flex-1" variant="ghost">
          <EyeOffIcon />
        </Button>
      </div>
    </div>
  );
}

function timestampToElapsedTime(timestamp: number) {
  const current = Math.floor(new Date().getTime() / 1000);
  const secondsElapsed = current - timestamp;

  if (secondsElapsed > 86400) {
    const daysElapsed = Math.floor(secondsElapsed / 86400);
    return `${daysElapsed} day${daysElapsed > 1 ? "s" : ""} ago`;
  }

  if (secondsElapsed > 3600) {
    const hoursElapsed = Math.floor(secondsElapsed / 3600);
    return `${hoursElapsed} hour${hoursElapsed > 1 ? "s" : ""} ago`;
  }

  if (secondsElapsed > 60) {
    const minutesElapsed = Math.floor(secondsElapsed / 60);
    return `${minutesElapsed} minute${minutesElapsed > 1 ? "s" : ""} ago`;
  }

  return `${secondsElapsed} second${secondsElapsed > 1 ? "s" : ""} ago`;
}

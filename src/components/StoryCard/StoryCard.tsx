import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

import { storyQueryOptions } from "@/api/story";

interface StoryCardProps {
  id: number;
  rank: number;
}

export function StoryCard({ id, rank }: StoryCardProps) {
  const {
    data: { by: author, kids, score, time, title, url },
  } = useSuspenseQuery(storyQueryOptions(id));

  return (
    <div className="flex items-baseline gap-2 rounded-sm border-2 border-gray-800 p-2">
      <div>{rank}. </div>
      <div className="flex flex-col">
        <div>
          <Link to={url} target="__blank">
            {title}
          </Link>
        </div>
        <div className="flex gap-2">
          <button>upvote</button>
          <p>{`${score} points by ${author} ${timestampToElapsedTime(time)}`}</p>
          <p>|</p>
          <p>hide</p>
          <p>|</p>
          <p>{`${kids && kids.length > 0 ? kids.length : "0"} comments`}</p>
        </div>
      </div>
    </div>
  );
}

function timestampToElapsedTime(timestamp: number) {
  const current = Math.floor(new Date().getTime() / 1000);
  const secondsElapsed = current - timestamp;

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

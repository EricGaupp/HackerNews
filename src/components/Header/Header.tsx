import { CircleUserRoundIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

import hackerNewsLogo from "../../assets/y18.svg";

export function Header() {
  return (
    <header className="bg-hackernews-orange flex items-center gap-2 p-2 md:px-24">
      <img src={hackerNewsLogo} className="border-2 border-white" />
      <div className="flex items-baseline gap-2">
        <h1 className="text-primary font-mono text-xl font-semibold">
          Hacker News
        </h1>
        <nav>
          <Link
            to="/"
            className="[&.active]:text-white"
            activeOptions={{ exact: true }}
          >
            top
          </Link>
          {` | `}
          <Link to="/new" className="[&.active]:text-white">
            new
          </Link>
          {` | `}
          <Link to="/best" className="[&.active]:text-white">
            best
          </Link>
        </nav>
      </div>
      <CircleUserRoundIcon className="ml-auto" />
      <p>Login</p>
    </header>
  );
}

import hackerNewsLogo from "../../assets/y18.svg";
import { CircleUserRoundIcon } from "lucide-react";

function Header() {
  return (
    <header className="bg-hackernews-orange flex items-center gap-2 p-2 md:px-24">
      <img src={hackerNewsLogo} className="border-2 border-white" />
      <div className="flex items-baseline gap-2">
        <h1 className="text-primary font-mono text-xl font-semibold">
          Hacker News
        </h1>
        <nav>
          <a href="/">top</a> | <a href="/new">new</a> |{" "}
          <a href="/best">best</a>
        </nav>
      </div>
      <CircleUserRoundIcon className="ml-auto" />
      <p>Login</p>
    </header>
  );
}

export { Header };

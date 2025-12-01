import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/best")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/best"!</div>;
}

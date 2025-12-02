import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Header } from "../components/Header/Header";
import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
  },
);

function RootComponent() {
  return (
    <>
      <Header />
      <main className="p-2 md:px-24">
        <Outlet />
      </main>
    </>
  );
}

import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import { Header } from "@/components/Header/Header";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
  },
);

function RootComponent() {
  return (
    <>
      <Header />
      <main className="overflow-scroll px-2 pt-4 md:px-24">
        <Outlet />
      </main>
    </>
  );
}

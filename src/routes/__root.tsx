import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/Header/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

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

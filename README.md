# HackerNews Refresh

This project aims to provide a visual update to the HackerNews main page utilizing data obtained from the [HackerNews public API](https://github.com/HackerNews/API).

## View the Project

Run the project locally by:

1. Cloning the repo
2. Installing the dependencies with Node `npm i`
3. Running the Vite dev server with `npm run dev`
4. Navigating to [http://localhost:5173](http://localhost:5173)

## Assumptions

- Functionality requiring authentication (upvoting and hiding posts) is beyond the scope of this assignment.
- Search functionality has no public API support and is therefore beyond the scope of this assignment.
- HackerNews sends server side rendered markup over the wire. For this rewrite, a single page application calling the HackerNews public API from the front-end is permissible.

## Technologies

- [Vite + React + TypeScript template](https://vite.dev/guide/#scaffolding-your-first-vite-project) to bootstrap the project
- [TanStack Query](https://tanstack.com/query/latest) for data fetching and managing server state
- [Shadcn/ui + Tailwind CSS](https://ui.shadcn.com/) for components and styling
- [Vitest](https://vitest.dev/) for unit and integration testing

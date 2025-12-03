import { describe, expect } from "vitest";
import { render } from "vitest-browser-react";

import { test } from "@test/vitest.setup.browser";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StoryCard } from "./StoryCard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("StoryCard component", () => {
  test("it renders the story title", async () => {
    const { getByRole } = await render(<StoryCard id={1} rank={1} />, {
      wrapper,
    });

    await expect
      .element(
        getByRole("link", {
          exact: true,
          name: "OpenAI suffers setback as hamsters powering data center unionize",
        }),
      )
      .toBeVisible();
  });

  test("it renders the story link hostname", async () => {
    const { getByRole } = await render(<StoryCard id={1} rank={1} />, {
      wrapper,
    });

    await expect
      .element(
        getByRole("paragraph").filter({
          exact: true,
          hasText: "techcrunch.com",
        }),
      )
      .toBeVisible();
  });

  test("it renders the name of the user who submitted the story", async () => {
    const { getByRole } = await render(<StoryCard id={1} rank={1} />, {
      wrapper,
    });

    await expect
      .element(
        getByRole("paragraph").filter({
          exact: true,
          hasText: "by hackernewsuserman",
        }),
      )
      .toBeVisible();
  });

  test("it renders the amount of time elapsed since the story was posted", async () => {
    const { getByRole } = await render(<StoryCard id={1} rank={1} />, {
      wrapper,
    });

    await expect
      .element(
        getByRole("paragraph").filter({
          hasText: /\d+\s(second|minute|hour|day)s?\sago/,
        }),
      )
      .toBeVisible();
  });

  test("it renders the number of points for the story", async () => {
    const { getByRole } = await render(<StoryCard id={1} rank={1} />, {
      wrapper,
    });

    await expect
      .element(
        getByRole("button")
          .filter({ hasText: "10000" })
          .or(
            getByRole("paragraph").filter({
              exact: true,
              hasText: "10000 points",
            }),
          )
          .first(),
      )
      .toBeVisible();
  });

  test("it renders the upvote button", async () => {
    const { getByRole } = await render(<StoryCard id={1} rank={1} />, {
      wrapper,
    });

    await expect.element(getByRole("button", { name: "upvote" })).toBeVisible();
  });

  test("it renders the number of comments", async () => {
    const { getByRole } = await render(<StoryCard id={1} rank={1} />, {
      wrapper,
    });

    await expect
      .element(
        getByRole("button")
          .filter({ hasText: "1000" })
          .or(
            getByRole("paragraph").filter({
              exact: true,
              hasText: "1000 comments",
            }),
          )
          .first(),
      )
      .toBeVisible();
  });

  test("it renders the hide button", async () => {
    const { getByRole } = await render(<StoryCard id={1} rank={1} />, {
      wrapper,
    });

    await expect
      .element(getByRole("button", { exact: true, name: "Hide" }))
      .toBeVisible();
  });
});

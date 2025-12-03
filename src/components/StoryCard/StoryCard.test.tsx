import { describe, expect } from "vitest";
import { render } from "vitest-browser-react";

import { test } from "@test/vitest.setup.browser";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StoryCard } from "./StoryCard";

describe("StoryCard component", () => {
  test("it renders the story title", async () => {
    const queryClient = new QueryClient();

    const { getByText } = await render(
      <QueryClientProvider client={queryClient}>
        <StoryCard id={1} rank={1} />
      </QueryClientProvider>,
    );

    await expect
      .element(
        getByText(
          "OpenAI suffers setback as hampsters powering data center go on strike",
        ),
      )
      .toBeInTheDocument();
  });
});

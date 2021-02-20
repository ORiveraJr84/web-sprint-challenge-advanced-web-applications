import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth as mockGetColors } from "../helpers/axiosWithAuth";

jest.mock("../helpers/axiosWithAuth");

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage />);
  mockGetColors.mockResolvedValueOnce({
    data: [
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff",
        },
        id: 1,
      },
      {
        color: "limegreen",
        code: {
          hex: "#99ddbc",
        },
        id: 2,
      },
    ],
  });

  // SECTION
  // NOTE Need to figure out a way to target svg circles
  // NOTE Added a data-testid onto each to target
  const bubbles = await waitFor(() => screen.getAllByTestId("circle"));
  //!SECTION

  expect(bubbles).toHaveLength(2);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
// NOTE Initial test passed. Only stopped working once I attempted to retrieve the data. Not sure what's wrong. Can't get any tests to pass.

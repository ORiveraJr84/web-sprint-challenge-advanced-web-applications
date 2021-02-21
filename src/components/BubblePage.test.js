import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import { getColors as mockGetColors } from "../helpers/getColors";

jest.mock("../helpers/getColors");

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  /* mockGetColors.mockResolvedValueOnce({
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
  }); */

  // console.log(`This is the mockGetColors Fn --->`, mockGetColors());

  render(<BubblePage />);

  // SECTION
  // NOTE Need to figure out a way to target svg circles aka bubbles, and to target list of colors
  // NOTE Added a data-testid onto each to target

  await waitFor(() => {
    expect(screen.getAllByTestId("circle")).toHaveLength(2);
  });
  //!SECTION
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
// NOTE Initial test passed. Only stopped working once I attempted to retrieve the data. Not sure what's wrong. Can't get any tests to pass.

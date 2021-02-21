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

  await waitFor(() => {
    expect(screen.getAllByTestId("circle")).toHaveLength(2);
  });
});

//Task List
// ✔️ 1. Setup test for basic rendering of component
// ✔️ 2. Setup test for initial rendering of bubbles on loading

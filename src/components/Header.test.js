import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("renders header text", () => {
    render(<Header />);
    const headerText = screen.getByText(/SpaceX/i);
    expect(headerText).toBeInTheDocument();
  });
});

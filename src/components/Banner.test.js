
//Test if the Banner component renders without errors:
import React from "react";
import { render } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  it("renders without errors", () => {
    render(<Banner />);
  });
});

import { describe, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "../pages";

describe("Home", () => {
  test("home", () => {
    // When
    render(<Home />);

    // Then
    expect(screen.getByText("Welcome")).toBeDefined();
  });
});

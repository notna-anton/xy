import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { vi, describe, test, expect, beforeEach } from "vitest";
import { X, Y } from "@xy-direction/react";

describe("X and Y components", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.body.innerHTML = "";
  });

  test("X component renders with props", () => {
    const { getByTestId } = render(
      <X data-testid="x-box" g="grid" justify="center">
        Content
      </X>
    );

    const xElement = getByTestId("x-box");

    const computedStyles = window.getComputedStyle(xElement);
    expect(computedStyles.display).toBe("flex");
    expect(computedStyles.justifyContent).toBe("center");

    expect(xElement).toHaveTextContent("Content");
  });

  test("Y component renders with props", () => {
    const { getByTestId } = render(
      <Y data-testid="y-box" m="10px" align="flex-start">
        More Content
      </Y>
    );

    const yElement = getByTestId("y-box");

    const computedStyles = window.getComputedStyle(yElement);
    expect(computedStyles.display).toBe("flex");
    expect(computedStyles.margin).toBe("10px");
    expect(computedStyles.alignItems).toBe("flex-start");

    expect(yElement).toHaveTextContent("More Content");
  });

  test("Y component renders with props 2", () => {
    const { getByTestId } = render(
      <Y data-testid="y-box" m="10px" align="flex-start">
        More Content
      </Y>
    );

    const yElement = getByTestId("y-box");

    const computedStyles = window.getComputedStyle(yElement);
    expect(computedStyles.display).toBe("flex");
    expect(computedStyles.margin).toBe("10px");
    expect(computedStyles.alignItems).toBe("flex-start");

    expect(yElement).toHaveTextContent("More Content");
  });

  test("Y component renders with padding and gap", () => {
    const { getByTestId } = render(
      <Y data-testid="y-box" p="20px" g="15px">
        Padded Content
      </Y>
    );

    const yElement = getByTestId("y-box");

    const computedStyles = window.getComputedStyle(yElement);
    expect(computedStyles.padding).toBe("20px");
    expect(computedStyles.gap).toBe("15px");

    expect(yElement).toHaveTextContent("Padded Content");
  });

  test("X component renders with debug outline", () => {
    const { getByTestId } = render(
      <X data-testid="x-box" debug>
        Debug Content
      </X>
    );

    const xElement = getByTestId("x-box");

    const computedStyles = window.getComputedStyle(xElement);
    expect(computedStyles.outline).toBe("1px solid red");

    expect(xElement).toHaveTextContent("Debug Content");
  });

  test("Y component renders with flex-shrink", () => {
    const { getByTestId } = render(
      <Y data-testid="y-box" shrink>
        Shrink Content
      </Y>
    );

    const yElement = getByTestId("y-box");

    const computedStyles = window.getComputedStyle(yElement);
    expect(computedStyles.flexShrink).toBe("0");

    expect(yElement).toHaveTextContent("Shrink Content");
  });
});

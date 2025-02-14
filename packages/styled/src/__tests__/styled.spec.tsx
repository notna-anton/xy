import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { X, Y } from "../index";

describe.each([X, Y])("Component", (Box) => {
  test("renders with default styles", () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toHaveStyle("display: flex");
  });

  test("applies padding when prop is set", () => {
    const { container } = render(<Box p="10px" />);
    expect(container.firstChild).toHaveStyle("padding: 10px");
  });

  test("applies margin when prop is set", () => {
    const { container } = render(<Box m="20px" />);
    expect(container.firstChild).toHaveStyle("margin: 20px");
  });

  test("applies gap when prop is set", () => {
    const { container } = render(<Box g="15px" />);
    expect(container.firstChild).toHaveStyle("gap: 15px");
  });

  test("applies flex-wrap when wrap is true", () => {
    const { container } = render(<Box wrap />);
    expect(container.firstChild).toHaveStyle("flex-wrap: wrap");
  });

  test("applies justify-content when justify prop is set", () => {
    const { container } = render(<Box justify="center" />);
    expect(container.firstChild).toHaveStyle("justify-content: center");
  });

  test("applies align-items when align prop is set", () => {
    const { container } = render(<Box align="flex-start" />);
    expect(container.firstChild).toHaveStyle("align-items: flex-start");
  });

  test("applies width: 100% when fullWidth is true", () => {
    const { container } = render(<Box fullWidth />);
    expect(container.firstChild).toHaveStyle("width: 100%");
  });

  test("applies height: 100% when fullHeight is true", () => {
    const { container } = render(<Box fullHeight />);
    expect(container.firstChild).toHaveStyle("height: 100%");
  });

  test("applies outline when debug is true", () => {
    const { container } = render(<Box debug />);
    expect(container.firstChild).toHaveStyle("outline: 1px solid red");
  });
});

describe("X Component", () => {
  test("renders with row direction", () => {
    const { container } = render(<X />);
    expect(container.firstChild).toHaveStyle("flex-direction: row");
  });

  test("applies default align-items center", () => {
    const { container } = render(<X />);
    expect(container.firstChild).toHaveStyle("align-items: center");
  });
});

describe("Y Component", () => {
  test("renders with column direction", () => {
    const { container } = render(<Y />);
    expect(container.firstChild).toHaveStyle("flex-direction: column");
  });
});

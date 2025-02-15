import { describe, it, expect, beforeAll, beforeEach } from "vitest";
import "@xy-direction/web-components";

beforeAll(async () => {
  await customElements.whenDefined("x-box");
  await customElements.whenDefined("y-box");
});

describe("BoxElement Tests", () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement("x-box");
    document.body.appendChild(element);
  });

  it("should set display to flex by default", () => {
    expect(element.style.display).toBe("flex");
  });

  it("should set display to inline-flex if inline attribute is present", () => {
    element.setAttribute("inline", "");
    expect(element.style.display).toBe("inline-flex");
  });

  it("should set flex-wrap when wrap attribute is present", () => {
    element.setAttribute("wrap", "");
    expect(element.style.flexWrap).toBe("wrap");
  });

  it("should set flex-shrink to 0 when shrink attribute is present", () => {
    element.setAttribute("shrink", "");
    expect(element.style.flexShrink).toBe("0");
  });

  it("should set width to 100% when fullWidth attribute is present", async () => {
    element.setAttribute("fullWidth", "");
    (element as any).updateStyles();
    expect(element.style.width).toBe("100%");
  });

  it("should set height to 100% when fullHeight attribute is present", async () => {
    element.setAttribute("fullHeight", "");
    (element as any).updateStyles();
    expect(element.style.height).toBe("100%");
  });

  it("should set outline when debug attribute is present", () => {
    element.setAttribute("debug", "");
    expect(element.style.outline).toBe("1px solid red");
  });
});

describe("XElement and YElement Tests", () => {
  it("should set flex-direction to row for XElement", async () => {
    const xElement = document.createElement("x-box");
    document.body.appendChild(xElement);
    expect(getComputedStyle(xElement).flexDirection).toBe("row");
  });

  it("should set flex-direction to column for YElement", async () => {
    const yElement = document.createElement("y-box");
    document.body.appendChild(yElement);
    expect(getComputedStyle(yElement).flexDirection).toBe("column");
  });
});

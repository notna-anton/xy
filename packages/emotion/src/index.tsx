"use client";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export interface BoxProps {
  g?: string;
  m?: string;
  p?: string;
  inline?: boolean;
  wrap?: boolean;
  shrink?: boolean;
  align?: string;
  alignItems?: string;
  justify?: string;
  justifyContent?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  debug?: boolean;
  padding?: string;
  gap?: string;
  margin?: string;
}

interface ExtendedTheme extends Theme {
  xyDebug?: boolean;
}

const Box = styled("div", {
  shouldForwardProp: (prop) =>
    ![
      "g",
      "gap",
      "m",
      "margin",
      "p",
      "padding",
      "inline",
      "wrap",
      "shrink",
      "align",
      "alignItems",
      "justify",
      "justifyContent",
      "fullWidth",
      "fullHeight",
      "debug",
    ].includes(prop),
})<BoxProps>`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  ${({ p, padding }) =>
    p || padding ? `padding: ${p || padding}` : undefined};
  ${({ g, gap }) => (g || gap ? `gap: ${g || gap}` : undefined)};
  ${({ m, margin }) => (m || margin ? `margin: ${m || margin}` : undefined)};
  ${({ wrap }) => (wrap ? "flex-wrap: wrap;" : undefined)};
  ${({ justify, justifyContent }) =>
    justify || justifyContent
      ? `justify-content: ${justify || justifyContent};`
      : undefined};
  ${({ align, alignItems }) =>
    align || alignItems ? `align-items: ${align || alignItems};` : undefined};
  ${({ shrink }) => (shrink ? `flex-shrink: 0;` : undefined)};
  ${({ fullWidth }) => (fullWidth ? `width: 100%;` : undefined)};
  ${({ fullHeight }) => (fullHeight ? `height: 100%;` : undefined)};
  ${({ theme, debug }: { theme: ExtendedTheme; debug?: boolean }) =>
    (theme?.xyDebug || debug) && `outline: 1px solid red;`}
`;

export const X = styled(Box)`
  flex-direction: row;
  ${({ align = "center" }) => (align ? `align-items: ${align};` : undefined)};
`;

export const Y = styled(Box)`
  flex-direction: column;
`;

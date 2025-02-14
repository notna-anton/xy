"use client";
import { styled } from "styled-components";

export interface BoxProps {
  g?: string;
  m?: string;
  p?: string;
  inline?: boolean;
  wrap?: boolean;
  shrink?: boolean;
  align?: string;
  justify?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  debug?: boolean;
}

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "g",
      "m",
      "p",
      "inline",
      "wrap",
      "shrink",
      "align",
      "justify",
      "fullWidth",
      "fullHeight",
      "debug",
    ].includes(prop),
})<BoxProps>`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  ${({ p }) => (p ? `padding: ${p}` : undefined)};
  ${({ g }) => (g ? `gap: ${g}` : undefined)};
  ${({ m }) => (m ? `margin: ${m}` : undefined)};
  ${({ wrap }) => (wrap ? "flex-wrap: wrap;" : undefined)};
  ${({ justify }) => (justify ? `justify-content: ${justify};` : undefined)};
  ${({ align }) => (align ? `align-items: ${align};` : undefined)};
  ${({ shrink }) => (shrink ? `flex-shrink: 0;` : undefined)};
  ${({ fullWidth }) => (fullWidth ? `width: 100%;` : undefined)};
  ${({ fullHeight }) => (fullHeight ? `height: 100%;` : undefined)};
  ${({ debug }) => debug && `outline: 1px solid red;`};
`;

export const X = styled(Box)`
  flex-direction: row;
  ${({ align = "center" }) => (align ? `align-items: ${align};` : undefined)};
`;

export const Y = styled(Box)`
  flex-direction: column;
`;

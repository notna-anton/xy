import React, { useEffect } from "react";
import "@xy-direction/web-components";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "x-box": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "y-box": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

type BoxProps = React.HTMLAttributes<HTMLElement> & {
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
};

export const X: React.FC<BoxProps> = (props): React.ReactElement => {
  useEffect(() => {
    customElements.whenDefined("x-box");
  }, []);
  return React.createElement("x-box", props, props.children);
};

export const Y: React.FC<BoxProps> = (props): React.ReactElement => {
  useEffect(() => {
    customElements.whenDefined("y-box");
  }, []);
  return React.createElement("y-box", props, props.children);
};

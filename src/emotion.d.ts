import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      secondaryHover: string;
      error: string;
      helper: string;
    };
    typography: {
      default: string;
      italic: string;
      bold: string;
      heavy: string;
    };
    fontSizes: {
      helper: number;
      default: number;
      h5: number;
      h4: number;
    };
  }
}

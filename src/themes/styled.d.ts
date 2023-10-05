import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        lightBlue: string;
        grey: string;
      };
      neutral: {
        black: string;
        white: string;
      };
    };
    fontSizes: {
      heading1: {
        smallScreen: string;
        bigScreen: string;
      };
      heading2: {
        smallScreen: string;
        bigScreen: string;
      };
      heading3: {
        smallScreen: string;
        bigScreen: string;
      };
      heading4: {
        smallScreen: string;
        bigScreen: string;
      };
      heading5: {
        smallScreen: string;
        bigScreen: string;
      };
    };
    mediaSize: {
      s: string;
      md: string;
      lg: string;
      xlg: string;
    };
    height: {
      tabSectionHeightLargeScreen: number;
      descriptionHeightLargeScreen: number;
      tabSectionHeightSmallScreen: number;
      descriptionHeightSmallScreen: number;
    };
    width: {
      navBarWidth: number;
    };
  }
}

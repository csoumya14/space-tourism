import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  palette: {
    primary: {
      lightBlue: "hsl(231.2,77.4%,89.6%)",
      grey: "hsl(0, 0%, 59%, 1)",
    },
    neutral: {
      black: "hsl(230,35.3%,6.7%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  fontSizes: {
    heading1: {
      smallScreen: "80px",
      bigScreen: "150px",
    },
    heading2: {
      smallScreen: "56px",
      bigScreen: "100px",
    },
    heading3: {
      smallScreen: "32px",
      bigScreen: "56px",
    },
    heading4: {
      smallScreen: "80px",
      bigScreen: "32px",
    },
    heading5: {
      smallScreen: "20px",
      bigScreen: "28px",
    },
  },
  mediaSize: {
    s: "576px",
    md: "768px",
    lg: "992px",
    xlg: "1200px",
  },
  height: {
    tabSectionHeightLargeScreen: 90,
    descriptionHeightLargeScreen: 150,
    tabSectionHeightSmallScreen: 110,
    descriptionHeightSmallScreen: 110,
  },
  width: {
    navBarWidth: 574.406,
  },
};

export { myTheme };

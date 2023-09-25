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
  mediaSize: {
    s: "576px",
    md: "768px",
    lg: "992px",
    xlg: "1200px",
  },
};

export { myTheme };

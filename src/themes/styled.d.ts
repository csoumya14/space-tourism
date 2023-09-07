import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        lightBlue: string;
      };
      neutral: {
        black: string;
        white: string;
      };
    };
    mediaSize: {
      s: string;
      md: string;
      lg: string;
      xlg: string;
    };
  }
}
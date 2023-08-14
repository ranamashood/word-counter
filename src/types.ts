import "styled-components";

export interface CounterInterface {
  characters: number;
  words: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondaryLight: string;
      secondary: string;
      secondaryDark: string;
      background: string;
      text: string;
    };
    fontSize: {
      small: string;
      normal: string;
      large: string;
    };
    fontFamily: string;
    borderRadius: string;
    transitionTime: {
      fast: string;
      normal: string;
      slow: string;
    };
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      background: string;
      title: string;
      subtitle: string;
      board: string;
      disabled: string;
      transparent: string;
    };
  }
}

import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      bodyLarge: string;
      bodyMedium: string;
      bodySmall: string;
    };
    colors: {
      primary: {
        black: string;
        white: string;
        orange: string;
        orange_2: string;
        orange_3: string;
      };
      secondary: {
        darkBlack: string;
        darkBlack2: string;
        darkBlueSubHeader: string;
        mediun: string;
        blue: string;
        red: string;
        yellow: string;
        darkYellow: string;
        orange: string;
        hoverOrange: string;
        grey: string;
        grey2: string;
        darkGrey: string;
        disabledGrey: string;
      };
      gradient: {
        gradient1: string;
      };
    };
    spaces: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxl2: string;
      xxl3: string;
      xxl4: string;
      xxl5: string;
      xxl6: string;
    };
    breakpoint: {
      foldMaxWidth: string;
      mobileMinWidth: string;
      mobileMaxWidth: string;
      tabletMinWidth: string;
      tabletMaxWidth: string;
      desktopMinWidth: string;
    };
    borderRadius: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
    };
  }
}

export const theme: DefaultTheme = {
  fontSize: {
    h1: "24px",
    h2: "21px",
    h3: "18px",
    h4: "14px",
    bodyLarge: "18px",
    bodyMedium: "14px",
    bodySmall: "12px",
  },
  colors: {
    primary: {
      black: "#000000",
      white: "#FFFFFF",
      orange: "#F19D38",
      orange_2: "#e77600",
      orange_3: "#febd69",
    },
    secondary: {
      darkBlack: "#141920",
      darkBlack2: "#131921",
      darkBlueSubHeader: "#232f3e",
      mediun: "#252F3D",
      blue: "#0066c0",
      red: "#B12704",
      yellow: "#F4BF76",
      darkYellow: "#F2A742",
      orange: "#C45500",
      hoverOrange: "#B65B22",
      grey: "#DDDDDD",
      grey2: "#CCCCCC",
      darkGrey: "#C9CCCC",
      disabledGrey: "#565959",
    },
    gradient: {
      gradient1: "linear-gradient(to bottom, #f7dfa5, #f0c14b)",
    },
  },
  spaces: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "40px",
    xxl: "48px",
    xxl2: "56px",
    xxl3: "64px",
    xxl4: "72px",
    xxl5: "80px",
    xxl6: "88px",
  },
  breakpoint: {
    foldMaxWidth: "359px",
    mobileMinWidth: "768px",
    mobileMaxWidth: "991px",
    tabletMinWidth: "992px",
    tabletMaxWidth: "1259px",
    desktopMinWidth: "1260px",
  },
  borderRadius: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
  },
};

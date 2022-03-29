import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
// import { RouterContext } from "next/dist/next-server/lib/router-context";

import theme from "../styles/theme";

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [theme]));

export const parameters = {
  // nextRouter: {
  //   Provider: RouterContext.Provider,
  // },
  layout: "fullscreen",
};

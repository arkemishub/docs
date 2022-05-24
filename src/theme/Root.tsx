import React, { ReactNode } from "react";
import GithubAuth from "./GithubAuth";
import { createTheme, ThemeProvider } from "@arke/react-ui";
import DarkTheme from "./DarkTheme";

interface Props {
  children: ReactNode;
}

export default function Root(props: Props) {
  const { children } = props;

  return (
    <ThemeProvider theme={createTheme(DarkTheme)}>
      {/* @ts-ignore */}
      <GithubAuth>{children}</GithubAuth>
    </ThemeProvider>
  );
}

"use client";
import { myTheme } from "@/themes/ThemeVariables";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export const Layout = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};

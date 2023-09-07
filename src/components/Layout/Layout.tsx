"use client";
import { myTheme } from "@/themes/ThemeVariables";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { Main } from "./Layout.style";
import { SharedTop } from "../SharedTop/SharedTop";

export const Layout = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};

"use client";
import { Main } from "./layout.style";
import { ThemeProvider } from "styled-components";
import { myTheme } from "@/themes/ThemeVariables";
import { SharedTop } from "@/components/SharedTop/SharedTop";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Main>{children}</Main>;
}

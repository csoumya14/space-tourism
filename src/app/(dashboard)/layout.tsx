"use client";
import { Main } from "./layout.style";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Main>{children}</Main>;
}

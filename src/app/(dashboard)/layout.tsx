"use client";
import { Section } from "./HomePage.style";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Section>{children}</Section>;
}

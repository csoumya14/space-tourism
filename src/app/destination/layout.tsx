"use client";
import { Section } from "./DestinationPage.style";

interface DestinationLayoutProps {
  children: React.ReactNode;
}

export default function DestinationLayout({
  children,
}: DestinationLayoutProps) {
  return <Section>{children}</Section>;
}

"use client";
import { Section } from "./TechnologyPage.style";

interface TechnologyLayoutProps {
  children: React.ReactNode;
}

export default function TechnologyLayout({ children }: TechnologyLayoutProps) {
  return <Section>{children}</Section>;
}

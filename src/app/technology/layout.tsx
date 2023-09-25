"use client";
import { Section } from "./TechnologyPage.style";

interface CrewLayoutProps {
  children: React.ReactNode;
}

export default function CrewLayout({ children }: CrewLayoutProps) {
  return <Section>{children}</Section>;
}

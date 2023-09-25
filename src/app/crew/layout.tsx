"use client";
import { Section } from "./CrewPage.style";

interface CrewLayoutProps {
  children: React.ReactNode;
}

export default function CrewLayout({ children }: CrewLayoutProps) {
  return <Section>{children}</Section>;
}

"use client";
import { SharedTop } from "@/components/SharedTop/SharedTop";
import React, { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <SharedTop />
      {children}
    </div>
  );
};

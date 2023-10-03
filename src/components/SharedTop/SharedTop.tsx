"use client";
import { FC } from "react";
import { Menu } from "../Menu/Menu";
import { Wrapper } from "./SharedTop.style";
import { Logo } from "../SVGs/Logo/Logo";

interface SharedTopProps {}

export const SharedTop: FC<SharedTopProps> = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  );
};

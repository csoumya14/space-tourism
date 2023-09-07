"use client";
import { FC, useRef, useState } from "react";
import { Menu } from "../Menu/Menu";
import { useOnClickOutside } from "../../utils/hooks/useOnClickOutside";
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

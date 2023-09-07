import { FC } from "react";
import { Wrapper } from "./TopLogo.style";
import { Logo } from "../Logo/Logo";
import { Hamburger } from "../Hamburger/Hamburger";
import { Menu } from "@/components/Menu/Menu";

interface TopLogoProps {}

export const TopLogo: FC<TopLogoProps> = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu/>
    </Wrapper>
  );
};

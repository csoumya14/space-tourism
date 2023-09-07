import { FC, useState } from "react";
import { OpenCloseButton } from "./Menu.style";
import { Hamburger } from "../SVGs/Hamburger/Hamburger";
import { Close } from "../SVGs/Close/Close";
import { NavBar } from "./NavBar/NavBar";

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavBar toggleNav={toggleNav} setOpen={setOpen} open={open} />
      <OpenCloseButton type="button" onClick={toggleNav}>
        {open ? <Close /> : <Hamburger />}
      </OpenCloseButton>
    </>
  );
};

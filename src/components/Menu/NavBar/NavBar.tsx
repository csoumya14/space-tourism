import { Dispatch, FC, SetStateAction, useRef } from "react";
import { StyledMenu } from "./NavBar.style";
import { LinkItems } from "../LinkItems/LinkItems";
import { PageList } from "../PageList/PageList";
import { useOnClickOutside } from "../../../utils/hooks/useOnClickOutside";

interface listItemType {
  id: number;
  href: string;
  pageTitle: string;
}

interface NavBarProps {
  toggleNav: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const NavBar: FC<NavBarProps> = ({ setOpen, open, toggleNav }) => {
  const linkPageList = [
    { id: 1, href: "/", pageTitle: "Home" },
    { id: 2, href: "/destination", pageTitle: "Destination" },
    { id: 3, href: "/crew", pageTitle: "Crew" },
    { id: 4, href: "/technology", pageTitle: "Technology" },
  ];
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));
  return (
    <StyledMenu open={open} ref={node}>
      <LinkItems
        items={linkPageList}
        renderItem={(listItem) => (
          <PageList listItem={listItem} toggleNav={toggleNav} />
        )}
      />
    </StyledMenu>
  );
};

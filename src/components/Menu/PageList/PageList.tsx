import { FC } from "react";
import { StyledLink, StyledList } from "./PageList.style";

interface listItemType {
  id: number;
  href: string;
  pageTitle: string;
}

interface PageListProps {
  listItem: listItemType;
  toggleNav: () => void;
}

export const PageList: FC<PageListProps> = ({ listItem, toggleNav }) => {
  return (
    <StyledList key={listItem.id} className="fontBarlowCondensed">
      <StyledLink key={listItem.id} href={listItem.href} onClick={toggleNav}>
        {listItem.pageTitle}
      </StyledLink>
    </StyledList>
  );
};

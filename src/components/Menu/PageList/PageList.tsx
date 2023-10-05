import { FC } from "react";
import { StyledLink, StyledList } from "./PageList.style";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <StyledList key={listItem.id} className="fontBarlowCondensed">
      <StyledLink
        key={listItem.id}
        href={listItem.href}
        aria-current={listItem.href === pathname ? "page" : undefined}
        onClick={toggleNav}
      >
        {listItem.pageTitle}
      </StyledLink>
    </StyledList>
  );
};

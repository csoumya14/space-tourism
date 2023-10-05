"use client";
import { SubText } from "./PageTitle.style";
import { FC } from "react";

interface PageTitleProps {
  pageNumber: string;
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ pageNumber, title }) => {
  return (
    <SubText textLevel={"p"} className="fontBarlowCondensed">
      <span>{pageNumber}</span> {title}
    </SubText>
  );
};

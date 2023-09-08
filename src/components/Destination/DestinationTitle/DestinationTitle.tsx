"use client";
import { SubText } from "./DestinationTitle.style";
import { FC } from "react";

interface DestinationProps {}

export const DestinationTitle: FC<DestinationProps> = () => {
  return (
    <SubText textLevel={"p"} className="fontBarlowCondensed">
      <span>01</span> Pick your destination
    </SubText>
  );
};

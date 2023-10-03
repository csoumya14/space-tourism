"use client";
import React, { FC, useState } from "react";
import {
  StyledTab,
  StyledTabs,
  StyledTabList,
  StyledTitle,
  StyledRole,
  StyledDescription,
  StyledTabPanel,
  StyledTabImage,
  StyledTabWrapper,
} from "./CrewTabs.style";
import { CrewType } from "@/types/displayData";

interface CrewTabsProps {
  crewData: CrewType[];
}

export const CrewTabs: FC<CrewTabsProps> = ({ crewData }) => {
  const firstTabItemTitle = crewData[0].name;
  const findImagePath = (imageSrc: string): string => {
    const lastPartOfImagePath = imageSrc.substring(
      imageSrc.lastIndexOf("/") + 1
    );
    return `/crew/${lastPartOfImagePath}`;
  };

  return (
    <StyledTabs defaultSelectedTab={firstTabItemTitle}>
      {crewData.map((item) => (
        <StyledTabImage
          key={item.name}
          tab={item.name}
          altText="picture of the crew member"
          imageSrc={findImagePath(item.images.png)}
        />
      ))}
      <StyledTabWrapper>
        <StyledTabList aria-label="jser tabs">
          {crewData.map((item) => (
            <StyledTab key={item.name} tab={item.name} />
          ))}
        </StyledTabList>
        {crewData.map((item) => (
          <StyledTabPanel key={item.name} tab={item.name}>
            <StyledRole className="fontBellefair" textLevel={"p"}>
              {item.role}
            </StyledRole>
            <StyledTitle className="fontBellefair" textLevel={"h3"}>
              {item.name}
            </StyledTitle>
            <StyledDescription textLevel={"p"} className="fontBarlow">
              {item.bio}
            </StyledDescription>
          </StyledTabPanel>
        ))}
      </StyledTabWrapper>
    </StyledTabs>
  );
};

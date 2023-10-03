"use client";
import React, { FC } from "react";
import {
  StyledTab,
  StyledTabs,
  StyledTabList,
  StyledTitle,
  StyledDescription,
  StyledTabPanel,
  StyledTabImage,
  StyledSubTitle,
  StyledTabWrapper,
} from "./TechnologyTabs.style";
import { TechnologyType } from "@/types/displayData";
import { useViewPort } from "@/hooks/customViewPort";

interface CrewTabsProps {
  technologyData: TechnologyType[];
}

export const TechnologyTabs: FC<CrewTabsProps> = ({ technologyData }) => {
  function getIndex(name: string) {
    return technologyData.findIndex((obj) => obj.name === name) + 1;
  }
  const [width] = useViewPort();
  const breakPoint = 990;
  const firstTabItemTitle = technologyData[0].name;
  const findImagePath = (imageSrc: string): string => {
    const lastPartOfImagePath = imageSrc.substring(
      imageSrc.lastIndexOf("/") + 1
    );
    return `/technology/${lastPartOfImagePath}`;
  };

  return (
    <StyledTabs defaultSelectedTab={firstTabItemTitle}>
      {technologyData.map((item) => (
        <StyledTabImage
          key={item.name}
          tab={item.name}
          altText="picture of the crew member"
          imageSrc={
            width < breakPoint
              ? findImagePath(item.images.landscape)
              : findImagePath(item.images.portrait)
          }
        />
      ))}
      <StyledTabWrapper>
        <StyledTabList aria-label="jser tabs">
          {technologyData.map((item) => (
            <StyledTab key={item.name} tab={item.name}>
              <span className="fontBarlowCondensed">{getIndex(item.name)}</span>
            </StyledTab>
          ))}
        </StyledTabList>
        {technologyData.map((item) => (
          <StyledTabPanel key={item.name} tab={item.name}>
            <StyledSubTitle textLevel={"p"} className="fontBellefair">
              The terminology ...
            </StyledSubTitle>
            <StyledTitle className="fontBellefair" textLevel={"h3"}>
              {item.name}
            </StyledTitle>
            <StyledDescription textLevel={"p"} className="fontBarlow">
              {item.description}
            </StyledDescription>
          </StyledTabPanel>
        ))}
      </StyledTabWrapper>
    </StyledTabs>
  );
};

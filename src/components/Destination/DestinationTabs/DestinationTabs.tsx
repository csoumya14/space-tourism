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
} from "./DestinationTabs.style";
import { DestinationType } from "@/types/displayData";
import { DescriptionList } from "../DescriptionList/DescriptionList";

interface DestinationTabsProps {
  destinationData: DestinationType[];
}

const DestinatonTabs: FC<DestinationTabsProps> = ({ destinationData }) => {
  const firstTabItemTitle = destinationData[0].name;

  const findImagePath = (imageSrc: string): string => {
    const lastPartOfImagePath = imageSrc.substring(
      imageSrc.lastIndexOf("/") + 1
    );
    return `/destination/${lastPartOfImagePath}`;
  };

  return (
    <StyledTabs defaultSelectedTab={firstTabItemTitle}>
      {destinationData.map((item) => (
        <StyledTabImage
          tab={item.name}
          key={item.name}
          altText="picture of the planet"
          imageSrc={findImagePath(item.images.png)}
        />
      ))}
      <StyledTabList aria-label="jser tabs">
        {destinationData.map((item) => (
          <StyledTab key={item.name} tab={item.name}>
            <span className="fontBarlowCondensed">{item.name}</span>
          </StyledTab>
        ))}
      </StyledTabList>
      {destinationData.map((item) => (
        <StyledTabPanel key={item.name} tab={item.name}>
          <StyledTitle className="fontBellefair" textLevel={"p"}>
            {item.name}
          </StyledTitle>
          <StyledDescription textLevel={"p"} className="fontBarlow">
            {item.description}
          </StyledDescription>
          <DescriptionList
            distance={item.distance}
            averageTravelTime={item.travel}
          />
        </StyledTabPanel>
      ))}
    </StyledTabs>
  );
};

export default DestinatonTabs;

"use client";
import React, { FC } from "react";
import {
  StyledDescriptionDetail,
  StyledDescriptionList,
  StyledDescriptionTerm,
} from "./DescriptionList.style";

interface DestinationListProps {
  distance: string;
  averageTravelTime: string;
}

export const DescriptionList: FC<DestinationListProps> = ({
  distance,
  averageTravelTime,
}) => {
  return (
    <StyledDescriptionList>
      <div>
        <StyledDescriptionTerm className="fontBarlowCondensed">
          Avg. Distance
        </StyledDescriptionTerm>
        <StyledDescriptionDetail className="fontBellefair">
          {distance}
        </StyledDescriptionDetail>
      </div>
      <div>
        <StyledDescriptionTerm className="fontBarlowCondensed">
          Est. Travel Time{" "}
        </StyledDescriptionTerm>
        <StyledDescriptionDetail className="fontBellefair">
          {averageTravelTime}
        </StyledDescriptionDetail>
      </div>
    </StyledDescriptionList>
  );
};

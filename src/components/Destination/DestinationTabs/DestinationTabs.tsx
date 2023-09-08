"use client";
import React, { FC, useCallback, useState } from "react";
import { TabHead, TabContainer, TabBody, Tab } from "./DestinationTabs.style";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface DestinationTabsProps {}

const DestinatonTabs: FC<DestinationTabsProps> = () => {
  const searchParams = useSearchParams()!;
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const isTabOne = searchParams.get("tab") === "1";
  const isTabTwo = searchParams.get("tab") === "2";
  return (
    <TabContainer>
      <TabHead>
        <Tab>
          <Link
            href={{
              pathname: "/destination",
              query: createQueryString("tab", "1"),
            }}
          >
            Tab 1
          </Link>
        </Tab>
        <Tab>
          <Link
            href={{
              pathname: "/destination",
              query: createQueryString("tab", "2"),
            }}
          >
            Tab 2
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment>This is tab one content</React.Fragment>}
        {isTabTwo && <React.Fragment>This is tab two content</React.Fragment>}
      </TabBody>
    </TabContainer>
  );
};

export default DestinatonTabs;

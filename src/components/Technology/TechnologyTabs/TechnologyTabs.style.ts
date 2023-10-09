import { Tab } from "@/components/TabBar/Tab/Tab";
import { TabList } from "@/components/TabBar/TabList/TabList";
import { Tabs } from "@/components/TabBar/Tabs/Tabs";
import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";
import { TabPanel } from "@/components/TabBar/TabPanel/TabPanel";
import { TabImage } from "@/components/TabBar/TabImage/TabImage";
import { DefaultTabStyle, DefaultTabWrapperStyle } from "@/styles/Shared.style";

export const StyledTabs = styled(DefaultTabStyle)`
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex-direction: row-reverse;
    height: calc(
      ${(props) => props.theme.height.tabSectionHeightLargeScreen}vh - 10vh
    );
    justify-content: space-between;
    padding: 0rem;
  }
`;
export const StyledTabImage = styled(TabImage)`
  flex: 2;
  position: relative;
  width: 100%;
  height: 100%;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex: 1;
  }
`;
export const StyledTabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledTabList = styled(TabList)`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const StyledTab = styled(Tab)`
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.primary.grey};
  color: ${(props) => props.theme.palette.primary.lightBlue};
  background: transparent;
  width: 40px;
  height: 40px;
  &[aria-selected="true"] {
    background: ${(props) => props.theme.palette.neutral.white};
    color: ${(props) => props.theme.palette.neutral.black};
  }
  &:hover {
    background: ${(props) => props.theme.palette.primary.grey};
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledSubTitle = styled(Banner)`
  opacity: 0.5;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const StyledTitle = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading3.smallScreen};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.heading3.bigScreen};
  }
`;

export const StyledDescription = styled(Banner)`
  text-align: center;
  padding-bottom: 2rem;
  line-height: 2;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex: 1;
    text-align: left;
  }
`;

export const StyledTabWrapper = styled(DefaultTabWrapperStyle)`
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex: 2;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex-direction: row;
    flex: 1;
  }
`;

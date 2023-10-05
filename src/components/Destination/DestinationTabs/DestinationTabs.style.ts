import { Tab } from "@/components/TabBar/Tab/Tab";
import { TabList } from "@/components/TabBar/TabList/TabList";
import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";
import { TabPanel } from "@/components/TabBar/TabPanel/TabPanel";
import { TabImage } from "@/components/TabBar/TabImage/TabImage";
import { DefaultTabStyle, DefaultTabWrapperStyle } from "@/styles/Shared.style";

export const StyledTabs = styled(DefaultTabStyle)`
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    padding: 0 5rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex-direction: row;
    height: calc(
      ${(props) => props.theme.height.tabSectionHeightLargeScreen}vh - 10vh
    );
    justify-content: space-between;
    padding: 0rem;
    gap: 5rem;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    align-items: flex-start;
  }
`;

export const StyledTabList = styled(TabList)`
  gap: 1rem;
`;
export const StyledTabImage = styled(TabImage)`
  position: relative;
  width: 100%;
  flex: 1;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    height: 100%;
  }
`;

export const StyledTab = styled(Tab)`
  text-transform: uppercase;
  letter-spacing: 2.7px;
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid transparent;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  &[aria-selected="true"] {
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.palette.primary.lightBlue};
  }
  &:hover {
    border-color: ${(props) => props.theme.palette.primary.grey};
  }
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    height: 2rem;
  }
`;

export const StyledTitle = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading2.smallScreen};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    font-size: ${(props) => props.theme.fontSizes.heading2.bigScreen};
  }
`;

export const StyledDescription = styled(Banner)`
  text-align: center;
  padding-bottom: 5rem;
  line-height: 23px;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.palette.primary.grey};
  height: ${(props) => props.theme.height.descriptionHeightSmallScreen}px;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    line-height: 26px;
    text-align: left;
    height: ${(props) => props.theme.height.descriptionHeightLargeScreen}px;
  }
`;

export const StyledTabWrapper = styled(DefaultTabWrapperStyle)`
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    align-items: flex-start;
  }
`;

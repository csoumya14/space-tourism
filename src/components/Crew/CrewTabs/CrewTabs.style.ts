import { Tab } from "@/components/TabBar/Tab/Tab";
import { TabList } from "@/components/TabBar/TabList/TabList";
import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";
import { TabPanel } from "@/components/TabBar/TabPanel/TabPanel";
import { TabImage } from "@/components/TabBar/TabImage/TabImage";
import { DefaultTabStyle, DefaultTabWrapperStyle } from "@/styles/Shared.style";

export const StyledTabs = styled(DefaultTabStyle)`
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;
export const StyledTabImage = styled(TabImage)`
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.palette.primary.grey};
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    border-color: transparent;
  }
`;
export const StyledTabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    align-items: flex-start;
  }
`;

export const StyledTabList = styled(TabList)`
  gap: 1rem;
`;

export const StyledTab = styled(Tab)`
  border-radius: 50%;
  border: none;
  background: ${(props) => props.theme.palette.primary.grey};
  width: 10px;
  height: 10px;
  &[aria-selected="true"] {
    background: ${(props) => props.theme.palette.neutral.white};
  }
  &:hover {
    background: ${(props) => props.theme.palette.primary.grey};
  }
`;

export const StyledRole = styled(Banner)`
  opacity: 0.5;
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    font-size: 24px;
  }
`;

export const StyledTitle = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading3.smallScreen};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    font-size: ${(props) => props.theme.fontSizes.heading3.bigScreen};
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const StyledDescription = styled(Banner)`
  text-align: center;
  padding-bottom: 2rem;
  line-height: 2;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    text-align: start;
    height: ${(props) => props.theme.height.descriptionHeightLargeScreen}px;
    width: 90%;
  }
`;

export const StyledTabWrapper = styled(DefaultTabWrapperStyle)`
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex-direction: column-reverse;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    align-items: flex-start;
  }
`;

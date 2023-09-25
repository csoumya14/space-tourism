import { Tab } from "@/components/TabBar/Tab/Tab";
import { TabList } from "@/components/TabBar/TabList/TabList";
import { Tabs } from "@/components/TabBar/Tabs/Tabs";
import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";
import { TabPanel } from "@/components/TabBar/TabPanel/TabPanel";
import { TabImage } from "@/components/TabBar/TabImage/TabImage";

export const StyledTabs = styled(Tabs)`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    padding: 0 2rem;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
`;

export const StyledTabList = styled(TabList)`
  gap: 1rem;
`;
export const StyledTabImage = styled(TabImage)`
  width: 100px;
  height: 100px;
  position: relative;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledTab = styled(Tab)`
  text-transform: uppercase;
  letter-spacing: 2.7px;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  &[aria-selected="true"] {
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.palette.primary.lightBlue};
  }
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    height: 2rem;
  }
`;

export const StyledTitle = styled(Banner)`
  font-size: 56px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    font-size: 80px;
  }
`;

export const StyledDescription = styled(Banner)`
  text-align: center;
  padding-bottom: 2rem;
  line-height: 28px;
  color: ${(props) => props.theme.palette.primary.lightBlue};
`;

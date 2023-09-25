import { Tab } from "@/components/TabBar/Tab/Tab";
import { TabList } from "@/components/TabBar/TabList/TabList";
import { Tabs } from "@/components/TabBar/Tabs/Tabs";
import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";
import { TabPanel } from "@/components/TabBar/TabPanel/TabPanel";
import { TabImage } from "@/components/TabBar/TabImage/TabImage";

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex-direction: column-reverse;
    justify-content: space-between;
    flex: 1;
  }
`;
export const StyledTabImage = styled(TabImage)`
  width: 100vw;
  flex: 200px 1 1;
  position: relative;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex: 400px 1 1;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    flex: 1 1 100%;
  }
`;
export const StyledTabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
`;

export const StyledTabList = styled(TabList)`
  gap: 1rem;
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
`;

export const StyledSubTitle = styled(Banner)`
  opacity: 0.5;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
`;

export const StyledTitle = styled(Banner)`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
`;

export const StyledDescription = styled(Banner)`
  text-align: center;
  padding-bottom: 2rem;
  line-height: 2;
  color: ${(props) => props.theme.palette.primary.lightBlue};
`;

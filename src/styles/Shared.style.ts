import { Tabs } from "@/components/TabBar/Tabs/Tabs";
import styled from "styled-components";

export const DefaultSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  align-items: center;
  padding: 4rem 2rem;
  gap: 1rem;
  min-width: 100vw;
  min-height: 100vh;
`;

export const DefaultTabStyle = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: ${(props) => props.theme.height.tabSectionHeightSmallScreen}vh;
`;

export const DefaultTabWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

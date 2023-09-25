import styled from "styled-components";
import mobileTechnologyCover from "../../../public/technology/background-technology-mobile.jpg";
import tabletTechnologyCover from "../../../public/technology/background-technology-tablet.jpg";
import desktopTechnologyCover from "../../../public/technology/background-technology-desktop.jpg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${mobileTechnologyCover.src}) no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  align-items: center;
  padding: 6rem 2rem;
  gap: 2rem;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background: url(${tabletTechnologyCover.src});
    padding: 6rem 2rem 0rem 2rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    background: url(${desktopTechnologyCover.src});
  }
`;

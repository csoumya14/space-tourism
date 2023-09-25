import styled from "styled-components";
import mobileCrewCover from "../../../public/crew/background-crew-mobile.jpg";
import tabletCrewCover from "../../../public/crew/background-crew-tablet.jpg";
import desktopCrewCover from "../../../public/crew/background-crew-desktop.jpg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url(${mobileCrewCover.src});
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
    background-image: url(${tabletCrewCover.src});
    padding: 6rem 2rem 0rem 2rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    background-image: url(${desktopCrewCover.src});
  }
`;

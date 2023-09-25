import styled from "styled-components";
import mobileDestinationCover from "../../../public/destination/background-destination-mobile.jpg";
import tabletDestinationCover from "../../../public/destination/background-destination-tablet.jpg";
import desktopDestinationCover from "../../../public/destination/background-destination-desktop.jpg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url(${mobileDestinationCover.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  align-items: center;
  padding: 6rem 2rem;
  gap: 2rem;
  min-height: 100vh;
  min-width: 100vw;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background-image: url(${tabletDestinationCover.src});
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    background-image: url(${desktopDestinationCover.src});
  }
`;

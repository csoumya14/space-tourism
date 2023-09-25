import styled from "styled-components";
import mobileHomeCover from "../../../public/home/background-home-mobile.jpg";
import tabletHomeCover from "../../../public/home/background-home-tablet.jpg";
import desktopHomeCover from "../../../public/home/background-home-desktop.jpg";

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  background-image: url(${mobileHomeCover.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  align-items: center;
  padding: 6rem 2rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background-image: url(${tabletHomeCover.src});
    justify-content: space-around;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    background-image: url(${desktopHomeCover.src});
    justify-content: space-around;
  }
`;

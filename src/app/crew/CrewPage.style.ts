import styled from "styled-components";
import mobileCrewCover from "../../../public/crew/background-crew-mobile.jpg";
import tabletCrewCover from "../../../public/crew/background-crew-tablet.jpg";
import desktopCrewCover from "../../../public/crew/background-crew-desktop.jpg";
import { DefaultSectionStyle } from "@/styles/Shared.style";

export const Section = styled(DefaultSectionStyle)`
  background-image: url(${mobileCrewCover.src});
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background-image: url(${tabletCrewCover.src});
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    background-image: url(${desktopCrewCover.src});
    padding:5rem 4rem;
`;

import styled from "styled-components";
import mobileDestinationCover from "../../../public/destination/background-destination-mobile.jpg";
import tabletDestinationCover from "../../../public/destination/background-destination-tablet.jpg";
import desktopDestinationCover from "../../../public/destination/background-destination-desktop.jpg";
import { DefaultSectionStyle } from "@/styles/Shared.style";

export const Section = styled(DefaultSectionStyle)`
  background-image: url(${mobileDestinationCover.src});
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background-image: url(${tabletDestinationCover.src});
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    background-image: url(${desktopDestinationCover.src});
    padding: 5rem 4rem;
  }
`;

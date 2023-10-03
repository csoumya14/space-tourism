import styled from "styled-components";
import mobileTechnologyCover from "../../../public/technology/background-technology-mobile.jpg";
import tabletTechnologyCover from "../../../public/technology/background-technology-tablet.jpg";
import desktopTechnologyCover from "../../../public/technology/background-technology-desktop.jpg";
import { DefaultSectionStyle } from "@/styles/Shared.style";

export const Section = styled(DefaultSectionStyle)`
  background-image: url(${mobileTechnologyCover.src});
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background: url(${tabletTechnologyCover.src});
  }
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    background: url(${desktopTechnologyCover.src});
    padding: 5rem 4rem;
  }
`;

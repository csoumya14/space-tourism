import styled from "styled-components";
import mobileHomeCover from "../../../public/home/background-home-mobile.jpg";
import tabletHomeCover from "../../../public/home/background-home-tablet.jpg";
import desktopHomeCover from "../../../public/home/background-home-desktop.jpg";
import { DefaultSectionStyle } from "@/styles/Shared.style";
import { Button } from "@/components/Button/Button";

export const Section = styled(DefaultSectionStyle)`
  background-image: url(${mobileHomeCover.src});
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background-image: url(${tabletHomeCover.src});
    justify-content: center;
    gap: 3rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    background-image: url(${desktopHomeCover.src});
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const ExploreButton = styled(Button)`
  align-self: center;
  text-transform: uppercase;
  width: 150px;
  height: 150px;
  font-size: 20px;
  letter-spacing: 1.25px;
  -webkit-transition: box-shadow 0.2s ease;
  -moz-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 50%;
  display: inline-block;
  &:hover {
    box-shadow: 0 0 0 17px #979797;
    &:before {
      -webkit-transform: scale(0.925);
      -moz-transform: scale(0.925);
      -ms-transform: scale(0.925);
      -o-transform: scale(0.925);
      transform: scale(0.925);
      box-shadow: 0 0 0 1px #979797;
      opacity: 0.5;
    }
  }

  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    width: 250px;
    height: 250px;
    font-size: 32px;
  }
`;

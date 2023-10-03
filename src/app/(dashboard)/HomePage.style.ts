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
  &::before {
    content: "";
    width: 450px;
    height: 450px;
    background-color:red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.6s ease-in-out;
    z-index: -1;
    }
    &:hover {
      &::before {
        opacity: 0.7;
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

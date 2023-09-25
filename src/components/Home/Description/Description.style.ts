import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";
import mobileHomeCover from "../../../../public/background-home-mobile.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    width: 60%;
  }
`;

export const MainHeading = styled(Banner)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.neutral.white};
  font-size: 80px;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    font-size: 150px;
  }
`;

export const SubText = styled(Banner)`
  text-transform: uppercase;
  letter-spacing: 2.7px;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  font-size: 20px;
`;

export const DescriptionText = styled(Banner)`
  line-height: 2;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  text-align: center;
`;

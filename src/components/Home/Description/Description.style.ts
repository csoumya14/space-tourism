import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";
import mobileHomeCover from "../../../../public/background-home-mobile.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${mobileHomeCover.src}) no-repeat;
  background-size: "cover",
  gap: 1rem;
  align-items: center;
`;

export const MainHeading = styled(Banner)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.neutral.white};
  font-size: 80px;
`;

export const SubText = styled(Banner)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.lightBlue};
`;

export const DescriptionText = styled(Banner)`
  font-size: 15px;
  line-height: 1.5;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  text-align: center;
`;

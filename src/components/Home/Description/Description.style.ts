import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    width: 60%;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    align-items: flex-start;
    gap: 0rem;
    width: 40%;
  }
`;

export const MainHeading = styled(Banner)`
  text-transform: uppercase;
  padding: 0rem;
  color: ${(props) => props.theme.palette.neutral.white};
  font-size: ${(props) => props.theme.fontSizes.heading1.smallScreen};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    font-size: ${(props) => props.theme.fontSizes.heading1.bigScreen};
  }
`;

export const SubText = styled(Banner)`
  text-transform: uppercase;
  padding: 0;
  letter-spacing: 2.7px;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  font-size: 20px;
`;

export const DescriptionText = styled(Banner)`
  line-height: 2;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  text-align: center;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

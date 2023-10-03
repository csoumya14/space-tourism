import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const SubText = styled(Banner)`
  text-transform: uppercase;
  letter-spacing: 2.7px;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  font-size: ${(props) => props.theme.fontSizes.heading5.smallScreen};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    align-self: flex-start;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    font-size: ${(props) => props.theme.fontSizes.heading5.bigScreen};
    letter-spacing: 4.72px;
  }
`;

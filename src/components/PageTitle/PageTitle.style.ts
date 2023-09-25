import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const SubText = styled(Banner)`
  text-transform: uppercase;
  letter-spacing: 2.7px;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    align-self: flex-start;
  }
`;

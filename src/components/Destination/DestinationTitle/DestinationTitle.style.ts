import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const SubText = styled(Banner)`
  text-transform: uppercase;
  letter-spacing: 2.7px;
  color: ${(props) => props.theme.palette.primary.lightBlue};
`;

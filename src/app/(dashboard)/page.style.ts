import styled from "styled-components";
import { Button } from "@/components/Button/Button";

export const ExploreButton = styled(Button)`
  align-self: center;
  text-transform: uppercase;
  width: 150px;
  height: 150px;
  font-size: 20px;
  letter-spacing: 1.25px;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    width: 200px;
    height: 200px;
  }
`;

export const Wrapper = styled.div``;

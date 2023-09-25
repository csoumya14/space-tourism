import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.neutral.black};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background-color: transparent;
  }
`;

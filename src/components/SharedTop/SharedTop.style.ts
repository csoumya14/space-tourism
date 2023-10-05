import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  padding: 1rem;
  background-color: transparent;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    background-color: transparent;
    padding-left: 2.5rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    margin-top: 1rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
    &::after {
      content: "";
      position: absolute;
      width: calc(96vw - ${(props) => props.theme.width.navBarWidth}px);
      z-index: 99;
      height: 1px;
      background-color: white;
      left: 100px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.ol`
  display: flex;
  flex-direction: column;
  counter-reset: css-counter -1;
  margin-top: 10rem;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex-direction: row;
    margin-top: 0rem;
  }
`;

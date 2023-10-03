import styled from "styled-components";

export const StyledDescriptionList = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;

  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
`;

export const StyledDescriptionTerm = styled.dt`
  text-transform: uppercase;
  letter-spacing: 2.36px;
  font-size: 14px;
  color: ${(props) => props.theme.palette.primary.lightBlue};
`;

export const StyledDescriptionDetail = styled.dd`
  text-transform: uppercase;
  font-size: 28px;
  padding: 1rem 0rem;
  color: ${(props) => props.theme.palette.neutral.white};
`;

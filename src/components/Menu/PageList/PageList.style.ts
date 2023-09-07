import Link from "next/link";
import styled from "styled-components";

export const StyledList = styled.li`
  text-transform: uppercase;
  counter-increment: css-counter 1;
  margin-bottom: 10px;
  font-weight: normal;
  list-style-type: none;

  &:before {
    content: "0" counter(css-counter);
    margin-right: 5px;
    font-weight: bold;
    color: ${(props) => props.theme.palette.neutral.white};
    padding: 3px 8px;
    border-radius: 15px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.lightBlue};
`;

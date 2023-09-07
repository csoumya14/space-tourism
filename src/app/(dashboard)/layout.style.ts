import styled from "styled-components";
import mobileHomeCover from "../../../public/background-home-mobile.jpg";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${mobileHomeCover.src}) no-repeat;
  background-size: "cover",
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
`;

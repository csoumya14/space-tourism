import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 55vw;
  position: fixed;
  background: rgba(11, 13, 23, 0.7);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;
import styled, { keyframes } from "styled-components";

const moveGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GradientLine = styled.div`
  width: 100%;
  height: 6px;
  background: linear-gradient(
    90deg,
    #db7480 0%,
    #2c45ff 37.5%,
    #4b8e5a 75%,
    #ca34e8 100%
  );
  background-size: 300% 300%;
  animation: ${moveGradient} 5s ease infinite;
`;

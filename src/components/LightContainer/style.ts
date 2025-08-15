import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  padding: 1.5rem;
  background-color: #e4ebf5;
  clip-path: shape(
    from 82.71% 89.21%,
    curve to 76.04% 100% with 81.43% 95.83%/78.85% 100%,
    hline to 0%,
    vline to 19.83%,
    curve to 7.5% 0% with 0% 0%/3.36% 0%,
    hline to 100%,
    line to 82.71% 89.21%,
    close
  );

  &::before {
    content: "";
    position: absolute;
    top: -3%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: #fbfbfb;
    clip-path: shape(
      from 82.71% 89.21%,
      curve to 76.04% 100% with 81.43% 95.83%/78.85% 100%,
      hline to 0%,
      vline to 19.83%,
      curve to 7.5% 0% with 0% 0%/3.36% 0%,
      hline to 100%,
      line to 82.71% 89.21%,
      close
    );
    transform: scale(0.95);
  }
`;

interface CircleProps {
  size?: number; // tamanho do círculo externo
  innerSize?: number; // tamanho do círculo interno (::after)
  innerBackground?: string; // cor ou gradiente do círculo interno
}

export const Circle = styled.div<CircleProps>`
  width: ${({ size = 60 }) => `${size}px`};
  height: ${({ size = 60 }) => `${size}px`};
  background: #eff5ff; /* cor de fundo externa */
  border-radius: 50%;
  position: relative; /* necessário para posicionar o ::after */
  box-shadow: 5px 5px 20px 0#cfcfd9;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ innerSize = 48 }) => `${innerSize}px`};
    height: ${({ innerSize = 48 }) => `${innerSize}px`};
    background: ${({
      innerBackground = "linear-gradient(to bottom, #89cff0, #0099cc)",
    }) => innerBackground};
    border-radius: 50%;
  }
`;

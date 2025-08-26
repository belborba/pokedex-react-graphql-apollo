import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1.5rem;
`;

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
    from 82.71% 88%,
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
    top: -1%;
    left: -3%;
    width: 104%;
    height: 100%;
    background-color: #fff;
    clip-path: shape(
      from 82.71% 88%,
      curve to 76.04% 100% with 81.43% 95.83%/78.85% 100%,
      hline to 0%,
      vline to 19.83%,
      curve to 7.5% 0% with 0% 0%/3.36% 0%,
      hline to 99%,
      line to 82.71% 89.21%,
      close
    );
    transform: scale(0.98);
  }
`;

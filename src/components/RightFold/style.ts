import styled from "styled-components";

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  gap: 1.2rem;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  /* Estilização da scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 190, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(148, 163, 190, 0.5);
  }
`;

export const DisplayWrap = styled.div`
  position: relative;
`;

export const BigScreen = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 24px;
  border: 5px solid #fff;
  background: #e6edfa;
  box-shadow: 3px 3px 16px 0 #94a3be inset, 0px 0px 4px rgba(194, 207, 230, 0.5);
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const Title = styled.h3`
  background: #ffffff;
  width: fit-content;
  border-radius: 24px 0px 100px 0px;
  padding: 8px 24px 8px 10px;
  font-size: 16px;
  color: #333;
  margin: 0;
  box-shadow: 7px 7px 10px rgba(148, 163, 190, 0.5);
`;

export const Text = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  padding: 0rem 1rem;
`;

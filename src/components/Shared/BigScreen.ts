import styled from "styled-components";

interface BigScreenProps {
  height?: string; // "200px", "50vh", etc
}

export const DisplayWrap = styled.div`
  position: relative;
`;

export const BigScreen = styled.div<BigScreenProps>`
  position: relative;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 5px solid #fff;
  background: #f2f4f8;
  box-shadow: 3px 3px 16px 0 #bdc0c7 inset, 0px 0px 4px #bdc0c7;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  height: ${(props) => props.height || "auto"};

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

export const Title = styled.h3`
  position: absolute;
  background: #ffffff;
  width: fit-content;
  border-radius: 24px 0px 100px 0px;
  padding: 8px 24px 8px 10px;
  font-size: 16px;
  color: #333;
  margin: 0;
  box-shadow: 7px 7px 10px rgba(148, 163, 190, 0.5);
`;

export const Content = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  padding: 0rem 1rem;
`;

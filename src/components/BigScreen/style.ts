import styled from "styled-components";

interface BigScreenProps {
  $height?: string;
}

export const BigScreenContainer = styled.div<BigScreenProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 5px solid #fff;
  background: #f2f4f8;
  box-shadow: 3px 3px 16px 0 #bdc0c7 inset, 0px 0px 4px #bdc0c7;
  height: ${(props) => props.$height || "auto"};

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
  left: 0;
  top: 0;
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
  margin-top: 20px;
  padding: 20px;
  font-size: 14px;
  max-width: 100%;
`;

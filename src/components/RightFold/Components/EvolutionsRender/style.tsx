import styled from "styled-components";

type ContainerProps = {
  $count: number;
};

export const Container = styled.div<ContainerProps>`
  width: 95%;
  display: flex;
  gap: 1rem;
  justify-content: ${(props) => (props.$count <= 3 ? "center" : "flex-start")};
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 70px;
    height: 70px;
  }

  span {
    font-size: 14px;
    color: #333;
  }
`;

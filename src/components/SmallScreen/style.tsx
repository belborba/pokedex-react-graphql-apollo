import styled from "styled-components";

interface ContainerProps {
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 5px solid #fff;
  background: #e6edfa;
  box-shadow: 3px 3px 16px 0 rgba(148, 163, 190, 0.83) inset;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  width: ${({ width }) => width || "auto"};
  white-space: nowrap; /* evita quebrar o texto em várias linhas */
  gap: 8px; /* espaçamento entre texto e imagem */
  img {
    display: block;
    height: auto;
    width: 20px;
  }
`;

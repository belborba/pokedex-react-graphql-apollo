import styled from "styled-components";

interface SmallScreenProps {
  width?: string;
}

export const SmallScreen = styled.div<SmallScreenProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 5px solid #fff;
  background: #e6edfa;
  box-shadow: 3px 3px 16px 0 #94a3be inset, 0px 0px 4px rgba(194, 207, 230, 0.5);
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

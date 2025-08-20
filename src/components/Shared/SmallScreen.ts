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
  background: #f2f4f8;
  box-shadow: 3px 3px 16px 0 #bdc0c7 inset, 0px 0px 4px #bdc0c7;
  font-size: 16px;
  color: #333;
  white-space: wrap;
  width: ${(props) => props.width || "auto"};
  height: 24px;

  img {
    display: block;
    height: auto;
    width: 20px;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-top: -5px;
    width: 90px;
    height: 90px;
    object-fit: contain;
  }

  span {
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
  }
`;

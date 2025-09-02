import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #333;
  min-width: 60px;
`;

export const BarContainer = styled.div`
  width: 90%;
  height: 8px;
  background: #e6edfa;
  border-radius: 50px;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: inset 2px 2px 6px rgba(148, 163, 190, 0.5);
`;

export const BarFill = styled.div<{
  $value: number;
  $start: string;
  $end: string;
}>`
  height: 100%;
  width: ${({ $value }) => $value}%;
  background: linear-gradient(
    90deg,
    ${({ $start }) => $start},
    ${({ $end }) => $end}
  );
  border-radius: 50px;
  transition: width 0.8s ease-in-out;
`;

export const Value = styled.span`
  font-size: 14px;
  color: #333;
  min-width: 30px;
  text-align: right;
`;

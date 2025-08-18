import styled from "styled-components";
import { Card } from "@/components/Card";

export const StyledCard = styled(Card)`
  border-bottom-right-radius: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 680px;
  width: 420px;
`;

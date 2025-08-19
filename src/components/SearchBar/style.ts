import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { SmallScreen } from "../Shared/SmallScreen";

export const ContainerWrap = styled.div<PropsWithChildren>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

export const SearchInput = styled(SmallScreen).attrs({ as: "input" })`
  width: 100%;
  padding: 20px 0px 20px 20px;
  box-shadow: 3px 3px 16px 0 #94a3be inset, 0px 0px 4px rgba(194, 207, 230, 0.5);
  outline: none;

  &::placeholder {
    color: #666;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(to right, #89cff0, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    fill: #fff;
  }

  &:hover {
    opacity: 0.9;
  }
`;

import { SmallScreen } from "@/components/Shared/SmallScreen";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

export const ContainerWrap = styled.div<PropsWithChildren>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled(SmallScreen).attrs({ as: "input" })`
  padding: 15px 0px 15px 20px;
  outline: none;
  width: 300px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(to right, #89cff0, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Content = styled.p`
  font-size: 14px;
  margin: -10px;
  color: #707070;
`;

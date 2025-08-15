import type { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { Container } from "./style";

type CardProps = PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>;

export const Card: React.FC<CardProps> = ({ children, ...attrs }) => {
  return <Container {...attrs}>{children}</Container>;
};

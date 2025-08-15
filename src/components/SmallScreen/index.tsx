import type { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { Container } from "./style";

type SmallScreenProps = PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>;

export const SmallScreen: React.FC<SmallScreenProps> = ({
  children,
  ...attrs
}) => {
  return <Container {...attrs}>{children}</Container>;
};

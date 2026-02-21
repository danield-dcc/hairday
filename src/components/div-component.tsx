import type { ComponentProps, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

interface DivProps extends ComponentProps<"div"> {
  asChild?: boolean;
  children?: ReactNode;
}

export function DivComponent({ asChild, children, ...props }: DivProps) {
  const Component = asChild ? Slot : "div";
  return <Component {...props}>{children}</Component>;
}

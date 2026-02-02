import { cva, type VariantProps } from "class-variance-authority";
import { createElement, type ComponentProps, type JSX } from "react";

export const ContainerVariants = cva("", {
  variants: {
    size: {
      md: "max-w-360",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends VariantProps<typeof ContainerVariants>, ComponentProps<"div"> {
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({
  as = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return createElement(
    as,
    {
      className: ContainerVariants({ size: "md", className }),
      ...props,
    },
    children,
  );
}

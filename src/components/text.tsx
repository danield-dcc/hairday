import { cva, type VariantProps } from "class-variance-authority";
import { createElement, type ReactNode, type JSX } from "react";

export const textVariants = cva("font-sans text-gray-500", {
  variants: {
    variant: {
      "title-lg": "text-[32px] leading-6 font-bold",
      "title-md": "text-base leading-6 font-bold",
      "title-sm": "text-sm leading-5 font-bold",
      "body-md": "text-base leading-6 font-normal",
      "body-sm": "text-sm leading-5 font-normal",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}

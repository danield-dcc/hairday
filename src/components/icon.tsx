import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export const iconVariants = cva("fill-white", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconsProps
  extends ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconsProps) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}

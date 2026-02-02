import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import Text from "./text";

export const timeSelectVariants = cva(
  "inline-flex items-center justify-center rounded-lg bg-gray-600 border border-gray-500 group ",
  {
    variants: {
      variant: {
        primary: "hover:border-none hover:bg-gray-500 ",
        select: "border-yellow-base",
      },
      size: {
        md: "min-w-19.5 h-10 p-1",
      },
      disabled: {
        true: "bg-transparent border-gray-600 pointer-events-none ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const timeSelectVariantsText = cva("", {
  variants: {
    variant: {
      primary: "text-gray-200 ",
      select: "text-yellow-base",
    },
    disabled: {
      true: "text-gray-500",
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
  },
});

interface TimeSelectProps
  extends
    Omit<ComponentProps<"div">, "disabled">,
    VariantProps<typeof timeSelectVariants> {}

export default function TimeSelect({
  variant,
  size,
  className,
  disabled,
  children,
  ...props
}: TimeSelectProps) {
  return (
    <div
      className={timeSelectVariants({ variant, size, className, disabled })}
      {...props}
    >
      <Text
        className={timeSelectVariantsText({ variant, className, disabled })}
        {...props}
      >
        {children}
      </Text>
    </div>
  );
}

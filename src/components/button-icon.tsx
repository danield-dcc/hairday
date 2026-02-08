import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import type { ComponentProps } from "react";

export const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        primary: "",
      },
      size: {
        sm: "min-w-4 min-h-4",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
      handling: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
      handling: false,
    },
  },
);

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-yellow-base group-hover:fill-yellow-dark",
    },
    size: {
      sm: "w-full h-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonIconProps
  extends
    Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon: ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
  handling?: boolean;
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  handling,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({
        variant,
        size,
        disabled,
        className,
        handling,
      })}
      {...props}
    >
      <Icon
        svg={icon}
        animate={handling}
        className={buttonIconIconVariants({
          variant,
          size,
        })}
      />
    </button>
  );
}

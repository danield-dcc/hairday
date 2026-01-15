import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-yellow-base hover:border-2 border-yellow-light",
      },
      size: {
        md: "h-14 w-84.5",
      },
      disabled: {
        true: "bg-yellow-dark opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-900",
    },
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  children,
  variant,
  size,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        className,
      })}
      {...props}
    >
      <Text variant="title-md" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import Icon from "./icon";

export const inputTextContainerVariants = cva("flex flex-col gap-1");

export const inputTextWrapperVariants = cva(
  "border border-solid border-gray-500 focus-within:border-yellow-base bg-transparent rounded flex items-center gap-3",
  {
    variants: {
      variant: {
        primary: "",
      },
      size: {
        md: "w-full h-12 p-3",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const inputTextVariants = cva(
  "bg-transparent outline-none placeholder:text-gray-400 text-gray-200 flex-1 w-full",
);

export const inputTextIconVariants = cva("fill-yellow-base", {
  variants: {
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputTextProps
  extends
    VariantProps<typeof inputTextWrapperVariants>,
    Omit<ComponentProps<"input">, "size" | "disabled"> {
  icon?: ComponentProps<typeof Icon>["svg"];
  error?: ReactNode;
}

export default function InputText({
  size,
  disabled,
  className,
  icon,
  error,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextContainerVariants({ className })}>
      <div className={inputTextWrapperVariants({ size, disabled })}>
        {icon && <Icon svg={icon} className={inputTextIconVariants()} />}
        <input
          className={inputTextVariants()}
          disabled={disabled as boolean}
          {...props}
        />
      </div>
      {error && (
        <span className="text-yellow-base font-bold">{error as string}</span>
      )}
    </div>
  );
}

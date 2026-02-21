import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { DivComponent } from "./div-component";

export const timeSelectVariants = cva(
  "inline-flex items-center justify-center rounded-lg bg-gray-600 border border-gray-500 ml-1.5 mb-2",
  {
    variants: {
      variant: {
        primary: "hover:border-none hover:bg-gray-500 cursor-pointer ",
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

interface Option {
  value: string;
  label: string;
  description?: string;
}

interface TimeSelectProps
  extends
    Omit<ComponentProps<"div">, "disabled">,
    VariantProps<typeof timeSelectVariants> {
  name: string;
  options: Option[];
}

export default function TimeSelect({
  options,
  name,
  variant,
  size,
  className,
  disabled,
  children,
  ...props
}: TimeSelectProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selected = watch(name);
  const error = errors[name];

  return (
    <div>
      {options?.map((option) => (
        <DivComponent
          key={option.value}
          className={timeSelectVariants({
            variant: `${selected === option.value ? "select" : "primary"}`,
            size,
            className,
            disabled,
          })}
          asChild
          {...props}
        >
          <label
            key={option.value}
            className={timeSelectVariantsText({
              variant,
              className,
              disabled,
            })}
          >
            <input
              type="radio"
              value={option.value}
              className="hidden"
              {...register(name)}
            />
            <strong>{option.label}</strong>
          </label>
        </DivComponent>
      ))}

      <div>
        {error && (
          <span className="text-yellow-base font-bold">
            {error.message as string}
          </span>
        )}
      </div>
    </div>
  );
}

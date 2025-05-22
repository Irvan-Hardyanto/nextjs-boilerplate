import React from "react";
import { cva, VariantProps } from "class-variance-authority";
const buttonClassName = cva("flex items-center cursor-pointer", {
  variants: {
    variant: {
      primary: [""],
      secondary: [""],
      tertiary: [""],
    },
    negative: {
      true: null,
      false: null,
    },
    size: {
      default: "",
      sm: "",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      negative: true,
      class: [""],
    },
    {
      variant: "secondary",
      negative: true,
      class: [""],
    },
    {
      variant: "tertiary",
      negative: true,
      class: [""],
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

type TButtonProps = {
  className?: string;
  negative?: boolean;
  label: string;
} & React.ComponentProps<"button"> &
  VariantProps<typeof buttonClassName>;

function Button({
  className,
  variant,
  size,
  negative,
  label,
  ...props
}: TButtonProps) {
  return (
    <button
      className={buttonClassName({
        variant,
        size,
        className,
        negative,
      })}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;

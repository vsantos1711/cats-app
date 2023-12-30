import React, { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";

const button = tv({
  base: "rounded-md hover:bg-gray-300 font-normal disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400",
  variants: {
    variant: {
      primary: "bg-blue-500 hover:bg-blue-600",
      secondary: "bg-emerald-500 hover:bg-emerald-600",
      tertiary: "bg-gray-500 hover:bg-gray-600",
      icon: "bg-transparent dark:hover:bg-gray-900 w-10 h-10 border",
    },
    size: {
      xs: "px-1 py-1 w-10 h-10",
      sm: "px-2 py-1 text-sm w-20",
      md: "px-4 py-2 text-base w-40 ",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };
type ButtonProps = AsChildProps<React.ButtonHTMLAttributes<HTMLButtonElement>> &
  VariantProps<typeof button> & {};

export default function Button({
  asChild = false,
  size,
  variant,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={button({ variant, size })} {...props} />;
}

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "",
        outlined: "border",
      },
      color: {
        primary: "",
        secondary: "",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "default",
        className: "bg-primary text-primary-foreground",
      },
      {
        color: "secondary",
        variant: "default",
        className: "bg-secondary text-secondary-foreground",
      },
      {
        color: "primary",
        variant: "outlined",
        className: "border-primary text-primary",
      },
      {
        color: "secondary",
        variant: "outlined",
        className: "border-secondary text-secondary",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "primary",
    },
  },
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, color, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

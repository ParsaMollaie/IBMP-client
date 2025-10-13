import { HTMLAttributes, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto  px-4", {
  variants: {
    size: {
      default: "max-w-7xl",
      sm1: "max-w-6xl",
    },
  },

  defaultVariants: {
    size: "default",
  },
});

const Container = ({
  className,
  children,
  size,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>>) => {
  return (
    <div {...rest} className={cn(containerVariants({ size, className }))}>
      {children}
    </div>
  );
};

export default Container;

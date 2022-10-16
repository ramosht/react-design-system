import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ size = "md", children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "bg-cyan-500 hover:bg-cyan-300 font-bold text-xs w-full transition-colors py-3 px-2 rounded text-gray-900 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
}

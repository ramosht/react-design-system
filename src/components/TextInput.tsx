import React, { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

function Root(props: TextInputProps) {
  return (
    <div className="flex h-12 items-center gap-4 px-4 w-full  py-2 bg-gray-800 rounded focus-within:ring-1 focus-within:ring-cyan-500">
      {props.children}
    </div>
  );
}

function Icon(props: TextInputProps) {
  return <Slot className="text-gray-400 text-xl">{props.children}</Slot>;
}

function Input(props: TextInputProps) {
  return (
    <input
      className="w-full flex-1 outline-none bg-transparent placeholder:text-gray-400 text-gray-100 text-xs"
      {...props}
    />
  );
}

Root.displayName = "TextInput.Root";
Icon.displayName = "TextInput.Icon";
Input.displayName = "TextInput.Input";

export const TextInput = {
  Root,
  Input,
  Icon,
};

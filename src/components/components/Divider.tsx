import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  className?: string;
}
export default function Divider({ className }: Props) {
  return <div className={twMerge("w-full h-1 bg-slate-600", className)}> </div>;
}

import { LinkProps } from "next/link";
import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps extends LinkProps {
  className?: string;
  children: string | ReactNode;
  target: HTMLAttributeAnchorTarget;
}

export default function LinkButton({
  children,
  className,
  target,
  ...props
}: LinkButtonProps) {
  return (
    <Link className={twMerge("p-4 rounded-sm px-3", className)} {...props}>
      {children}
    </Link>
  );
}

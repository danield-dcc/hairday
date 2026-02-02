import { cx } from "class-variance-authority";
import type React from "react";

interface MainContentProps extends React.ComponentProps<"main"> {}

export default function MainContent({
  children,
  className,
  ...props
}: MainContentProps) {
  return (
    <main className={cx("relative w-360 mx-auto", className)} {...props}>
      {children}
    </main>
  );
}

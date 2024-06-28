import { PropsWithChildren, ReactNode } from "react";

export const PageClientFrame = ({
  title,
  children,
}: PropsWithChildren<{
  title: ReactNode;
}>) => (
  <div className={"space-y-7"}>
    {title}
    <div className={"px-7"}>{children}</div>
  </div>
);

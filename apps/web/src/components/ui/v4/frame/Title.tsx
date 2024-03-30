import type { ReactNode } from "react";

export const Title = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={"flex w-full items-end space-x-5 border-b-2 border-gray-300"}
    >
      <div className={"text-3xl"}>{title}</div>
      {children}
    </div>
  );
};

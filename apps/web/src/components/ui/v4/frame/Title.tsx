import type { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={"flex w-full items-end space-x-5 border-b-2 border-gray-300"}
    >
      {children}
    </div>
  );
};

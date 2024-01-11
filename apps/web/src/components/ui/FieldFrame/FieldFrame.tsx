/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

export const FieldFrame = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className={"bg-gray-100 p-4 my-4 rounded"}>
    <div className={"text-gray-500"}>{title}</div>
    <div className={"text-xl ml-[1em]"}>{children}</div>
  </div>
);

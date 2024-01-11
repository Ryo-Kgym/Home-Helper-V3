/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

export const SelectPageLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className={"grid md:w-1/2 mx-auto w-[90%]"}>
    <div className={"text-2xl m-10"}>{title}</div>
    {children}
  </div>
);

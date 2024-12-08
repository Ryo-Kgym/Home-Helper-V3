/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Split } from "~/components/atoms/Split/index";

export const ResponsiveSwitcher = ({
  first: firstContents,
  second: originalSecond,
}: {
  first: React.ReactNode;
  second: React.ReactNode;
}) => {
  const First = () => <div className={"w-full p-1"}>{firstContents}</div>;
  const Second = () => <div className={"w-full p-1"}>{originalSecond}</div>;

  return (
    <div>
      <div className={"max-sm:hidden"}>
        <Split size={50} first={<First />} second={<Second />} />
      </div>
    </div>
  );
};

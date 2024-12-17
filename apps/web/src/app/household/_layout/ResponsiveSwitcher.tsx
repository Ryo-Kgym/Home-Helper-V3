import { ComponentProps } from "react";

import { Split } from "../../../components/ui/split/v5/Split";

export const ResponsiveSwitcher = ({
  first: firstContents,
  second: originalSecond,
  size = 50,
}: {
  size?: number;
} & Pick<ComponentProps<typeof Split>, "first" | "second">) => {
  const First = () => <div className={"w-full p-1"}>{firstContents}</div>;
  const Second = () => <div className={"w-full p-1"}>{originalSecond}</div>;

  return (
    <div>
      <div className={"max-sm:hidden"}>
        <Split size={size} first={<First />} second={<Second />} />
      </div>
    </div>
  );
};

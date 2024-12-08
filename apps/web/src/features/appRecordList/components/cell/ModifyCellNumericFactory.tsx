import type { ModifyCellFactoryChangeHandler } from "./cellFactoryChangeHandler";
import { NumberInput } from "~/components/ui/v4/textInput";

export const ModifyCellNumericFactory = ({
  value,
  changeHandler,
}: {
  value: string;
  changeHandler: ModifyCellFactoryChangeHandler;
}) => {
  const parsedValue = parseInt(value, 10) || "";

  return (
    <NumberInput
      label={""}
      value={parsedValue}
      setValue={(v) => changeHandler(v.toString())}
    />
  );
};

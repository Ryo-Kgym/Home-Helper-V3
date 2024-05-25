import { DateInput } from "@components/ui/v4/dateInput/DateInput";
import { FieldOptionsDate } from "@oneforall/domain/schema/appSchema";

import type { ModifyCellFactoryChangeHandler } from "./cellFactoryChangeHandler";

export const ModifyCellDateFactory = ({
  value,
  changeHandler,
}: {
  value: string;
  changeHandler: ModifyCellFactoryChangeHandler;
  options: FieldOptionsDate;
}) => {
  const formattedValue = value ? new Date(value) : null;
  const setValueHandler = (value: Date | null) => {
    if (value) {
      changeHandler(value.toISOString());
    }
  };

  return (
    <DateInput label={""} value={formattedValue} setValue={setValueHandler} />
  );
};

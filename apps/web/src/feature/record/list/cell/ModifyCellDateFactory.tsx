import type { FieldOptionsDate } from "@feature/app/schema";
import { DateInput } from "@components/ui/v4/dateInput/DateInput";

import type { ModifyCellFactoryChangeHandler } from "./cell-factory-change-handler";

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

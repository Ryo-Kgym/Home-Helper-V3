import type { FieldOptionsDate } from "@feature/app/schema";
import type { ModifyCellFactoryChangeHandler } from "@feature/record/list/cell/cell-factory-change-handler";
import { DateInput } from "@components/ui/v4/dateInput/DateInput";

export const AddCellDateFactory = ({
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

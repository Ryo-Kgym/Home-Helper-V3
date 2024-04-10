import { Select } from "@components/ui/v4/select";
import { useGetLookupOptions } from "@feature/record/list/cell/useGetLookupOptions";

import type { ModifyCellFactoryChangeHandler } from "@feature/record/list/cell/cell-factory-change-handler";
import type { FieldOptionsLookup } from "@oneforall/domain/schema";

export const ModifyCellLookupFactory = ({
  value,
  changeHandler,
  options,
}: {
  value: string;
  changeHandler: ModifyCellFactoryChangeHandler;
  options: FieldOptionsLookup;
}) => {
  const { lookupData } = useGetLookupOptions({ options });

  return (
    <Select
      label={""}
      value={value}
      setValue={(value) => {
        const label =
          lookupData.find((data) => data.value === value)?.label ?? "";
        changeHandler(value, { label });
      }}
      data={lookupData}
    />
  );
};

import type { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { RecordColumns } from "@oneforall/domain/schema/recordSchema";
import { useGetLookupOptions } from "features/appRecordList/client/useGetLookupOptions";

import { Select } from "~/components/ui/v4/select";
import { ModifyCellFactoryChangeHandler } from "./cellFactoryChangeHandler";

export const ModifyCellLookupFactory = ({
  value,
  changeHandler,
  options,
  columns,
}: {
  value: string;
  changeHandler: ModifyCellFactoryChangeHandler;
  options: FieldOptionsLookup;
  columns: RecordColumns;
}) => {
  const { lookupData } = useGetLookupOptions({ options, columns });

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

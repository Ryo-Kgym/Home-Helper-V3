import type { ModifyCellFactoryChangeHandler } from "@features/appRecordList/components/cell/cellFactoryChangeHandler";
import type { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { Select } from "@components/ui/v4/select";
import { Columns } from "@oneforall/domain/schema/recordSchema";
import { useGetLookupOptions } from "features/appRecordList/client/useGetLookupOptions";

export const ModifyCellLookupFactory = ({
  value,
  changeHandler,
  options,
  columns,
}: {
  value: string;
  changeHandler: ModifyCellFactoryChangeHandler;
  options: FieldOptionsLookup;
  columns: Columns;
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

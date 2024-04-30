import type { ModifyCellFactoryChangeHandler } from "@features/appRecordList/components/cell/cell-factory-change-handler";
import type { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { Select } from "@components/ui/v4/select";
import { useGetLookupOptions } from "@features/appRecordList/components/cell/useGetLookupOptions";

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

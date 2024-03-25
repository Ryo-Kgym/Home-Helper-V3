import type { FieldOptionsLookup } from "@feature/app/schema";
import { Select } from "@components/ui/v4/select";
import { useGetLookupOptions } from "@feature/record/list/cell/useGetLookupOptions";

export const AddCellLookupFactory = ({
  value,
  changeHandler,
  options,
}: {
  value: string;
  changeHandler: (value: string) => void;
  options: FieldOptionsLookup;
}) => {
  const { lookupData } = useGetLookupOptions({ options });

  return (
    <Select
      label={""}
      value={value}
      setValue={changeHandler}
      data={lookupData}
    />
  );
};

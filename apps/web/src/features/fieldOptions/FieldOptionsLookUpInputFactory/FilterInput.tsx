import { ComponentProps } from "react";
import Trash from "@components/ui/v4/icon/Trash";
import { Select } from "@components/ui/v4/select";
import { FilterValueSwitcher } from "@features/fieldOptions/FieldOptionsLookUpInputFactory/FilterValueSwitcher";
import { FieldOptionsLookupFilter } from "@oneforall/domain/schema/appSchema";
import { FilterComplexity } from "@oneforall/domain/schema/filterComplexitySchema";

/**
 * @package
 */
export const FilterInput = ({
  fieldListData,
  fieldId,
  setFieldId,
  filterType,
  setFilterType,
  value,
  setValue,
  complexity,
  setComplexity,
  deletable,
  deleteHandler,
}: {
  fieldListData: ComponentProps<typeof Select<string>>["data"];
  fieldId: string;
  setFieldId: (fieldId: string) => void;
  filterType: FieldOptionsLookupFilter["filterType"];
  setFilterType: (filterType: FieldOptionsLookupFilter["filterType"]) => void;
  value: string;
  setValue: (value: string) => void;
  complexity: FilterComplexity;
  setComplexity: (complexity: FilterComplexity) => void;
  deletable?: boolean;
  deleteHandler?: () => void;
}) => {
  const disabled = deletable;

  return (
    <div className={"flex items-center"}>
      <Select
        data={[
          {
            label: "かつ",
            value: "and",
          },
          {
            label: "または",
            value: "or",
          },
        ]}
        label={"かつ / または"}
        value={complexity}
        setValue={setComplexity}
        disabled={disabled}
      />
      <Select
        data={fieldListData}
        label={"絞りたいフィールド"}
        value={fieldId}
        setValue={setFieldId}
        disabled={disabled}
      />
      <Select
        data={Object.entries(filterTypeSelectOption).map(([value, label]) => ({
          value: value as FieldOptionsLookupFilter["filterType"],
          label,
        }))}
        label={"絞り方"}
        value={filterType}
        setValue={setFilterType}
        disabled={disabled}
      />
      <FilterValueSwitcher
        filterType={filterType}
        value={value}
        setValue={setValue}
        disabled={disabled}
      />
      {deletable && (
        <button className={"h-8 w-8 bg-inherit"} onClick={deleteHandler}>
          <Trash />
        </button>
      )}
    </div>
  );
};

const filterTypeSelectOption: Record<
  FieldOptionsLookupFilter["filterType"],
  string
> = {
  value: "値",
  field: "フィールド",
};

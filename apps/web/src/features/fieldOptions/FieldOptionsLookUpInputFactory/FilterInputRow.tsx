import { ComponentProps } from "react";
import { Trash } from "@components/ui/v4/icon/Trash";
import { Select } from "@components/ui/v4/select";
import { Table } from "@components/ui/v4/table";
import { FilterValueSwitcher } from "@features/fieldOptions/FieldOptionsLookUpInputFactory/FilterValueSwitcher";
import {
  FieldOptionsLookupFilter,
  Fields,
} from "@oneforall/domain/schema/appSchema";
import { FilterComplexity } from "@oneforall/domain/schema/filterComplexitySchema";

/**
 * @package
 */
export const FilterInputRow = ({
  index,
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
  fields,
}: {
  index: string;
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
  fields: Fields;
}) => {
  const disabled = deletable;

  return (
    <>
      <Table.BodyTd>{index}</Table.BodyTd>
      <Table.BodyTd>
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
          label={""}
          value={complexity}
          setValue={setComplexity}
          disabled={disabled}
        />
      </Table.BodyTd>
      <Table.BodyTd>
        <Select
          data={fieldListData}
          label={""}
          value={fieldId}
          setValue={setFieldId}
          disabled={disabled}
        />
      </Table.BodyTd>
      <Table.BodyTd>
        <Select
          data={Object.entries(filterTypeSelectOption).map(
            ([value, label]) => ({
              value: value as FieldOptionsLookupFilter["filterType"],
              label,
            }),
          )}
          label={""}
          value={filterType}
          setValue={setFilterType}
          disabled={disabled}
        />
      </Table.BodyTd>
      <Table.BodyTd>
        <FilterValueSwitcher
          filterType={filterType}
          value={value}
          setValue={setValue}
          disabled={disabled}
          field={fields[fieldId]}
        />
      </Table.BodyTd>
      <Table.BodyTd>
        {deletable && (
          <button className={"h-8 w-8 bg-inherit"} onClick={deleteHandler}>
            <Trash />
          </button>
        )}
      </Table.BodyTd>
    </>
  );
};

const filterTypeSelectOption: Record<
  FieldOptionsLookupFilter["filterType"],
  string
> = {
  value: "値",
  field: "フィールド",
};

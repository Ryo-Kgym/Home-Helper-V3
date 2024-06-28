import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { DateInput } from "@components/ui/v4/dateInput/DateInput";
import { Select } from "@components/ui/v4/select";
import { Table } from "@components/ui/v4/table";
import { NumberInput, TextInput } from "@components/ui/v4/textInput";
import { FilterComplexity } from "@oneforall/domain/schema/filter/filterComplexitySchema";
import { FilterOperator } from "@oneforall/domain/schema/filter/filterOperatorSchema";
import { RecordFilters } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import {
  ViewField,
  ViewFields,
} from "@oneforall/domain/schema/view/viewSchema";

export const InputFieldFilter = ({
  index,
  viewFields,
  filter,
  setFilters,
  disabled,
}: {
  index: number;
  viewFields: ViewFields;
  filter: RecordFilters[number];
  setFilters: Dispatch<SetStateAction<RecordFilters>>;
  disabled?: boolean;
}) => {
  const [fieldId, setFieldId] = useState<string>(filter.fieldId);
  const [operator, setOperator] = useState<FilterOperator>(filter.operator);
  const [value, setValue] = useState<string>(filter.value);
  const [filterComplexity, setFilterComplexity] = useState<FilterComplexity>(
    filter.filterComplexity,
  );

  const fieldList = Object.values(viewFields).map((field) => ({
    label: field.fieldName,
    value: field.id,
  }));

  return (
    <>
      <Table.BodyTd>
        <Select
          label={""}
          data={fieldList}
          value={fieldId}
          setValue={setFieldId}
          disabled={disabled}
        />
      </Table.BodyTd>
      <Table.BodyTd>
        <TextInput
          label={""}
          value={viewFields[fieldId]?.fieldKind ?? ""}
          setValue={() => undefined}
          disabled
        />
      </Table.BodyTd>
      <Table.BodyTd>
        <Select<FilterOperator>
          label={""}
          data={[
            { label: "等しい", value: "eq" },
            { label: "等しくない", value: "neq" },
            { label: "より大きい", value: "gt" },
            { label: "以上", value: "gte" },
            { label: "より小さい", value: "lt" },
            { label: "以下", value: "lte" },
            { label: "含む", value: "in" },
            { label: "含まない", value: "nin" },
            { label: "部分一致", value: "like" },
            { label: "部分不一致", value: "nlike" },
          ]}
          value={operator}
          setValue={setOperator}
          disabled={disabled}
        />
      </Table.BodyTd>
      <Table.BodyTd>
        <SwitchInputValue
          viewField={viewFields[fieldId]}
          value={value}
          setValue={setValue}
          disabled={disabled}
        />
      </Table.BodyTd>
      <Table.BodyTd>
        <Select
          label={""}
          data={[
            { label: "かつ", value: "and" },
            { label: "または", value: "or" },
          ]}
          value={filterComplexity}
          setValue={setFilterComplexity}
          disabled={disabled}
        />
      </Table.BodyTd>
      <Table.BodyTd>
        <Button
          label={"追加"}
          clickHandler={() => {
            setFilters(
              (prev) =>
                ({
                  ...prev,
                  [index]: {
                    fieldId,
                    fieldKind: viewFields[fieldId]?.fieldKind ?? "",
                    operator,
                    value,
                    filterComplexity,
                  },
                }) as RecordFilters,
            );
          }}
          type={"add"}
          disabled={disabled}
        />
      </Table.BodyTd>
    </>
  );
};

export const SwitchInputValue = ({
  viewField,
  value,
  setValue,
  disabled,
}: {
  viewField: ViewField | undefined;
  value: string;
  setValue: (value: string) => void;
  disabled?: boolean;
}) => {
  if (!viewField) return null;

  switch (viewField.fieldKind) {
    case "text":
    case "multipleText": {
      return (
        <TextInput
          label={""}
          value={value}
          setValue={setValue}
          disabled={disabled}
        />
      );
    }
    case "numeric": {
      return (
        <NumberInput
          label={""}
          value={Number(value)}
          setValue={(v) => {
            if (typeof v === "number") {
              setValue(v.toString());
            }
          }}
          disabled={disabled}
        />
      );
    }
    case "date": {
      return (
        <DateInput
          label={""}
          value={isNaN(Date.parse(value)) ? new Date() : new Date(value)}
          setValue={(v) => {
            if (v instanceof Date) {
              setValue(v.toISOString());
            }
          }}
          disabled={disabled}
        />
      );
    }
    case "selectBox": {
      return (
        <Select
          data={viewField.options.selector}
          label={""}
          value={value}
          setValue={setValue}
          disabled={disabled}
        />
      );
    }
    default:
      return null;
  }
};

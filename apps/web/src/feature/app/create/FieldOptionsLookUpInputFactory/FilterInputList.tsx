import { ComponentProps, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { FilterInput } from "@feature/app/create/FieldOptionsLookUpInputFactory/FilterInput";
import { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";

/**
 * @package
 */
export const FilterInputList = ({
  filters,
  setFilters,
  fieldListData,
}: {
  filters: FieldOptionsLookup["filters"];
  setFilters: (filters: FieldOptionsLookup["filters"]) => void;
  fieldListData: ComponentProps<typeof FilterInput>["fieldListData"];
}) => {
  const [fieldId, setFieldId] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [complexity, setComplexity] = useState<"and" | "or">("and");

  const addDisabled = fieldId === "" || value === "";

  return (
    <div>
      <div className={"space-x-2"}>
        <span>フィルター</span>
        <Button
          type={"add"}
          label={"追加"}
          disabled={addDisabled}
          clickHandler={() => {
            if (addDisabled) return;

            setFilters({
              ...filters,
              [Object.keys(filters).length]: {
                filterType: "static",
                fieldId,
                value,
              },
            });
            setFieldId("");
            setValue("");
          }}
        />
      </div>
      {Object.values(filters).map((f, index) => (
        <FilterInput
          key={index}
          fieldListData={fieldListData}
          fieldId={f.fieldId}
          setFieldId={() => undefined}
          value={f.value}
          setValue={() => undefined}
          complexity={"and"}
          setComplexity={() => undefined}
        />
      ))}
      <FilterInput
        fieldListData={fieldListData}
        fieldId={fieldId}
        setFieldId={setFieldId}
        value={value}
        setValue={setValue}
        complexity={complexity}
        setComplexity={setComplexity}
      />
    </div>
  );
};

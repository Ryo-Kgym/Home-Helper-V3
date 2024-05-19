import { ComponentProps, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { FilterInput } from "@features/fieldOptions/FieldOptionsLookUpInputFactory/FilterInput";
import { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { FilterComplexity } from "@oneforall/domain/schema/filterComplexitySchema";

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
  const [complexity, setComplexity] = useState<FilterComplexity>("and");

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
                complexity,
              },
            });
            setFieldId("");
            setValue("");
          }}
        />
      </div>
      <div className={"space-y-3"}>
        {Object.entries(filters).map(([index, f]) => (
          <div key={index} className={"flex items-center space-x-5"}>
            <div>{index}</div>
            <FilterInput
              fieldListData={fieldListData}
              fieldId={f.fieldId}
              setFieldId={() => undefined}
              value={f.value}
              setValue={() => undefined}
              complexity={f.complexity}
              setComplexity={() => undefined}
              deletable
              deleteHandler={() => {
                const newFilters = { ...filters };
                delete newFilters[index];
                setFilters(newFilters);
              }}
            />
          </div>
        ))}
        <div className={"flex items-center space-x-5"}>
          <div>-</div>
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
      </div>
    </div>
  );
};

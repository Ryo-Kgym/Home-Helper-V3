import { ComponentProps, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Table } from "@components/ui/v4/table";
import { FilterInputRow } from "@features/fieldOptions/FieldOptionsLookUpInputFactory/FilterInputRow";
import {
  FieldOptionsLookup,
  FieldOptionsLookupFilter,
} from "@oneforall/domain/schema/appSchema";
import { FilterComplexity } from "@oneforall/domain/schema/filterComplexitySchema";

/**
 * @package
 */
export const FilterInputTable = ({
  filters,
  setFilters,
  fieldListData,
}: {
  filters: FieldOptionsLookup["filters"];
  setFilters: (filters: FieldOptionsLookup["filters"]) => void;
  fieldListData: ComponentProps<typeof FilterInputRow>["fieldListData"];
}) => {
  const [fieldId, setFieldId] = useState<string>("");
  const [filterType, setFilterType] =
    useState<FieldOptionsLookupFilter["filterType"]>("value");
  const [value, setValue] = useState<string>("");
  const [complexity, setComplexity] = useState<FilterComplexity>("and");

  const addDisabled = fieldId === "" || value === "";

  return (
    <div className={"space-y-2"}>
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
                filterType,
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
      <Table>
        <Table.Header
          headerItems={[
            { name: "" },
            {
              name: "かつ / または",
            },
            {
              name: "絞りたいフィールド",
            },
            {
              name: "絞り方",
            },
            {
              name: "値 / フィールド",
            },
            { name: "" },
          ]}
        />
        <Table.Body
          data={Object.entries(filters)}
          renderItem={([index, f]) => (
            <FilterInputRow
              index={index}
              fieldListData={fieldListData}
              fieldId={f.fieldId}
              setFieldId={() => undefined}
              filterType={f.filterType}
              setFilterType={() => undefined}
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
          )}
        >
          <Table.BodyTr>
            <FilterInputRow
              index={"-"}
              fieldListData={fieldListData}
              fieldId={fieldId}
              setFieldId={setFieldId}
              filterType={filterType}
              setFilterType={setFilterType}
              value={value}
              setValue={setValue}
              complexity={complexity}
              setComplexity={setComplexity}
            />
          </Table.BodyTr>
        </Table.Body>
      </Table>
    </div>
  );
};

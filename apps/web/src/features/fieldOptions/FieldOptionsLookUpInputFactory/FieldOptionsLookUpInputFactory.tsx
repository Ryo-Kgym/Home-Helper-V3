import { useEffect, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Select } from "@components/ui/v4/select";
import { lookupOptionsSchema } from "@feature/app/create/appFieldValue";
import { OptionsState } from "@features/fieldOptions/FieldOptionsInput";
import { FilterInputList } from "@features/fieldOptions/FieldOptionsLookUpInputFactory/FilterInputList";
import { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { SortDirection } from "@oneforall/domain/schema/sortDirectionSchema";

import { useMakeSelector } from "./useMakeSelector";

export const FieldOptionsLookUpInputFactory = ({
  value,
  setValue,
}: OptionsState) => {
  const parsed = lookupOptionsSchema.safeParse(value);
  return (
    <FieldOptionsLookUpInput
      options={
        parsed.success
          ? parsed.data
          : {
              appId: "",
              selectFieldId: "",
              saveFieldId: "",
              sortFieldId: "",
              sortDirection: "asc",
              filters: {},
            }
      }
      setOptions={setValue}
    />
  );
};

const FieldOptionsLookUpInput = ({
  options,
  setOptions,
}: {
  options: FieldOptionsLookup;
  setOptions: (options: FieldOptionsLookup) => void;
}) => {
  const [appId, setAppId] = useState<string>(options.appId);
  const [selectFieldId, setSelectFieldId] = useState<string>(
    options.selectFieldId,
  );
  const [saveFieldId, setSaveFieldId] = useState<string>(options.saveFieldId);
  const [sortFieldId, setSortFieldId] = useState<string>(options.sortFieldId);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    options.sortDirection,
  );
  const [filters, setFilters] = useState<FieldOptionsLookup["filters"]>(
    options.filters,
  );

  const { appListData, fieldListData } = useMakeSelector({ appId });

  const buttonDisabled =
    !appId || !selectFieldId || !saveFieldId || !sortFieldId;

  const saveHandler = () => {
    setOptions({
      appId,
      selectFieldId,
      saveFieldId,
      sortFieldId,
      sortDirection,
      filters,
    });
  };

  useEffect(() => {
    console.log("[filters]", filters);
  }, [filters]);

  useEffect(() => {
    console.log("[options]", options);
  }, [options]);

  return (
    <>
      <Select
        data={appListData}
        label={"アプリ"}
        value={appId}
        setValue={setAppId}
      />
      <Select
        data={fieldListData}
        label={"取得フィールド"}
        value={selectFieldId}
        setValue={setSelectFieldId}
      />
      <Select
        data={fieldListData}
        label={"保存フィールド"}
        value={saveFieldId}
        setValue={setSaveFieldId}
      />
      <div className={"flex"}>
        <Select
          data={fieldListData}
          label={"ソート"}
          value={sortFieldId}
          setValue={setSortFieldId}
        />
        <Select
          data={[
            { label: "昇順", value: "asc" },
            { label: "降順", value: "desc" },
          ]}
          label={"昇順・降順"}
          value={sortDirection}
          setValue={setSortDirection}
        />
      </div>
      <div>
        <FilterInputList
          filters={filters}
          setFilters={setFilters}
          fieldListData={fieldListData}
        />
      </div>
      <Button
        label={"保存"}
        clickHandler={saveHandler}
        disabled={buttonDisabled}
        type={"save"}
      />
    </>
  );
};

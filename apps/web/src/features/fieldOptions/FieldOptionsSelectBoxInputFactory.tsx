import type { SelectBoxOptions } from "@feature/app/create/appFieldValue";
import type { OptionsState } from "@features/fieldOptions/FieldOptionsInput";
import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { TextInput } from "@components/ui/v4/textInput";
import { selectBoxOptionsSchema } from "@feature/app/create/appFieldValue";
import { generateId } from "@feature/app/function/generateId";

export const FieldOptionsSelectBoxInputFactory = ({
  value,
  setValue,
}: OptionsState) => {
  const parsed = selectBoxOptionsSchema.safeParse(value);
  return (
    <FieldOptionsSelectBoxInput
      options={
        parsed.success
          ? parsed.data
          : {
              selector: [],
            }
      }
      setOptions={setValue}
    />
  );
};

const FieldOptionsSelectBoxInput = ({
  options,
  setOptions,
}: {
  options: SelectBoxOptions;
  setOptions: (options: SelectBoxOptions) => void;
}) => {
  const [selector, setSelector] = useState<SelectBoxOptions["selector"]>(
    options.selector ?? [],
  );

  const addFieldHandler = () => {
    setSelector((prev) => [...prev, DEFAULT_OPTIONS]);
  };

  const onChangeHandler = (index: number, label: string) => {
    setSelector((prev) => {
      const next = [...prev];
      next[index] = {
        value: "", // このタイミングでは、value を生成しない。
        label,
      };
      return next;
    });
  };

  const saveHandler = () => {
    setOptions({
      selector: selector.map((s, i) => ({
        value: s.value ? s.value : generateId(i),
        label: s.label,
      })),
    });
  };

  return (
    <>
      <Button label={"追加"} clickHandler={addFieldHandler} type={"add"} />
      <div>
        {selector.map(({ label }, index) => (
          <TextInput
            key={index}
            label={""}
            value={label}
            setValue={(value) => onChangeHandler(index, value)}
          />
        ))}
      </div>
      <Button label={"保存"} clickHandler={saveHandler} type={"save"} />
    </>
  );
};

const DEFAULT_OPTIONS: SelectBoxOptions["selector"][number] = {
  value: "",
  label: "",
};

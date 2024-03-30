import type { SelectBoxOptions } from "@feature/app/create/app-field-value";
import type { OptionsState } from "@feature/app/create/FieldOptionsInput";
import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { TextInput } from "@components/ui/v4/textInput";
import { selectBoxOptionsSchema } from "@feature/app/create/app-field-value";
import { generateId } from "@feature/app/function/generate-id";

export const FieldOptionsSelectBoxFactory = ({
  value,
  setValue,
}: OptionsState) => {
  const parsed = selectBoxOptionsSchema.safeParse(value);
  return (
    <FieldOptionsSelectBox
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

const FieldOptionsSelectBox = ({
  options,
  setOptions,
}: {
  options: SelectBoxOptions;
  setOptions: (options: SelectBoxOptions) => void;
}) => {
  const [selectorLabels, setSelectorLabels] = useState<
    SelectBoxOptions["selector"][number]["label"][]
  >(options.selector?.map((selector) => selector.label) ?? [""]);

  return (
    <>
      <Button
        label={"追加"}
        clickHandler={() => {
          setSelectorLabels((prev) => [...prev, ""]);
        }}
        type={"add"}
      />
      <div>
        {selectorLabels.map((label, i) => (
          <TextInput
            key={i}
            label={""}
            value={label}
            setValue={(value) =>
              setSelectorLabels((prev) => {
                const next = [...prev];
                next[i] = value;
                return next;
              })
            }
          />
        ))}
      </div>
      <Button
        label={"保存"}
        clickHandler={() => {
          setOptions({
            selector: selectorLabels.map((label, i) => ({
              value: generateId(i),
              label,
            })),
          });
        }}
        type={"save"}
      />
    </>
  );
};

import type { SelectBoxOptions } from "@feature/app/create/app-field-value";
import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { TextInput } from "@components/ui/v4/textInput";
import { generateId } from "@feature/app/function/generate-id";

export const FieldOptionsSelectBox = ({
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
    <div>
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
    </div>
  );
};

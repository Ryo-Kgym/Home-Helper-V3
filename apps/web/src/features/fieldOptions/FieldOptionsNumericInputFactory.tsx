import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { NumberInput } from "@components/ui/v4/textInput";
import { OptionsState } from "@features/fieldOptions/FieldOptionsInput";
import {
  NumericOptions,
  numericOptionsSchema,
} from "@oneforall/domain/schema/appFieldValue";

export const FieldOptionsNumericInputFactory = ({
  value,
  setValue,
}: OptionsState) => {
  const parsed = numericOptionsSchema.safeParse(value);
  return (
    <FieldOptionsNumericInput
      options={
        parsed.success
          ? parsed.data
          : {
              thousandsSeparatorPosition: 3,
            }
      }
      setOptions={setValue}
    />
  );
};

const FieldOptionsNumericInput = ({
  options,
  setOptions,
}: {
  options: NumericOptions;
  setOptions: (options: NumericOptions) => void;
}) => {
  const [thousandsSeparatorPosition, setThousandsSeparatorPosition] = useState(
    options.thousandsSeparatorPosition,
  );

  const saveHandler = () => {
    setOptions({
      thousandsSeparatorPosition,
    });
  };

  const savable = numericOptionsSchema.safeParse({
    thousandsSeparatorPosition,
  }).success;

  return (
    <>
      <NumberInput
        label={"桁区切り位置"}
        value={thousandsSeparatorPosition}
        setValue={(v) => {
          setThousandsSeparatorPosition(v === "" ? 0 : v);
        }}
      />
      <Button
        label={"保存"}
        clickHandler={saveHandler}
        type={"save"}
        disabled={!savable}
      />
    </>
  );
};

import type { OptionsState } from "@feature/app/create/FieldOptionsInput";
import type {
  FieldOptionsDate,
  FieldOptionsDateFormat,
} from "@oneforall/domain/schema/appSchema";
import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Select } from "@components/ui/v4/select";
import { dateOptionsSchema } from "@feature/app/create/appFieldValue";

export const FieldOptionsDateInputFactory = ({
  value,
  setValue,
}: OptionsState) => {
  const parsed = dateOptionsSchema.safeParse(value);
  return (
    <FieldOptionsDateInput
      options={
        parsed.success
          ? parsed.data
          : {
              format: "YYYY-MM-DD",
            }
      }
      setOptions={setValue}
    />
  );
};

const FieldOptionsDateInput = ({
  options,
  setOptions,
}: {
  options: FieldOptionsDate;
  setOptions: (options: FieldOptionsDate) => void;
}) => {
  const [format, setFormat] = useState<FieldOptionsDateFormat>(options.format);

  const saveHandler = () => {
    setOptions({ ...options, format });
  };

  const buttonDisabled = false;

  return (
    <>
      <Select
        data={Object.entries(dateFormatOptions).map(([k, v]) => ({
          value: k as FieldOptionsDateFormat,
          label: v,
        }))}
        label={"フォーマット"}
        value={format}
        setValue={setFormat}
      />
      <Button
        label={"保存"}
        clickHandler={saveHandler}
        disabled={buttonDisabled}
        type={"save"}
      />
    </>
  );
};

const dateFormatOptions: Record<FieldOptionsDateFormat, string> = {
  "YYYY-MM-DD": "YYYY-MM-DD 例: 2024-04-12",
  "YYYY-MM-DD HH:mm:ss": "YYYY-MM-DD HH:mm:ss 例: 2024-04-12 12:34:56",
  YYYY_M_D_W__jpchar: "YYYY年M月D日W曜日 例: 2024年4月12日金曜日",
};

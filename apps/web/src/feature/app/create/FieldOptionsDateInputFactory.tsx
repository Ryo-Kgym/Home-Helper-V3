import type { OptionsState } from "@feature/app/create/FieldOptionsInput";
import type {
  FieldOptionsDate,
  FieldOptionsDateFormat,
} from "@feature/app/schema";
import { Select } from "@components/ui/v4/select";
import { dateOptionsSchema } from "@feature/app/create/app-field-value";

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
  return (
    <div>
      <div>
        <Select
          data={Object.entries(dateFormatOptions).map(([k, v]) => ({
            value: k as FieldOptionsDateFormat,
            label: v,
          }))}
          label={"フォーマット"}
          value={options.format}
          setValue={(v) => setOptions({ ...options, format: v })}
        />
      </div>
    </div>
  );
};

const dateFormatOptions: Record<FieldOptionsDateFormat, string> = {
  "YYYY-MM-DD": "YYYY-MM-DD",
  "YYYY-MM-DD HH:mm:ss": "YYYY-MM-DD HH:mm:ss",
};

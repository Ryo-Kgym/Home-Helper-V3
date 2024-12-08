import type { FieldValueProps } from "~/components/ui/v4/property";
import { FieldContainer } from "~/components/ui/v4/FieldContainer";

export const NumberInput = ({
  label,
  value,
  setValue,
  required = false,
  placeholder,
  disabled,
}: FieldValueProps<number | "">) => {
  const requiredStyle = required && !value ? "bg-red-100" : "bg-inherit";

  return (
    <FieldContainer label={label}>
      <input
        className={`w-full cursor-pointer p-2 focus:outline-none ${requiredStyle} disabled:cursor-not-allowed disabled:bg-gray-200`}
        type="number"
        value={value}
        onChange={(e) => {
          if (e.target.value === "") {
            setValue("");
            return;
          }

          setValue(Number(e.target.value));
        }}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FieldContainer>
  );
};

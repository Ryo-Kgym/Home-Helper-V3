import { Select as MantineSelect } from "@mantine/core";

import { FieldContainer } from "~/components/ui/v4/FieldContainer";
import { SelectProps } from "~/components/ui/v4/select/index";

export const Select = <T extends string | number>({
  label,
  value,
  setValue,
  data,
  disabled,
  required,
  placeholder,
}: SelectProps<T>) => {
  const requiredBgColor = required && !value ? "bg-red-100" : "";

  return (
    <FieldContainer label={label}>
      <MantineSelect
        data={data.map((item) => ({
          value: item.value as string,
          label: item.label,
        }))}
        value={value as string}
        onChange={(e) => (e ? setValue(e as T) : undefined)}
        placeholder={placeholder}
        required={required}
        className={requiredBgColor}
        disabled={disabled}
      ></MantineSelect>
    </FieldContainer>
  );
};

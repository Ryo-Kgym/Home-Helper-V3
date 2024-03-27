import type { SelectProps } from "@components/ui/v4/select/index";
import { useState } from "react";
import { FieldContainer } from "@components/ui/v4/FieldContainer";

export const Select = <T extends string | number>({
  label,
  value,
  setValue,
  data,
  disabled,
  required,
  placeholder,
}: SelectProps<T>) => {
  const [openOption, setOpenOption] = useState(false);
  const selectedFieldName = data.find((d) => d.value === value)?.label ?? "";
  const requiredBgColor = required && !value ? "bg-red-100" : "";

  return (
    <FieldContainer label={label}>
      <button onClick={() => setOpenOption(!openOption)}>
        <input
          className={`w-full cursor-pointer p-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 ${requiredBgColor}`}
          value={selectedFieldName}
          readOnly
          disabled={disabled}
          placeholder={placeholder}
        />
      </button>
      <div className={"absolute z-10 ml-10 h-96 overflow-y-scroll bg-white"}>
        {data
          .filter((_) => openOption)
          .map((item) => (
            <div key={item.value}>
              <button
                className={
                  "w-full rounded-md border border-gray-300 bg-inherit px-3 py-1 text-left hover:bg-gray-200"
                }
                onClick={() => {
                  setValue(item.value);
                  setOpenOption(false);
                }}
              >
                {item.label}
              </button>
            </div>
          ))}
      </div>
    </FieldContainer>
  );
};

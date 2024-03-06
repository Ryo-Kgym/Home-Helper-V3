import type { SelectProps } from "@components/ui/v4/select/index";
import { useState } from "react";
import { FieldContainer } from "@components/ui/v4/FieldContainer";

export const Select = <T extends string | number>({
  label,
  value,
  setValue,
  data,
}: SelectProps<T>) => {
  const [openOption, setOpenOption] = useState(false);
  const selectedFieldName = data.find((d) => d.value === value)?.label ?? "";

  return (
    <FieldContainer label={label}>
      <input
        className={"w-full cursor-pointer p-2 focus:outline-none"}
        value={selectedFieldName}
        readOnly
        onClick={() => setOpenOption(true)}
      />
      <div className={"absolute z-10 bg-white pl-5"}>
        {data
          .filter((_) => openOption)
          .map((item) => (
            <div key={item.value}>
              <button
                className={
                  "w-full rounded-md border-2 border-gray-300 bg-inherit p-1 text-left hover:bg-gray-200"
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

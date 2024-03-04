import type { FieldValueProps } from "@components/ui/v4/property";
import { FieldContainer } from "@components/ui/v4/FieldContainer";

export const TextInput = ({
  label,
  value,
  setValue,
}: FieldValueProps<string>) => {
  return (
    <FieldContainer label={label}>
      <input
        className={"w-full cursor-pointer p-2 focus:outline-none"}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FieldContainer>
  );
};

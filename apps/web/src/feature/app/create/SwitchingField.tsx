import type { FieldValueProps } from "@components/ui/v4/property";
import type { FieldKind } from "@oneforall/domain/field/type";
import { Select } from "@components/ui/v4/select";

export const SwitchingField = ({
  value,
  setValue,
  fieldKind,
}: FieldValueProps<string> & { fieldKind: FieldKind }) => {
  switch (fieldKind) {
    case "text":
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    case "selectBox":
      return (
        <Select
          label={"SelectBox"}
          value={value}
          setValue={setValue}
          data={[
            { label: "選択肢1", value: "option1" },
            { label: "選択肢2", value: "option2" },
            { label: "選択肢3", value: "option3" },
          ]}
        />
      );
    case "multipleText":
      return (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={"w-full"}
        />
      );
  }
};

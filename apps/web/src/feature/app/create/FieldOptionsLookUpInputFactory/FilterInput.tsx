import { ComponentProps } from "react";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";

/**
 * @package
 */
export const FilterInput = ({
  fieldListData,
  fieldId,
  setFieldId,
  value,
  setValue,
  complexity,
  setComplexity,
}: {
  fieldListData: ComponentProps<typeof Select<string>>["data"];
  fieldId: string;
  setFieldId: (fieldId: string) => void;
  value: string;
  setValue: (value: string) => void;
  complexity: "and" | "or";
  setComplexity: (complexity: "and" | "or") => void;
}) => {
  return (
    <div className={"flex items-end"}>
      <Select
        data={fieldListData}
        label={"フィールド"}
        value={fieldId}
        setValue={setFieldId}
      />
      <TextInput label={"値"} value={value} setValue={setValue} />
      <Select
        data={[
          {
            label: "and",
            value: "and",
          },
          {
            label: "or",
            value: "or",
          },
        ]}
        label={""}
        value={complexity}
        setValue={setComplexity}
      />
    </div>
  );
};

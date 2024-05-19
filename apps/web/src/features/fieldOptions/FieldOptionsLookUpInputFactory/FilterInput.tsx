import { ComponentProps } from "react";
import Trash from "@components/ui/v4/icon/Trash";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { FilterComplexity } from "@oneforall/domain/schema/filterComplexitySchema";

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
  deletable,
  deleteHandler,
}: {
  fieldListData: ComponentProps<typeof Select<string>>["data"];
  fieldId: string;
  setFieldId: (fieldId: string) => void;
  value: string;
  setValue: (value: string) => void;
  complexity: FilterComplexity;
  setComplexity: (complexity: FilterComplexity) => void;
  deletable?: boolean;
  deleteHandler?: () => void;
}) => {
  return (
    <div className={"flex items-center"}>
      <Select
        data={[
          {
            label: "かつ",
            value: "and",
          },
          {
            label: "または",
            value: "or",
          },
        ]}
        label={"かつ / または"}
        value={complexity}
        setValue={setComplexity}
      />
      <Select
        data={fieldListData}
        label={"フィールド"}
        value={fieldId}
        setValue={setFieldId}
      />
      <TextInput label={"値"} value={value} setValue={setValue} />
      {deletable && (
        <button className={"h-8 w-8 bg-inherit"} onClick={deleteHandler}>
          <Trash />
        </button>
      )}
    </div>
  );
};

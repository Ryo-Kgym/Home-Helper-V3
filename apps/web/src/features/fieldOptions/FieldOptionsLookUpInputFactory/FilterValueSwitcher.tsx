import { ComponentProps } from "react";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { useGetAppFieldValue } from "@feature/app/create/useAppFieldValueState";
import { FieldOptionsLookupFilter } from "@oneforall/domain/schema/appSchema";

/**
 * @package
 */
export const FilterValueSwitcher = (
  props: {
    filterType: FieldOptionsLookupFilter["filterType"];
  } & ComponentProps<typeof TypeValueInput> &
    ComponentProps<typeof TypeFieldInput>,
) => {
  switch (props.filterType) {
    case "value":
      return <TypeValueInput {...props} />;
    case "field":
      return <TypeFieldInput {...props} />;
  }
};

const TypeValueInput = ({
  value,
  setValue,
  disabled,
}: {
  value: string;
  setValue: (value: string) => void;
  disabled: boolean | undefined;
}) => {
  return (
    <TextInput
      label={""}
      value={value}
      setValue={setValue}
      disabled={disabled}
    />
  );
};

const TypeFieldInput = ({
  value,
  setValue,
  disabled,
}: {
  value: string;
  setValue: (value: string) => void;
  disabled: boolean | undefined;
}) => {
  const { fields } = useGetAppFieldValue();
  const data = Object.values(fields)
    .filter((v) => "id" in v)
    .map((v) => {
      if (!("id" in v)) {
        throw new Error("invalid field");
      }
      return {
        label: v.fieldName,
        value: v.id,
      };
    });

  return (
    <Select
      data={data}
      label={""}
      value={value}
      setValue={setValue}
      disabled={disabled}
    />
  );
};

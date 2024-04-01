import { useGetAppFieldValue } from "@feature/app/create/useAppFieldValueState";
import { AppFieldInput } from "@feature/app/field/AppFieldInput";

export const FieldInputTable = () => {
  const { fields } = useGetAppFieldValue();

  return (
    <div className={"space-y-2"}>
      {Object.keys(fields).map((index) => (
        <AppFieldInput key={index} index={parseInt(index)} />
      ))}
    </div>
  );
};

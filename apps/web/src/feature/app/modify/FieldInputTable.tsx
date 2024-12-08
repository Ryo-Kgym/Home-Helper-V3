import { useGetAppFieldValue } from "../create/useAppFieldValueState";
import { AppFieldInput } from "../field/AppFieldInput";

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

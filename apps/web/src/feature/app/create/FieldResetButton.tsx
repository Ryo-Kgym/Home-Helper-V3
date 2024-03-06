import type { AppFieldValue } from "@feature/app/create/app-field-value";

export const FieldResetButton = ({
  setValue,
  setFieldCount,
}: {
  setValue: React.Dispatch<React.SetStateAction<AppFieldValue>>;
  setFieldCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <button
      className={"p-2 hover:bg-gray-100 active:bg-gray-300"}
      onClick={() => {
        setValue({});
        setFieldCount(0);
      }}
    >
      リセット
    </button>
  );
};

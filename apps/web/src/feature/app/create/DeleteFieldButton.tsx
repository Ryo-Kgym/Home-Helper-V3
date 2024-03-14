import type { AppFieldValue } from "@feature/app/create/app-field-value";

export const DeleteFieldButton = ({
  index,
  value,
  setValue,
}: {
  index: number;
  value: AppFieldValue;
  setValue: (value: AppFieldValue) => void;
}) => {
  return (
    <div className={"flex items-center justify-center"}>
      <button
        className={"h-8 w-8 bg-inherit"}
        onClick={() => {
          const newValue = {
            ...value,
            [index]: {
              ...value[index],
              mode: "delete",
            },
          };
          setValue(newValue as AppFieldValue);
        }}
      >
        <div
          className={
            "flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white"
          }
        >
          <div className={"text-xl"}>✕</div>
        </div>
      </button>
    </div>
  );
};

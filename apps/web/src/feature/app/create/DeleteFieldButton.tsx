import type { AppFieldValue } from "@feature/app/create/app-field-value";
import Reset from "@components/ui/v4/icon/Reset";
import Trash from "@components/ui/v4/icon/Trash";

export const DeleteFieldButton = ({
  index,
  value,
  setValue,
}: {
  index: number;
  value: AppFieldValue;
  setValue: (value: AppFieldValue) => void;
}) => {
  const currentMode = value[index]?.mode;

  const clickHandler = () => {
    if (currentMode === "delete") {
      const newValue = {
        ...value,
        [index]: {
          ...value[index],
          mode: "add",
        },
      };
      setValue(newValue as AppFieldValue);
    } else {
      const newValue = {
        ...value,
        [index]: {
          ...value[index],
          mode: "delete",
        },
      };
      setValue(newValue as AppFieldValue);
    }
  };

  const Icon = () => {
    if (currentMode === "delete") {
      return <Reset />;
    }
    return <Trash />;
  };

  return (
    <div className={"flex items-center justify-center"}>
      <button className={"h-8 w-8 bg-inherit"} onClick={clickHandler}>
        <Icon />
      </button>
    </div>
  );
};

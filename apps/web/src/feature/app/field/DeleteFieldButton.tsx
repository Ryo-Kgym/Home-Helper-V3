import Reset from "@components/ui/v4/icon/Reset";
import Trash from "@components/ui/v4/icon/Trash";

import type { AppFieldValue } from "@feature/app/create/app-field-value";

export const DeleteFieldButton = ({
  onClick,
  mode,
}: {
  onClick: () => void;
  mode: AppFieldValue[number]["mode"];
}) => {
  const Icon = () => {
    if (mode === "delete") {
      return <Reset />;
    }
    return <Trash />;
  };

  return (
    <div className={"flex items-center justify-center"}>
      <button className={"h-8 w-8 bg-inherit"} onClick={onClick}>
        <Icon />
      </button>
    </div>
  );
};

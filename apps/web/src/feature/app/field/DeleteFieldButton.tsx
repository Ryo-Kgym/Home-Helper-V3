import { useState } from "react";
import Reset from "@components/ui/v4/icon/Reset";
import Trash from "@components/ui/v4/icon/Trash";

export const DeleteFieldButton = ({ onClick }: { onClick: () => void }) => {
  const [currentMode] = useState<"delete" | "modify">("modify");

  const Icon = () => {
    if (currentMode === "delete") {
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

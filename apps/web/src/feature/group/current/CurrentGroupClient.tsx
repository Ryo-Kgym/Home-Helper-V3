"use client";

import { useEffect, useState } from "react";

import { useFindUser } from "../../../persistence/browser/client/useFindUser";

export const CurrentGroupClient = () => {
  const [groupName, setGroupName] = useState<string>("Loading...");
  const { group } = useFindUser();

  useEffect(() => {
    if (group.name) {
      setGroupName(group.name);
    }
  }, [group.name]);

  return (
    <div className={"flex justify-end px-5 py-2"}>
      <div className={"flex space-x-5 text-xl"}>
        <div>選択中</div>
        <div>{groupName}</div>
      </div>
    </div>
  );
};

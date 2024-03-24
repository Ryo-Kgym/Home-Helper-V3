"use client";

import { useFindUser } from "@persistence/browser/client/useFindUser";

export const CurrentGroupClient = () => {
  const { group } = useFindUser();

  if (!group) return null;

  return (
    <div className={"flex justify-end px-5 py-2"}>
      <div className={"flex space-x-5 text-xl"}>
        <div>選択中</div>
        <div>{group.name}</div>
      </div>
    </div>
  );
};

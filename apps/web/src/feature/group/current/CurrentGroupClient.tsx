"use client";

import type { User } from "@type/user";
import { useEffect, useState } from "react";
import { useFindUser } from "@persistence/browser/client/useFindUser";

export const CurrentGroupClient = ({ groupName }: { groupName: string }) => {
  const [group, setGroup] = useState<User["group"]>();
  const user = useFindUser();

  useEffect(() => {
    const fetch = async () => {
      setGroup(user.group);
    };

    void fetch();
  }, [useFindUser, user.group]);

  return (
    <div className={"flex justify-end px-5 py-2"}>
      <div className={"flex space-x-5 text-xl"}>
        <div>選択中</div>
        <div>{!group ? groupName : group.name}</div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";

import { fetchUser } from "../user/fetchUser";

/**
 * @deprecated {@link findUser()} を使用してください。
 */
export const useGroup = () => {
  const [group, setGroup] = useState({ groupId: "" });

  useEffect(() => {
    void (async () => {
      const user = await fetchUser();
      setGroup({
        groupId: user.group.id,
      });
    })();
  }, []);

  return { groupId: group.groupId };
};

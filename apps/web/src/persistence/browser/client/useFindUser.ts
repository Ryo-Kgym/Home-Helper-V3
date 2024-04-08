import { getCookieValue } from "@persistence/browser/client/cookie";
import { useEffect, useState } from "react";

import type { User } from "@type/user";

export const useFindUser = (): User => {
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    email: "",
    group: { id: "", name: "" },
  });

  const optUser = getCookieValue("user");

  useEffect(
    () => {
      if (optUser) {
        setUser(optUser as User);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return user;
};

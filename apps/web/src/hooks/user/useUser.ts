/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useEffect, useState } from "react";

import { fetchUser } from "./fetchUser";

/**
 * @deprecated {@link findUser()} を使用してください。
 */
export const useUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    void (async () => {
      const user = await fetchUser();
      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    })();
  }, []);

  return {
    userId: user.id,
    email: user.email,
    userName: user.name,
  };
};

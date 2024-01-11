/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useRecoilState } from "recoil";
import { userState } from "@recoil/userState";
import { User } from "@domain/model/User";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  const save = (user: User) => {
    setUser(user);
  };

  const hasUserId = () => user.id !== "";

  return {
    userId: user.id,
    email: user.email,
    userName: user.name,
    save,
    hasUserId,
  };
};

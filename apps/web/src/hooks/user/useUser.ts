/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { userState } from "@recoil/userState";
import { useRecoilState } from "recoil";

import type { User } from "@domain/model/User";

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

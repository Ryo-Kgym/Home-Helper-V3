/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useAuth } from "@hooks/authentication/useAuth";
import { useMessage } from "@hooks/message/useMessage";
import { useEffect, useState } from "react";

import { LoginPresenter } from "./LoginPresenter";

export const LoginContainer = () => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const { first } = useMessage();
  const { loginCheckForLoginPage } = useAuth();

  useEffect(() => {
    loginCheckForLoginPage();
  }, [loginCheckForLoginPage]);

  useEffect(() => {
    setMessage(first);
  }, [first]);

  return <LoginPresenter message={message} />;
};

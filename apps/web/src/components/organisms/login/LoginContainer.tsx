/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { LoginPresenter } from "./LoginPresenter";
import { useMessage } from "@hooks/message/useMessage";
import { useEffect, useState } from "react";
import { useAuth } from "@hooks/authentication/useAuth";

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

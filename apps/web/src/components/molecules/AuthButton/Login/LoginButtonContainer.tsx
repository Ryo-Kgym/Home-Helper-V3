/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import React from "react";
import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";
import { useRouter } from "next/navigation";
import { useUser } from "@hooks/user/useUser";

export const LoginButtonContainer = () => {
  const { push } = useRouter();
  const { hasUserId } = useUser();

  const label = "Login";
  const onClickHandler = () => {
    if (hasUserId()) {
      push("/group");
    }
    push("/sign-in");
  };

  return <AuthButtonPresenter label={label} onClickHandler={onClickHandler} />;
};

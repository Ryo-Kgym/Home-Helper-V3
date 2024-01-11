/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import React from "react";
import { useRouter } from "next/navigation";
import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";
import { useUser } from "@hooks/user/useUser";

export const LoginButtonContainer = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
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

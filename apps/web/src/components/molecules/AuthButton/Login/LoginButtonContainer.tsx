import { useRouter } from "next/navigation";
import React from "react";

import { AuthButtonPresenter } from "../AuthButtonPresenter";
import { checkLogin } from "./checkLogin";

export const LoginButtonContainer = () => {
  const { push } = useRouter();

  const label = "Login";
  const onClickHandler = async () => {
    try {
      await checkLogin();
      push("/group");
    } catch (e) {
      push("/sign-in");
    }
  };

  return <AuthButtonPresenter label={label} onClickHandler={onClickHandler} />;
};

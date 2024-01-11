"use client";

import { useUser } from "@hooks/user/useUser";
import { useEffect, useState } from "react";
import { LoginStatusPresenter } from "@components/molecules/LoginStatus/LoginStatusPresenter";

export const LoginStatusContainer = () => {
  const { userName } = useUser();
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    setDisplayName(userName ?? "");
  }, [userName]);

  return <LoginStatusPresenter displayName={displayName} />;
};

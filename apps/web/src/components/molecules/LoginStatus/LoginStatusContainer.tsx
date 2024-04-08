"use client";

import { LoginStatusPresenter } from "@components/molecules/LoginStatus/LoginStatusPresenter";
import { useUser } from "@hooks/user/useUser";
import { useEffect, useState } from "react";

export const LoginStatusContainer = () => {
  const { userName } = useUser();
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    setDisplayName(userName ?? "");
  }, [userName]);

  return <LoginStatusPresenter displayName={displayName} />;
};

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";
import { useMessage } from "@hooks/message/useMessage";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { save: saveUser } = useUser();
  const { save: saveGroup } = useGroup();
  const { setMessage } = useMessage();
  const { signOut, session } = useClerk();
  const { push } = useRouter();

  const logout = async () => {
    saveUser({ id: "", name: "", email: "" });
    saveGroup({ id: "", name: "" });
    setMessage("ログアウトしました。");

    await signOut();
    push("/");
  };

  const loginCheckForLoginPage = () => {
    if (session?.id) {
      push("/group");
    }
  };

  return {
    logout,
    loginCheckForLoginPage,
  };
};

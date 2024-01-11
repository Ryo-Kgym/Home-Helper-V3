/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useGroup } from "@hooks/group/useGroup";
import { useMessage } from "@hooks/message/useMessage";
import { useUser } from "@hooks/user/useUser";

export const useAuth = () => {
  const { save: saveUser } = useUser();
  const { save: saveGroup } = useGroup();
  const { setMessage } = useMessage();
  const { signOut, session } = useClerk();
  // eslint-disable-next-line @typescript-eslint/unbound-method
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

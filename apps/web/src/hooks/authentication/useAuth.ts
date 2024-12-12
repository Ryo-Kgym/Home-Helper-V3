import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

import { useMessage } from "../message/useMessage";

export const useAuth = () => {
  const { setMessage } = useMessage();
  const { signOut, session } = useClerk();
  const { push } = useRouter();

  const logout = async () => {
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

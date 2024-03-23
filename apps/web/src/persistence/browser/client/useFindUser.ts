import type { User } from "@type/user";
import { getCookieValue } from "@persistence/browser/client/cookie";

export const useFindUser = (): User => {
  return getCookieValue("user");
};

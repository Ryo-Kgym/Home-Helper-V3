"use server";

import { findUser } from "../../persistence/browser/server/find-user";

export const fetchUser = async () => {
  return await findUser();
};

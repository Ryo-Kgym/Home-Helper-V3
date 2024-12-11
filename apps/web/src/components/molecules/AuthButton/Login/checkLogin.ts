"use server";

import { findUser } from "../../../../persistence/browser/server/find-user";

export const checkLogin = async () => {
  await findUser();
};

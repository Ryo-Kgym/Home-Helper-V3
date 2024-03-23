"use server";

import { currentUser } from "@clerk/nextjs";

export const findEmail = async () => {
  const nullableUser = await currentUser();
  const optionalEmail = nullableUser?.emailAddresses[0]?.emailAddress;

  if (optionalEmail === undefined) {
    throw new Error("Email not found");
  }

  return optionalEmail;
};

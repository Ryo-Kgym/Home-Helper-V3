/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { Group } from "@domain/model/Group";
import type { User } from "@domain/model/User";
import { useGetUserByEmailQuery } from "@/turbo/graphql/household";
import { useUser as clerkUseAuth } from "@clerk/nextjs";

export const useGetGroup = () => {
  const { user: clerkUser } = clerkUseAuth();

  const [{ data }] = useGetUserByEmailQuery({
    variables: {
      email: clerkUser?.emailAddresses[0]!.emailAddress ?? "",
    },
  });

  let user: User | undefined = undefined;
  if (data?.userByEmail[0]) {
    user = {
      id: data.userByEmail[0].id,
      name: data.userByEmail[0].name ?? "",
      email: data.userByEmail[0].email,
    };
  }

  const groups =
    data?.userByEmail[0]?.affiliation?.map((affiliation) => ({
      group: {
        id: affiliation.group?.id,
        name: affiliation.group?.name ?? "",
        role: affiliation.groupRole,
      } as Group,
    })) ?? [];

  return {
    user,
    groups,
  };
};

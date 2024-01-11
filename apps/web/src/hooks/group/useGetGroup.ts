/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useUser as clerkUseAuth } from "@clerk/nextjs";
import { Group } from "@domain/model/Group";
import { User } from "@domain/model/User";
import { useGetUserByEmailQuery } from "@graphql/hasura/generated/hasuraGraphql";

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

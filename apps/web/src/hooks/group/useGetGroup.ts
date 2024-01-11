/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGetUserByEmailQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useUser as clerkUseAuth } from "@clerk/nextjs";
import { Group } from "@domain/model/Group";
import { User } from "@domain/model/User";

export const useGetGroup = () => {
  const { user: clerkUser } = clerkUseAuth();

  const [{ data }] = useGetUserByEmailQuery({
    variables: {
      email: clerkUser?.emailAddresses[0].emailAddress ?? "",
    },
  });

  let user: User | undefined = undefined;
  if (data?.userByEmail[0]) {
    user = {
      id: data.userByEmail[0].id as string,
      name: data.userByEmail[0].name as string,
      email: data.userByEmail[0].email as string,
    };
  }

  const groups =
    data?.userByEmail[0]?.affiliation?.map((affiliation) => ({
      group: {
        id: affiliation.group?.id as string,
        name: affiliation.group?.name! as string,
        role: affiliation.groupRole as string,
      } as Group,
    })) ?? [];

  return {
    user,
    groups,
  };
};

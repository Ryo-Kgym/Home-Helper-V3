/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useCreateUserMutation } from "@/turbo/graphql/household";
import { useGenerateId } from "@hooks/useGenerateId";

export const useCreateUser = () => {
  const { generate } = useGenerateId();
  const [, mutation] = useCreateUserMutation();

  const create = ({ email, userName }: { email: string; userName: string }) => {
    return mutation({
      userId: generate(),
      userName,
      email,
      displayOrder: 0,
    });
  };

  return {
    create: create,
  };
};

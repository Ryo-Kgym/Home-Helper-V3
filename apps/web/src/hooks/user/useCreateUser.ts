/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGenerateId } from "@hooks/useGenerateId";
import { useCreateUserMutation } from "@graphql/hasura/generated/hasuraGraphql";

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

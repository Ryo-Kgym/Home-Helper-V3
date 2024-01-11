/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGenerateId } from "@hooks/useGenerateId";
import { useGroup } from "@hooks/group/useGroup";
import { useCreateAccountMutation } from "@graphql/hasura/generated/hasuraGraphql";

type CreateAccountArgs = {
  accountName: string;
  displayOrder: number;
};

export const useCreateAccount = ({
  accountName,
  displayOrder,
}: CreateAccountArgs) => {
  const { generate } = useGenerateId();
  const { groupId } = useGroup();

  const [, mutation] = useCreateAccountMutation();

  const registerAccount = () => {
    return mutation({
      accountId: generate(),
      accountName,
      displayOrder,
      groupId,
    });
  };

  return { registerAccount };
};

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGroup } from "@hooks/group/useGroup";
import { useGenerateId } from "@hooks/useGenerateId";
import { useCreateAccountMutation } from "@v3/graphql/household";

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

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useCreateAccountMutation } from "@/turbo/graphql/household";
import { useGroup } from "@hooks/group/useGroup";
import { useGenerateId } from "@hooks/useGenerateId";

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

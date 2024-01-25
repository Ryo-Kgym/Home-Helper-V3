/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Select } from "@components/ui/index";
import { useGroup } from "@hooks/group/useGroup";
import { useGetValidAccountsQuery } from "@v3/graphql/household";

type AccountSelectProps = {
  accountId: string | null;
  setAccountId: (_: string | null) => void;
  disabled?: boolean;
};
export const AccountSelect = ({
  accountId,
  setAccountId,
  disabled = false,
}: AccountSelectProps) => {
  const { groupId } = useGroup();
  const [{ data }] = useGetValidAccountsQuery({
    variables: {
      groupId,
    },
  });

  const accounts =
    data?.allAccountsList?.map((account) => ({
      label: account.accountName,
      value: account.accountId,
    })) ?? [];

  return (
    <Select
      label={"ACCOUNT"}
      value={accountId}
      onChange={setAccountId}
      data={accounts}
      placeholder={"アカウントを選択してください"}
      withAsterisk
      disabled={disabled}
    />
  );
};

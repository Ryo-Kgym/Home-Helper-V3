/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGetValidAccountsQuery } from "@v3/graphql/household";

import { useGroup } from "../../../../hooks/group/useGroup";
import { Select } from "../../../ui";

type AccountSelectProps = {
  accountId: string | null;
  setAccountId: (_: string | null) => void;
  disabled?: boolean;
  noLabel?: boolean;
};
export const AccountSelect = ({
  accountId,
  setAccountId,
  disabled = false,
  noLabel = false,
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
      label={noLabel ? "" : "ACCOUNT"}
      value={accountId}
      onChange={setAccountId}
      data={accounts}
      placeholder={"アカウントを選択してください"}
      withAsterisk
      disabled={disabled}
    />
  );
};

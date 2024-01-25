import { useEffect } from "react";
import { useGetValidAccountsQuery } from "@v3/graphql/household";

import type { EditableProps } from "~/ui/editable/editable-props";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { Picker } from "../Picker";

export const EditableAccount = ({
  value,
  setValue,
  disabled = false,
}: EditableProps<string>) => {
  const { groupId } = useSaveGroupId();
  const [{ data }] = useGetValidAccountsQuery({
    variables: {
      groupId,
    },
  });
  const accounts =
    data?.allAccountsList.map((account) => ({
      value: account.accountId,
      label: account.accountName,
    })) ?? [];

  useEffect(
    () => {
      if (!value && accounts[0]) {
        setValue(accounts[0].value);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accounts],
  );

  return (
    <Picker
      value={value}
      setValue={setValue}
      disabled={disabled}
      data={accounts}
    />
  );
};

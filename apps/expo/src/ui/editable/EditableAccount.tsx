import { useGetValidAccountsQuery } from "@/turbo/graphql/household";

import type { EditableProps } from "~/ui/editable/editable-props";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { Picker } from "../Picker";

export const EditableAccount = ({
  value,
  setValue,
  disabled = false,
}: EditableProps<string> & {
  defaultValue: string;
}) => {
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

  return (
    <Picker
      value={value}
      setValue={setValue}
      disabled={disabled}
      data={accounts}
    />
  );
};

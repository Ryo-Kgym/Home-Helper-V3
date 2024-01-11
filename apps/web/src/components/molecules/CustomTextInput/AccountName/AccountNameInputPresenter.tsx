import { TextInput } from "@components/atoms/TextInput";

type AccountNameInputPresenterProps = {
  accountName: string;
  setAccountName: (_: string) => void;
};

export const AccountNameInputPresenter = ({
  accountName,
  setAccountName,
}: AccountNameInputPresenterProps) => (
  <TextInput
    label={"ACCOUNT"}
    value={accountName}
    onChange={setAccountName}
    placeholder={"Account Name"}
    withAsterisk={true}
    maxLength={32}
  />
);

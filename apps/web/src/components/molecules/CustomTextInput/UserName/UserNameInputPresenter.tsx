import { TextInput } from "@components/atoms/TextInput";

type UserNameInputPresenterProps = {
  userName: string;
  setUserName: (_: string) => void;
};

export const UserNameInputPresenter = ({
  userName,
  setUserName,
}: UserNameInputPresenterProps) => (
  <TextInput
    label={"user name"}
    value={userName}
    onChange={setUserName}
    withAsterisk={true}
    maxLength={256}
  />
);

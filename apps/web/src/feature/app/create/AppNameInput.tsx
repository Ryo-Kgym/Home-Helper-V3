import { TextInput } from "~/components/ui/v4/textInput";

export const AppNameInput = ({
  appName,
  setAppName,
}: {
  appName: string;
  setAppName: (value: string) => void;
}) => (
  <TextInput
    label={"アプリ名"}
    value={appName}
    setValue={setAppName}
    required
    placeholder={"アプリ名を入力してください"}
  />
);

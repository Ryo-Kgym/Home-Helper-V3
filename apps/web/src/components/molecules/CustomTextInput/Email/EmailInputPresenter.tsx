import { TextInput } from "@components/atoms/TextInput";

type EmailInputPresenterProps = {
  email: string;
  setEmail: (_: string) => void;
  disabled?: boolean;
};

export const EmailInputPresenter = ({
  email,
  setEmail,
  disabled = false,
}: EmailInputPresenterProps) => (
  <TextInput
    label={"E-mail"}
    value={email}
    onChange={setEmail}
    placeholder={"xxx@yyy.zzz"}
    withAsterisk={true}
    maxLength={256}
    disabled={disabled}
  />
);

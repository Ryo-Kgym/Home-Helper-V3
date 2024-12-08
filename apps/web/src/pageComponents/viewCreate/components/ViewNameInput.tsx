import { TextInput } from "~/components/ui/v4/textInput";

export const ViewNameInput = ({
  viewName,
  setViewName,
}: {
  viewName: string;
  setViewName: (value: string) => void;
}) => (
  <TextInput
    label={"ビュー名"}
    value={viewName}
    setValue={setViewName}
    required
    placeholder={"ビュー名を入力してください"}
  />
);

import { TextArea } from "@components/ui";

export const MemoTextAreaPresenter = ({
  memo,
  setMemo,
  disabled = false,
  noLabel = false,
}: {
  memo: string;
  setMemo: (_: string) => void;
  disabled?: boolean;
  noLabel?: boolean;
}) => (
  <TextArea
    label={noLabel ? "" : "Memo"}
    value={memo}
    setValue={setMemo}
    disabled={disabled}
    size={"xs"}
  />
);

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TextArea } from "@components/ui";

export const MemoTextAreaPresenter = ({
  memo,
  setMemo,
  disabled = false,
}: {
  memo: string;
  setMemo: (_: string) => void;
  disabled?: boolean;
}) => (
  <TextArea
    label={"Memo"}
    value={memo}
    setValue={setMemo}
    disabled={disabled}
  />
);

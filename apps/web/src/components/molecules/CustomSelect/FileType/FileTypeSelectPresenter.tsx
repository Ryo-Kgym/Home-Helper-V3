/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { SelectData } from "@components/ui";
import type { FileType } from "@provider/file/FileType";
import { Select } from "@components/ui";

type FileTypeSelectPresenterProps = {
  value: FileType | null;
  onChange: (_: FileType | null) => void;
  fileTypes: SelectData[];
};
export const FileTypeSelectPresenter = ({
  value,
  onChange,
  fileTypes,
}: FileTypeSelectPresenterProps) => (
  <Select
    label={"FILE TYPE"}
    value={value?.toString() ?? null}
    onChange={(value) => {
      onChange(value as unknown as FileType);
    }}
    data={fileTypes}
    placeholder={"ファイル種類を選択してください"}
    withAsterisk
  />
);

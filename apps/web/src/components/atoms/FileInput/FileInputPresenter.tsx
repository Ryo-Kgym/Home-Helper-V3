/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { FileInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

type FileInputPresenterProps = {
  file: File | null;
  setFile: (_: File | null) => void;
};
export const FileInputPresenter = ({
  file,
  setFile,
}: FileInputPresenterProps) => (
  <FileInput
    value={file}
    onChange={setFile}
    label="UPLOAD FILE"
    placeholder="ファイルを選択してください"
    leftSection={<IconUpload size={24} />}
    size={"lg"}
    withAsterisk
    error={file === null ? "Required" : undefined}
  />
);

import { FileInput as MantineFileInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { FC, useState } from "react";

type Props = {
  onChange: (_: File | null) => void;
};

export const FileInput: FC<Props> = ({ onChange }) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <MantineFileInput
      value={file}
      onChange={(f) => {
        setFile(f);
        onChange(f);
      }}
      placeholder="ファイルを選択してください"
      leftSection={<IconUpload size={24} />}
      size={"lg"}
      withAsterisk
      error={file === null ? "Required" : undefined}
    />
  );
};

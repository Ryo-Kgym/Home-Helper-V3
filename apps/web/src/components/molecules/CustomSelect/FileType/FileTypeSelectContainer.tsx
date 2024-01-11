/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { SelectData } from "@components/ui";
import { FileType } from "@provider/file/FileType";
import { FileTypeSelectPresenter } from "./FileTypeSelectPresenter";

type FileTypeSelectContainerProps = {
  fileType: FileType | null;
  setFileType: (_: FileType | null) => void;
};
export const FileTypeSelectContainer = ({
  fileType,
  setFileType,
}: FileTypeSelectContainerProps) => {
  const fileTypes: SelectData[] = [
    {
      label: "Au Payカード",
      value: FileType.AU_PAY_CSV,
    },
    {
      label: "三井住友銀行（Amazonカード）",
      value: FileType.SMBC_CSV,
    },
    {
      label: "大分銀行 通帳",
      value: FileType.OITA_BANK_CSV,
    },
    {
      label: "楽天 カード",
      value: FileType.RAKUTEN_CARD_CSV,
    },
  ];

  return (
    <FileTypeSelectPresenter
      value={fileType}
      onChange={setFileType}
      fileTypes={fileTypes}
    />
  );
};

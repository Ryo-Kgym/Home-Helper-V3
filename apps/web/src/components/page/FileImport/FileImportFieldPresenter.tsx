/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { FileInput } from "@components/atoms/FileInput";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { DatePicker } from "@components/ui/date";
import { FileTypeSelect } from "@components/molecules/CustomSelect/FileType";
import { FileType } from "@provider/file/FileType";

type FileImportPresenterProps = {
  fileType: FileType | null;
  setFileType: (_: FileType | null) => void;
  uploadFile: File | null;
  setUploadFile: (_: File | null) => void;
  accountId: string | null;
  setAccountId: (_: string | null) => void;
  withdrawalDate: Date | null;
  changeWithdrawalDate: (_: Date | null) => void;
};
export const FileImportFieldPresenter = ({
  fileType,
  setFileType,
  uploadFile,
  setUploadFile,
  accountId,
  setAccountId,
  withdrawalDate,
  changeWithdrawalDate,
}: FileImportPresenterProps) => (
  <div className={"grid"}>
    <div className={"py-2"}>
      <FileTypeSelect fileType={fileType} setFileType={setFileType} />
    </div>
    <div className={"py-2"}>
      <FileInput file={uploadFile} setFile={setUploadFile} />
    </div>
    <div className={"py-2"}>
      <AccountSelect accountId={accountId} setAccountId={setAccountId} />
    </div>
    <div className={"py-2"}>
      <DatePicker
        value={withdrawalDate!}
        onChange={changeWithdrawalDate}
        required
        label={"WITHDRAWAL DATE"}
      />
    </div>
  </div>
);

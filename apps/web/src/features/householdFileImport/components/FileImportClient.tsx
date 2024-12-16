"use client";

import { FC, useState } from "react";

import { RadioButtonGroup } from "../../../components/ui/radiobutton/v5/RadioButtonGroup";
import { FileType } from "../types/fileType";
import { FileImportForm } from "./form/FileImportForm";
import { FileImportColumnMapping } from "./setting/FileImportColumnMapping";
import { FileImportSetting } from "./setting/FileImportSetting";

export const FileImportClient: FC = () => {
  const [fileType, setFileType] = useState<FileType>("creditCsv");

  return (
    <div className={"flex"}>
      <div className={"h-full w-96 space-y-10 p-2"}>
        <FileTypeInput fileType={fileType} setFileType={setFileType} />
        <FileImportSetting />
        <FileImportColumnMapping />
      </div>
      <div className={"h-full flex-1"}>
        <FileImportForm />
      </div>
    </div>
  );
};

const FileTypeInput: FC<{
  fileType: FileType;
  setFileType: (v: FileType) => void;
}> = ({ fileType, setFileType }) => {
  return (
    <RadioButtonGroup
      id="fileType"
      value={fileType}
      onChange={setFileType}
      label="ファイル種別"
      data={[
        { label: "クレジットカード", value: "creditCsv" },
        { label: "銀行", value: "bankCsv" },
      ]}
      orientation="vertical"
    />
  );
};

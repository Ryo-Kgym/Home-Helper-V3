"use client";

import { FC } from "react";

import { FileImportForm } from "./form/FileImportForm";
import { FileImportColumnMapping } from "./setting/FileImportColumnMapping";
import { FileImportSetting } from "./setting/FileImportSetting";

export const FileImportClient: FC = () => {
  return (
    <div className={"flex"}>
      <div className={"h-full w-96 space-y-10 p-2"}>
        <FileImportSetting />
        <FileImportColumnMapping />
      </div>
      <div className={"h-full flex-1"}>
        <FileImportForm />
      </div>
    </div>
  );
};

"use client";

import { FC } from "react";

import { FileImportForm } from "./FileImportForm";
import { FileImportSetting } from "./FileImportSetting";

export const FileImportClient: FC = () => {
  return (
    <div className={"flex"}>
      <div className={"h-full w-96"}>
        <FileImportSetting />
      </div>
      <div className={"h-full flex-1"}>
        <FileImportForm />
      </div>
    </div>
  );
};

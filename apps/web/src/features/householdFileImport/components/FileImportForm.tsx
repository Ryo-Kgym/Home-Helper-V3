"use client";

import { FC } from "react";
import { Button } from "@components/ui/v4/button";
import { FileInput } from "@components/ui/v5/file/FileInput";
import { useFileImportColumnMapping } from "@features/householdFileImport/client/useFileImportColumnMapping";
import { useImportFileRowAware } from "@features/householdFileImport/client/useImportFileRowAware";

import { useBuildTable } from "../client/useBuildTable";
import { useLoadFile } from "../client/useLoadFile";
import { useMessage } from "../client/useMessage";
import { LoadFileInputTable } from "./LoadFileInputTable";

export const FileImportForm: FC = () => {
  const { onChange, loadFile, setLoadFile } = useLoadFile();
  const { buildable, header, body } = useBuildTable(loadFile);
  const { message } = useMessage(loadFile);
  const { mapping } = useFileImportColumnMapping();
  const { importFileRowAware } = useImportFileRowAware();

  const amountIndex = mapping.amount;
  const total =
    body.reduce((acc, cur) => {
      if (amountIndex === null) return acc;

      const amount = Number(cur[amountIndex - 1]);
      // if (isNaN(amount)) return acc;

      return acc + amount;
    }, 0) ?? 0;

  const registerHandler = () => {
    console.log(importFileRowAware);
  };

  return (
    <div className={"space-y-5"}>
      <FileInput onChange={onChange} />
      <textarea
        className={"h-96 w-full border-2 border-solid p-2"}
        value={loadFile}
        onChange={(e) => {
          setLoadFile(e.target.value);
        }}
      />
      <div className={"text-red-500"}>
        {message.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
      </div>
      <LoadFileInputTable
        visible={!message.length && buildable}
        header={header}
        body={body}
      />
      <div className={"space-x-5 text-lg"}>
        <span>合計</span>
        <span>{total.toLocaleString()}</span>
      </div>
      <Button label={"登録"} clickHandler={registerHandler} type={"create"} />
    </div>
  );
};

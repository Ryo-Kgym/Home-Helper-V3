"use client";

import { FC, useState } from "react";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { DatePicker } from "@components/ui/date";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { FileInput } from "@components/ui/v5/file/FileInput";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useCreateImportFile } from "@features/householdFileImport/client/useCreateImportFile";
import { useFileImportColumnMapping } from "@features/householdFileImport/client/useFileImportColumnMapping";
import { useImportFileRowAware } from "@features/householdFileImport/client/useImportFileRowAware";

import { useBuildTable } from "../client/useBuildTable";
import { useLoadFile } from "../client/useLoadFile";
import { useMessage } from "../client/useMessage";
import { LoadFileInputTable } from "./LoadFileInputTable";

export const FileImportForm: FC = () => {
  const [withdrawalDate, setWithdrawalDate] = useState<Date>(new Date());
  const [accountId, setAccountId] = useState<string | null>(null);

  const { uploadFile, onChange, loadFile, setLoadFile } = useLoadFile();
  const { buildable, header, body } = useBuildTable(loadFile);
  const { message } = useMessage(loadFile);
  const { mapping } = useFileImportColumnMapping();
  const { importFileRowAware } = useImportFileRowAware();
  const { registerImported } = useCreateImportFile({
    fileType: "creditCard",
    fileName: uploadFile?.name ?? "",
  });

  const total =
    body.reduce((acc, cur) => {
      if (mapping.amount === null) return acc;

      const amount = Number(cur[mapping.amount - 1]);

      return acc + amount;
    }, 0) ?? 0;

  const registerHandler = async () => {
    try {
      console.log(importFileRowAware);
      await registerImported({
        withdrawalDate,
        accountId: accountId ?? "",
        loadData: Object.values(importFileRowAware).map((v) => ({
          ...v,
          iocomeType: IocomeType.Outcome,
        })),
      });
      notify("登録しました");
    } catch (e) {
      console.error(e);
      notify("登録に失敗しました");
    }
  };

  return (
    <div className={"space-y-5"}>
      <div className={"flex flex-row items-center space-x-5"}>
        <DatePicker value={withdrawalDate} onChange={setWithdrawalDate} />
        <AccountSelect
          accountId={accountId}
          setAccountId={setAccountId}
          noLabel
        />
        <FileInput onChange={onChange} />
      </div>
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

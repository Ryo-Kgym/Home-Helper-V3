"use client";

import { FC, useState } from "react";

import { Button } from "../../../../components/ui/button/v5";
import { DatePicker } from "../../../../components/ui/date";
import { AccountSelect } from "../../../../components/ui/select/AccountSelect";
import { notify } from "../../../../components/ui/v4/notify/notify";
import { FileInput } from "../../../../components/ui/v5/file/FileInput";
import { IocomeType } from "../../../../domain/model/household/IocomeType";
import { useBuildTable } from "../../client/useBuildTable";
import { useCreateImportFile } from "../../client/useCreateImportFile";
import { useFileImportColumnMapping } from "../../client/useFileImportColumnMapping";
import { useImportFileRowAware } from "../../client/useImportFileRowAware";
import { useLoadFile } from "../../client/useLoadFile";
import { useMessage } from "../../client/useMessage";
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
      if (!mapping?.amount) return acc;

      const amount = Number(cur[mapping.amount - 1]);

      return acc + amount;
    }, 0) ?? 0;

  const registerButtonDisabled =
    !accountId ||
    Object.keys(importFileRowAware).length === 0 ||
    Object.keys(importFileRowAware).length !== body.length;

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
      onChange(null);
      setLoadFile("");
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
      <Button
        label={"登録"}
        onClick={registerHandler}
        type={"create"}
        disabled={registerButtonDisabled}
      />
    </div>
  );
};

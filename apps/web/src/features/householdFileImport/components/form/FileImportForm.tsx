"use client";

import { FC, useEffect, useState } from "react";

import { Button } from "../../../../components/ui/button/v5";
import { DatePicker } from "../../../../components/ui/date";
import { AccountSelect } from "../../../../components/ui/select/AccountSelect";
import { FileInput } from "../../../../components/ui/v5/file/FileInput";
import { errorPopup, successPopup } from "../../../../function/successPopup";
import { useBuildTable } from "../../client/useBuildTable";
import { useImportFileRowAware } from "../../client/useImportFileRowAware";
import { useLoadFile } from "../../client/useLoadFile";
import { useMessage } from "../../client/useMessage";
import { ImportFileType } from "../../types/importFileType";
import { registerImported } from "../../useServer/registerImported";
import { LoadFileInputTable } from "./LoadFileInputTable";

type Props = {
  importFileType: ImportFileType;
};

export const FileImportForm: FC<Props> = ({ importFileType }) => {
  const [withdrawalDate, setWithdrawalDate] = useState<Date>(new Date());
  const [accountId, setAccountId] = useState<string>("");

  const { uploadFile, onChange, loadFile, setLoadFile } = useLoadFile();
  const { buildable, header, body } = useBuildTable(loadFile);
  const { message } = useMessage(loadFile);
  const { importFileRowAware, clearImportFileRowAware } =
    useImportFileRowAware();

  const total =
    Object.values(importFileRowAware).reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0) ?? 0;

  const registerHandler = async () => {
    if (!accountId) {
      errorPopup("口座を選択してください");
      return;
    }
    if (uploadFile === null) {
      errorPopup("ファイルを選択してください");
      return;
    }
    if (!Object.keys(importFileRowAware).length) {
      errorPopup("ファイルを読み込んでください");
      return;
    }
    if (
      Object.values(importFileRowAware).some((v) => !v.genreId || !v.categoryId)
    ) {
      errorPopup("読み込んだ明細のうち、未入力な項目があります");
      return;
    }

    try {
      console.log(importFileRowAware);
      console.log(body);

      const { count } = await registerImported({
        importFileType,
        fileName: uploadFile.name,
        withdrawalDate,
        accountId,
        loadData: Object.values(importFileRowAware),
      });
      successPopup(`${count}件の明細を登録しました`);
      onChange(null);
      setLoadFile("");
    } catch (e) {
      console.error(e);
      errorPopup(
        "登録に失敗しました。コンソールを開いて内容を確認してください。",
      );
    }
  };

  useEffect(
    () => {
      clearImportFileRowAware();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loadFile],
  );

  return (
    <div className={"space-y-5"}>
      <div className={"flex flex-row items-center space-x-5"}>
        <DatePicker value={withdrawalDate} onChange={setWithdrawalDate} />
        <AccountSelect
          accountId={accountId}
          onChange={setAccountId}
          withLabel
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
        importFileType={importFileType}
        visible={!message.length && buildable}
        header={header}
        body={body}
      />
      <div className={"space-x-5 text-lg"}>
        <span>合計</span>
        <span>{total.toLocaleString()}</span>
      </div>
      <Button label={"登録"} onClick={registerHandler} type={"create"} />
    </div>
  );
};

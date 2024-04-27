/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import type { TableProps } from "@components/atoms/Table";
import type { LoadFileProps } from "@components/page/FileImport/loadUploadFile";
import type { FileType } from "@provider/file/FileType";
import { useEffect, useState } from "react";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { FileImportButtonsPresenter } from "@components/page/FileImport/FileImportButtonsPresenter";
import { FileImportTablePresenter } from "@components/page/FileImport/FileImportTablePresenter";
import {
  calcTotalPrice,
  loadUploadFile,
} from "@components/page/FileImport/loadUploadFile";
import { IocomeType } from "@domain/model/household/IocomeType";
import { errorPopup, successPopup } from "@function/successPopup";
import { useCreateImportFile } from "@hooks/household/import_file/useCreateImportFile";

import { FileImportFieldPresenter } from "./FileImportFieldPresenter";

export const FileImportContainer = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [withdrawalDate, setWithdrawalDate] = useState<Date | null>(new Date());
  const [fileType, setFileType] = useState<FileType | null>(null);

  const [loadData, setLoadData] = useState<LoadFileProps[]>([]);

  const importDisabled =
    !uploadFile ||
    !accountId ||
    !withdrawalDate ||
    loadData.filter((d) => d.categoryId === null).length > 0;

  const registerDisabled =
    loadData.length == 0 ||
    loadData.filter((d) => d.categoryId === null).length > 0;

  const [opened, setOpened] = useState(false);
  const [initialValues, setInitialValues] = useState<LoadFileProps | null>(
    null,
  );

  useEffect(() => {
    console.log("[loadData]: ", loadData);
  }, [loadData]);

  const tableProps: TableProps[] = loadData
    .filter((d, index) => {
      // d.date がDate型でない場合はエラーを出力
      if (Number.isNaN(d.date.getTime())) {
        errorPopup(
          `日付が不正レコードを検知しました。行番号：${index}。コンソールで詳細をみてください。`,
        );
        console.error("日付が不正レコードを検知しました。: ", index, ":", d);
        return false;
      }

      return true;
    })
    .map((d) => {
      return {
        keyPrefix: "load",
        columns: [
          { value: d.date.toISOString().slice(0, 10), align: "center" },
          { value: d.note, align: "left" },
          {
            value: <FormatPrice iocomeType={d.iocomeType} price={d.price} />,
            align: "right",
          },
          { value: d.genreName, align: "left" },
          { value: d.categoryName, align: "left" },
        ],
        onClick: () => {
          setOpened(true);
          setInitialValues(d);
        },
      };
    });

  const { registerImported } = useCreateImportFile({
    fileType: fileType!,
    fileName: uploadFile?.name ?? "",
    accountId: accountId!,
    withdrawalDate: withdrawalDate!,
    loadData: loadData,
  });

  const loadClickHandler = async () => {
    setLoadData(
      await loadUploadFile({
        uploadFile: uploadFile!,
        fileType: fileType!,
      }),
    );
  };

  const clearClickHandler = () => {
    setUploadFile(null);
    setAccountId(null);
    setFileType(null);
    setLoadData([]);
  };

  const registerClickHandler = async () => {
    try {
      await registerImported();
      successPopup(`${loadData.length}件、登録しました`);
      clearClickHandler();
    } catch (e) {
      errorPopup("登録に失敗しました");
      console.error(e);
    }
  };

  return (
    <div className={"space-y-5 p-2"}>
      {loadData.length == 0 && (
        <FileImportFieldPresenter
          fileType={fileType}
          setFileType={setFileType}
          uploadFile={uploadFile}
          setUploadFile={setUploadFile}
          accountId={accountId}
          setAccountId={setAccountId}
          withdrawalDate={withdrawalDate}
          changeWithdrawalDate={setWithdrawalDate}
        />
      )}
      <FileImportButtonsPresenter
        importDisabled={importDisabled}
        registerDisabled={registerDisabled}
        importClickHandler={loadClickHandler}
        clearClickHandler={clearClickHandler}
        registerClickHandler={registerClickHandler}
      />
      {loadData.length > 0 && (
        <FileImportTablePresenter
          tableProps={tableProps}
          opened={opened}
          onClose={() => setOpened(false)}
          initialValues={initialValues!}
          loadData={loadData}
          setLoadData={setLoadData}
          income={calcTotalPrice(loadData, IocomeType.Income)}
          outcome={calcTotalPrice(loadData, IocomeType.Outcome)}
        />
      )}
    </div>
  );
};

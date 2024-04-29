/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ImportFileSettings } from "@oneforall/domain/schema/importFileSettingsSchema";
import { FileType } from "@provider/file/FileType";

const CsvFileSettingMap = new Map<FileType, ImportFileSettings>([
  [
    FileType.SMBC_CSV,
    {
      encodingTo: "UNICODE",
      encodingFrom: "SJIS",
      encodingType: "array",
      splitSeparator: "\r\n",
      headerRows: 1,
      footerRows: 4,
      quotation: "",
      splitter: ",",
    },
  ],
  [
    FileType.AU_PAY_CSV,
    {
      encodingTo: "UNICODE",
      encodingFrom: "SJIS",
      encodingType: "array",
      splitSeparator: "\r\n",
      headerRows: 1,
      footerRows: 1,
      quotation: '"',
      splitter: ",",
    },
  ],
  [
    FileType.OITA_BANK_CSV,
    {
      encodingTo: "UNICODE",
      encodingFrom: "SJIS",
      encodingType: "array",
      splitSeparator: "\r\n",
      headerRows: 1,
      footerRows: 1,
      quotation: "",
      splitter: ",",
    },
  ],
  [
    FileType.RAKUTEN_CARD_CSV,
    {
      encodingTo: "UNICODE",
      encodingFrom: "UTF8",
      encodingType: "array",
      splitSeparator: "\n",
      headerRows: 1,
      footerRows: 1,
      quotation: '"',
      splitter: ",",
    },
  ],
]);

export const getSetting = (fileType: FileType): ImportFileSettings => {
  return CsvFileSettingMap.get(fileType)!;
};

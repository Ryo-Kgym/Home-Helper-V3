/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { FileType } from "@provider/file/FileType";
import Encoding from "encoding-japanese";

const CsvFileSettingMap = new Map<FileType, CsvFileSetting>([
  [
    FileType.SMBC_CSV,
    {
      encodingTo: "UNICODE",
      encodingFrom: "SJIS",
      encodingType: "array",
      splitSeparator: "\r\n",
      headerRows: 1,
      footerRows: 4,
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
    },
  ],
]);

type CsvFileSetting = {
  encodingTo: Encoding.Encoding;
  encodingFrom: Encoding.Encoding;
  encodingType: any;
  splitSeparator: string;
  headerRows?: number;
  footerRows?: number;
  quotation?: string;
};

export const getSetting = (fileType: FileType): CsvFileSetting => {
  return CsvFileSettingMap.get(fileType)!;
};

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { FileType } from "@provider/file/FileType";
import { parseAuPayCsvLine } from "@provider/file/loader/csv/AuPayCsvLine";
import { parseOitaBankCsvLine } from "@provider/file/loader/csv/OitaBankCsvLine";
import { parseRakutenCardCsvLine } from "@provider/file/loader/csv/RakutenCardCsvLine";
import { parseSmbcCsvLine } from "@provider/file/loader/csv/SmbcCsvLine";

const CsvFileParseMap = new Map<FileType, (_: string) => any>([
  [FileType.SMBC_CSV, parseSmbcCsvLine],
  [FileType.AU_PAY_CSV, parseAuPayCsvLine],
  [FileType.OITA_BANK_CSV, parseOitaBankCsvLine],
  [FileType.RAKUTEN_CARD_CSV, parseRakutenCardCsvLine],
]);

/**
 * CSVの行をパースする
 * @param line
 * @param fileType
 */
export const parseCsv = (line: string, fileType: FileType): any => {
  return CsvFileParseMap.get(fileType)!(line);
};

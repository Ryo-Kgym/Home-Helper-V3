/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { FileType } from "@provider/file/FileType";
import { parseCsv } from "@provider/file/loader/csv/CsvFileParse";
import { getSetting } from "@provider/file/loader/csv/CsvFileSetting";
import Encoding from "encoding-japanese";

type loadFileArgs = {
  file: File;
  fileType: FileType;
};

/**
 * CSVファイルを読み込む
 * @param file
 * @param fileType
 */
export async function loadCsvFile({ file, fileType }: loadFileArgs) {
  const {
    encodingTo,
    encodingFrom,

    encodingType,
    splitSeparator,
    headerRows,
    footerRows,
    quotation,
  } = getSetting(fileType);

  try {
    const readFile = await file.stream().getReader().read();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error

    const csv = decodeCsv(readFile, encodingTo, encodingFrom, encodingType);
    const rows = separateRows(csv, splitSeparator, headerRows, footerRows);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return rows.map((line) => {
      if (quotation) line = line.replaceAll(quotation, "");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return parseCsv(line, fileType);
    });
  } catch (e) {
    console.error(e);
    return [];
  }
}

/**
 * CSVをデコードする
 * @param readFile
 * @param to
 * @param from
 * @param type
 */
export const decodeCsv = (
  readFile: ReadableStreamReadResult<Uint8Array>,
  to: Encoding.Encoding,
  from: Encoding.Encoding,
  type: never,
) => {
  const decoded = Encoding.convert(new Uint8Array(readFile.value!), {
    to: to,
    from: from,
    type: type,
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return Encoding.codeToString(decoded);
};

/**
 * CSVの行を分割する
 * @param csv
 * @param splitSeparator
 * @param headerRows
 * @param footerRows
 */
export const separateRows = (
  csv: string,
  splitSeparator: string,
  headerRows?: number,
  footerRows?: number,
) => {
  const rows = csv.split(splitSeparator);
  if (headerRows) rows.splice(0, headerRows);
  if (footerRows) rows.splice(rows.length - footerRows, footerRows);
  return rows;
};

import Encoding from "encoding-japanese";

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
  type: "array",
) => {
  const decoded = Encoding.convert(new Uint8Array(readFile.value!), {
    to: to,
    from: from,
    type: type,
  });
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

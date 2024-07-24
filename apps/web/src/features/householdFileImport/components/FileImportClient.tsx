"use client";

import { FC, useEffect, useState } from "react";
import { FileInput } from "@components/atoms/FileInput";
import { GenreSelect } from "@components/ui/Select/GenreSelect";
import { Table } from "@components/ui/v4/table";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useBuildTable } from "@features/householdFileImport/client/useBuildTable";
import { FileType } from "@provider/file/FileType";
import { getSetting } from "@provider/file/loader/csv/CsvFileSetting";
import { decodeCsv } from "@provider/file/loader/csv/loadCsvFile";

export const FileImportClient: FC = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [loadFile, setLoadFile] = useState<string>("");
  const [message, setMessage] = useState<string[]>([]);

  const { buildable, header, body } = useBuildTable(loadFile);

  const [genreIds, setGenreIds] = useState<string[]>([]);

  const fileType = FileType.AU_PAY_CSV;
  const { encodingTo, encodingFrom, encodingType } = getSetting(fileType);

  useEffect(() => {
    const fn = async () => {
      if (!uploadFile) {
        setLoadFile("");
        return;
      }

      const readFile = await uploadFile.stream().getReader().read();
      const csv = decodeCsv(readFile, encodingTo, encodingFrom, encodingType);
      setLoadFile(csv);
    };
    void fn();
  }, [uploadFile]);

  useEffect(() => {
    const separator = "\n" || "\r\n" || "\r";
    const rows = loadFile.split(separator);
    const headerColumns = rows[0]?.split(",").length ?? 0;

    setMessage(
      rows
        .filter((r) => r.split(",").length !== headerColumns)
        .map(
          (r, i) =>
            `行${i + 1}の列数が不正です。${r.split(",").length} !== ${headerColumns}\r`,
        ),
    );
  }, [loadFile]);

  return (
    <>
      <FileInput file={uploadFile} setFile={setUploadFile} />
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
      <Table>
        <Table.Header headerItems={header} />
        <Table.Body
          data={!message.length && buildable ? body : []}
          renderItem={(item, rowNumber) => (
            <>
              {item
                .map((c, i) => <Table.BodyTd key={i}>{c}</Table.BodyTd>)
                .concat(
                  <Table.BodyTd key={item.length}>
                    <GenreSelect
                      genreId={genreIds[rowNumber] ?? ""}
                      setGenreId={(v) => {
                        setGenreIds((prev) => {
                          const next = [...prev];
                          next[rowNumber] = v;
                          return next;
                        });
                      }}
                      iocomeType={IocomeType.Outcome}
                    />
                  </Table.BodyTd>,
                )
                .concat(
                  <Table.BodyTd key={item.length + 1}>
                    {"カテゴリ"}
                  </Table.BodyTd>,
                )}
            </>
          )}
        />
      </Table>
    </>
  );
};

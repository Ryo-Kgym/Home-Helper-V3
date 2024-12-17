import { FC, useEffect, useState } from "react";

import { MemoTextArea } from "../../../../components/molecules/CustomTextArea/Memo";
import { CategorySelect } from "../../../../components/ui/select/CategorySelect";
import { GenreSelect } from "../../../../components/ui/select/GenreSelect";
import { Table } from "../../../../components/ui/v4/table";
import { IocomeType } from "../../../../domain/model/household/IocomeType";
import { useFileImportColumnMapping } from "../../client/useFileImportColumnMapping";
import { useImportFileRowAware } from "../../client/useImportFileRowAware";
import { ImportFileType } from "../../types/importFileType";

type Props = {
  importFileType: ImportFileType;
  item: string[];
  rowNumber: number;
};

export const LoadFileInputRow: FC<Props> = ({
  importFileType,
  item,
  rowNumber,
}) => {
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [memo, setMemo] = useState<string>("");
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Outcome);
  const { mapping } = useFileImportColumnMapping();
  const { setImportFileRowAware } = useImportFileRowAware();

  useEffect(() => {
    setCategoryId(null);
  }, [genreId]);

  useEffect(
    () => {
      // FIXME それぞれの責務で分割すること
      switch (importFileType) {
        case "creditCsv": {
          if (!mapping.settlementDate) return;
          if (!mapping.amount) return;

          setImportFileRowAware(rowNumber, {
            date: new Date(item[mapping.settlementDate - 1] ?? ""),
            amount: Number(item[mapping.amount - 1]),
            memo: memo,
            genreId: genreId ?? "",
            categoryId: categoryId ?? "",
          });
          break;
        }
        case "bankCsv": {
          if (!mapping.date) return;
          if (!mapping.income) return;
          if (!mapping.outcome) return;

          setImportFileRowAware(rowNumber, {
            date: new Date(item[mapping.date - 1] ?? ""),
            amount: Number(
              item[
                iocomeType === IocomeType.Income
                  ? mapping.income - 1
                  : mapping.outcome - 1
              ],
            ),
            memo: memo,
            genreId: genreId ?? "",
            categoryId: categoryId ?? "",
          });
          break;
        }
        default: {
          ((_: never) => {
            // noop
          })(importFileType);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [categoryId, memo],
  );

  useEffect(() => {
    if (!mapping.income || !mapping.outcome) {
      return;
    }

    if (item[mapping.income - 1] !== "" && item[mapping.outcome - 1] === "") {
      setIocomeType(IocomeType.Income);
    }
    if (item[mapping.income - 1] === "" && item[mapping.outcome - 1] !== "") {
      setIocomeType(IocomeType.Outcome);
    }
  }, [item, mapping]);

  useEffect(
    () => {
      if (!mapping.memo) return;

      setMemo(item[mapping.memo - 1] ?? "");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapping.memo],
  );

  const hasNull = Object.values(mapping).some((v) => v === null);

  return (
    <>
      {item
        .map((c, i) => <Table.BodyTd key={i}>{c}</Table.BodyTd>)
        .concat(
          <Table.BodyTd key={`genre-${rowNumber}`}>
            <GenreSelect
              genreId={genreId}
              setGenreId={setGenreId}
              iocomeType={iocomeType}
              disabled={hasNull}
            />
          </Table.BodyTd>,
        )
        .concat(
          <Table.BodyTd key={`category-${rowNumber}`}>
            <CategorySelect
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              genreId={genreId}
              disabled={hasNull}
            />
          </Table.BodyTd>,
        )
        .concat(
          <Table.BodyTd key={`memo-${rowNumber}`}>
            <MemoTextArea
              memo={memo}
              setMemo={setMemo}
              noLabel
              disabled={hasNull}
            />
          </Table.BodyTd>,
        )}
    </>
  );
};

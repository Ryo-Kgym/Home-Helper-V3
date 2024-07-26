import { FC, useEffect, useState } from "react";
import { Table } from "@components/ui/v4/table";
import { CategorySelect } from "@components/ui/v5/select/CategorySelect";
import { GenreSelect } from "@components/ui/v5/select/GenreSelect";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useFileImportColumnMapping } from "@features/householdFileImport/client/useFileImportColumnMapping";
import { useImportFileRowAware } from "@features/householdFileImport/client/useImportFileRowAware";

type Props = {
  item: string[];
  rowNumber: number;
};

export const LoadFileInputRow: FC<Props> = ({ item, rowNumber }) => {
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const { mapping } = useFileImportColumnMapping();
  const { setImportFileRowAware } = useImportFileRowAware();

  useEffect(() => {
    setCategoryId(null);
  }, [genreId]);

  useEffect(
    () => {
      if (!mapping.settlementDate) return;
      if (!mapping.amount) return;
      if (!mapping.memo) return;

      setImportFileRowAware(rowNumber, {
        date: new Date(item[mapping.settlementDate - 1] ?? ""),
        amount: Number(item[mapping.amount - 1]),
        memo: item[mapping.memo - 1] ?? "",
        genreId: genreId ?? "",
        categoryId: categoryId ?? "",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [categoryId],
  );

  return (
    <>
      {item
        .map((c, i) => <Table.BodyTd key={i}>{c}</Table.BodyTd>)
        .concat(
          <Table.BodyTd key={`genre-${rowNumber}`}>
            <GenreSelect
              genreId={genreId}
              setGenreId={setGenreId}
              iocomeType={IocomeType.Outcome}
            />
          </Table.BodyTd>,
        )
        .concat(
          <Table.BodyTd key={`category-${rowNumber}`}>
            <CategorySelect
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              genreId={genreId}
            />
          </Table.BodyTd>,
        )}
    </>
  );
};

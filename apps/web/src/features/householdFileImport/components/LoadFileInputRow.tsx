import { FC, useEffect, useState } from "react";
import { Table } from "@components/ui/v4/table";
import { CategorySelect } from "@components/ui/v5/select/CategorySelect";
import { GenreSelect } from "@components/ui/v5/select/GenreSelect";
import { IocomeType } from "@domain/model/household/IocomeType";

type Props = {
  item: string[];
  rowNumber: number;
};

export const LoadFileInputRow: FC<Props> = ({ item, rowNumber }) => {
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  useEffect(() => {
    setCategoryId(null);
  }, [genreId]);

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

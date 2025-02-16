"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import { ValidityStatus } from "../../../components/atoms";
import { TableProps } from "../../../components/atoms/Table";
import {
  GenreType,
  getLabel as getGenreTypeLabel,
} from "../../../domain/model/household/GenreType";
import {
  IocomeType,
  getLabel as getIocomeTypeLabel,
} from "../../../domain/model/household/IocomeType";
import { GenreListPresenter } from "./GenreListPresenter";

type Props = {
  genreList: {
    id: string;
    genreName: string;
    genreType: GenreType;
    iocomeType: IocomeType;
    displayOrder: number;
    validFlag: boolean;
  }[];
};

export const GenreListContainer: FC<Props> = ({ genreList }) => {
  const { push } = useRouter();

  const tablePropsList: TableProps[] =
    genreList.map(
      ({
        id: genreId,
        genreName,
        genreType,
        iocomeType,
        displayOrder,
        validFlag,
      }) => ({
        keyPrefix: "genre",
        columns: [
          { value: genreName },
          {
            value: getGenreTypeLabel(genreType as GenreType),
            align: "center",
          },
          {
            value: getIocomeTypeLabel(iocomeType as IocomeType),
            align: "center",
          },
          {
            value: <ValidityStatus value={validFlag ?? true} />,
            align: "center",
          },
          { value: displayOrder, align: "right" },
        ],
        onClick: () => {
          push(`/household/setting/genre/edit/${genreId}`);
        },
      }),
    ) ?? [];

  return <GenreListPresenter tablePropsList={tablePropsList} />;
};

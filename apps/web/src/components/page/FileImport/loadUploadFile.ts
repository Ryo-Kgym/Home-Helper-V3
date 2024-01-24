/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { AuPayCsvLine } from "@provider/file/loader/csv/AuPayCsvLine";
import type { OitaBankCsvLine } from "@provider/file/loader/csv/OitaBankCsvLine";
import type { RakutenCardCsvLine } from "@provider/file/loader/csv/RakutenCardCsvLine";
import type { SmbcCsvLine } from "@provider/file/loader/csv/SmbcCsvLine";
import { IocomeType } from "@domain/model/household/IocomeType";
import { FileType } from "@provider/file/FileType";
import { loadCsvFile } from "@provider/file/loader/csv/loadCsvFile";

type loadUploadFileArgs = {
  uploadFile: File;
  fileType: FileType;
};
export const loadUploadFile = async ({
  uploadFile,
  fileType,
}: loadUploadFileArgs) => {
  try {
    const res = await loadCsvFile({
      file: uploadFile,
      fileType: fileType,
    });

    const converter = refillMap.get(fileType);
    if (!converter) {
      new Error("not found converter");
    }

    return (
      res.map((r) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error

        return converter(r);
      }) ?? []
    );
  } catch (e) {
    console.error(e);
    return [] as LoadFileProps[];
  }
};

export type LoadFileProps = {
  date: Date;
  note: string;
  price: number;
  iocomeType: IocomeType;
  genreId: string | null;
  genreName: string | null;
  categoryId: string | null;
  categoryName: string | null;
};

export const calcTotalPrice = (
  props: LoadFileProps[],
  iocomeType: IocomeType,
): number | undefined =>
  props
    .filter((l) => l.categoryId)
    .filter((l) => l.iocomeType === iocomeType)
    .map((l) => l.price)
    .reduce((a, b) => a + b, 0);

const refillMap = new Map<FileType, (line: never) => LoadFileProps>([
  [
    FileType.SMBC_CSV,
    (line: SmbcCsvLine): LoadFileProps => ({
      date: line.date(),
      note: line.note() + " at " + line.shopName(),
      price: line.price(),
      iocomeType: IocomeType.Outcome,
      genreId: null,
      genreName: null,
      categoryId: null,
      categoryName: null,
    }),
  ],
  [
    FileType.AU_PAY_CSV,
    (line: AuPayCsvLine): LoadFileProps => ({
      date: line.date(),
      note: line.note() + " at " + line.shopName(),
      price: line.price(),
      iocomeType: IocomeType.Outcome,
      genreId: null,
      genreName: null,
      categoryId: null,
      categoryName: null,
    }),
  ],
  [
    FileType.OITA_BANK_CSV,
    (line: OitaBankCsvLine): LoadFileProps => ({
      date: line.date(),
      note: line.transactionType() + " " + line.note(),
      price: line.paymentPrice() ?? line.depositPrice() ?? 0,
      iocomeType: line.paymentPrice() ? IocomeType.Outcome : IocomeType.Income,
      genreId: null,
      genreName: null,
      categoryId: null,
      categoryName: null,
    }),
  ],
  [
    FileType.RAKUTEN_CARD_CSV,
    (line: RakutenCardCsvLine): LoadFileProps => ({
      date: line.useDate(),
      note: line.useShopItem(),
      price: line.payTotal(),
      iocomeType: IocomeType.Outcome,
      genreId: null,
      genreName: null,
      categoryId: null,
      categoryName: null,
    }),
  ],
]);

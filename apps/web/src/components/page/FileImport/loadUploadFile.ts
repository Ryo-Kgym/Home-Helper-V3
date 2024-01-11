/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { IocomeType } from "@domain/model/household/IocomeType";
import { FileType } from "@provider/file/FileType";
import { AuPayCsvLine } from "@provider/file/loader/csv/AuPayCsvLine";
import { loadCsvFile } from "@provider/file/loader/csv/loadCsvFile";
import { OitaBankCsvLine } from "@provider/file/loader/csv/OitaBankCsvLine";
import { RakutenCardCsvLine } from "@provider/file/loader/csv/RakutenCardCsvLine";
import { SmbcCsvLine } from "@provider/file/loader/csv/SmbcCsvLine";

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
    const refilledColumns = res.map((r) => RefillMap.get(fileType)!(r));
    return refilledColumns;
  } catch (e) {
    console.error(e);
    return [];
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
): number | undefined => {
  return props
    .filter((l) => l.categoryId)
    .filter((l) => l.iocomeType === iocomeType)
    .map((l) => l.price!)
    .reduce((a, b) => a + b, 0);
};

const RefillMap = new Map<FileType, (_: any) => LoadFileProps>([
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

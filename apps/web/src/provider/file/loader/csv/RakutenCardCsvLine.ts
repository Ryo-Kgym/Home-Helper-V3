/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

export interface RakutenCardCsvLine {
  // 利用日 yyyy/mm/dd
  useDate(): Date;

  // 利用店名・商品名
  useShopItem(): string;

  // 利用者 ほぼ「本人」
  user(): string;

  // 支払方法 1回払い など
  paymentMethod(): string;

  // 利用金額
  usePrice(): number;

  // 支払手数料
  payFee(): number;

  // 支払総額
  payTotal(): number;

  // M月支払金額
  thisMonthPay(): number;

  // M+1月繰越残高
  nextMonthBalance(): number;

  // 新規サイン *
  newSign(): string;
}

export const parseRakutenCardCsvLine = (line: string): RakutenCardCsvLine => {
  const splitLine = line.split(",");

  return {
    useDate: () => new Date(splitLine[0]?.replaceAll("/", "-")),
    useShopItem: () => splitLine[1],
    user: () => splitLine[2],
    paymentMethod: () => splitLine[3],
    usePrice: () => Number(splitLine[4]),
    payFee: () => Number(splitLine[5]),
    payTotal: () => Number(splitLine[6]),
    thisMonthPay: () => Number(splitLine[7]),
    nextMonthBalance: () => Number(splitLine[8]),
    newSign: () => splitLine[9],
  };
};

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { IncomeDetail } from "@gateway/side_job/income/incomeDetail";

export const getIncomeList = async () => {
  return {
    data: {
      incomeDetails,
    },
  };
};

const incomeDetails: IncomeDetail[] = [
  {
    id: "1",
    date: new Date(),
    categoryName: "カテゴリー1",
    genreName: "ジャンル1",
    accountName: "口座1",
    amount: 1000,
    memo: "メモ1",
  },
  {
    id: "2",
    date: new Date(),
    categoryName: "カテゴリー2",
    genreName: "ジャンル2",
    accountName: "口座2",
    amount: 2000,
    memo: "メモ2",
  },
  {
    id: "3",
    date: new Date(),
    categoryName: "カテゴリー3",
    genreName: "ジャンル3",
    accountName: "口座3",
    amount: 3000,
    memo: "メモ3",
  },
  {
    id: "4",
    date: new Date(),
    categoryName: "カテゴリー4",
    genreName: "ジャンル4",
    accountName: "口座4",
    amount: 4000,
    memo: "メモ4",
  },
  {
    id: "5",
    date: new Date(),
    categoryName: "カテゴリー5",
    genreName: "ジャンル5",
    accountName: "口座5",
    amount: 5000,
    memo: "メモ5",
  },
  {
    id: "6",
    date: new Date(),
    categoryName: "カテゴリー6",
    genreName: "ジャンル6",
    accountName: "口座6",
    amount: 6000,
    memo: "メモ6",
  },
];

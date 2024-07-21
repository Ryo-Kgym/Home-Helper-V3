import { GenreType } from "@domain/model/household/GenreType";
import { IocomeType } from "@domain/model/household/IocomeType";
import { PageSourceBalanceChartQuery } from "@v3/graphql/household/type";

import { CategoryChartData } from "../types";

export const convertToCategoryChartData = (
  data: PageSourceBalanceChartQuery,
): CategoryChartData => {
  const params = aggregateCategoryData(data);

  return Object.entries(params).reduce<CategoryChartData>((acc, [, cur]) => {
    if (!acc[cur.categoryId]) {
      return {
        ...acc,
        [cur.categoryId]: {
          categoryName: cur.categoryName,
          genreName: cur.genreName,
          iocomeType: cur.iocomeType,
          genreType: cur.genreType,
          isTransfer: cur.isTransfer,
          monthlyTotal: {
            [cur.yearMonth]: cur.total,
          },
        },
      };
    }

    if (!acc[cur.categoryId]?.monthlyTotal[cur.yearMonth]) {
      return {
        ...acc,
        [cur.categoryId]: {
          ...acc[cur.categoryId],
          categoryName: cur.categoryName,
          genreName: cur.genreName,
          iocomeType: cur.iocomeType,
          genreType: cur.genreType,
          isTransfer: cur.isTransfer,
          monthlyTotal: {
            ...acc[cur.categoryId]?.monthlyTotal,
            [cur.yearMonth]: cur.total,
          },
        },
      };
    }

    return {
      ...acc,
      [cur.categoryId]: {
        ...acc[cur.categoryId],
        categoryName: cur.categoryName,
        genreName: cur.genreName,
        iocomeType: cur.iocomeType,
        genreType: cur.genreType,
        isTransfer: cur.isTransfer,
        monthlyTotal: {
          ...acc[cur.categoryId]?.monthlyTotal,
          [cur.yearMonth]:
            (acc[cur.categoryId]?.monthlyTotal[cur.yearMonth] ?? 0) + cur.total,
        },
      },
    };
  }, {});
};

/**
 * @private
 */
export const aggregateCategoryData = (
  data: PageSourceBalanceChartQuery,
): AggregateCategoryDataType =>
  data?.detailView.reduce<AggregateCategoryDataType>((acc, cur) => {
    const yearMonth = cur.settlementDate.slice(0, 7);
    const key = cur.category?.id + "__" + yearMonth;

    if (!acc[key]) {
      return {
        ...acc,
        [key]: {
          categoryId: cur.category?.id ?? "",
          categoryName: cur.category?.name ?? "",
          genreName: cur.genre?.name ?? "",
          iocomeType: cur.iocomeType as IocomeType,
          genreType: cur.genre?.genreType as GenreType,
          isTransfer:
            cur.category?.id === data?.transferCategory?.incomeCategoryId ||
            cur.category?.id === data?.transferCategory?.outcomeCategoryId,
          yearMonth,
          total: cur.amount,
        },
      };
    }

    return {
      ...acc,
      [key]: {
        categoryId: cur.category?.id ?? "",
        categoryName: cur.category?.name ?? "",
        genreName: cur.genre?.name ?? "",
        iocomeType: cur.iocomeType as IocomeType,
        genreType: cur.genre?.genreType as GenreType,
        isTransfer:
          cur.category?.id === data?.transferCategory?.incomeCategoryId ||
          cur.category?.id === data?.transferCategory?.outcomeCategoryId,
        yearMonth,
        total: acc[key].total + cur.amount,
      },
    };
  }, {});

type AggregateCategoryDataType = Record<
  string, // categoryId__yyyy-mm
  {
    categoryId: string;
    categoryName: string;
    genreName: string;
    iocomeType: IocomeType;
    genreType: GenreType;
    isTransfer: boolean;
    yearMonth: string;
    total: number;
  }
>;

import {
  // eslint-disable-next-line import-access/jsdoc
  aggregateCategoryData,
  convertToCategoryChartData,
} from "./convertToCategoryChartData";

describe("convertToCategoryChartData", () => {
  test("期待通りに処理されること", () => {
    const params: Parameters<typeof convertToCategoryChartData>[0] = {
      detailView: [
        {
          __typename: "HouseholdAllDetailView",
          withdrawalDate: "2023-08-01",
          amount: 100,
          category: {
            id: "c1",
            name: "カテゴリ1",
          },
          genre: {
            id: "g1",
            name: "ジャンル1",
          },
        },
        {
          __typename: "HouseholdAllDetailView",
          withdrawalDate: "2023-08-02",
          amount: 50,
          category: {
            id: "c1",
            name: "カテゴリ1",
          },
          genre: {
            id: "g1",
            name: "ジャンル1",
          },
        },
        {
          __typename: "HouseholdAllDetailView",
          withdrawalDate: "2023-08-03",
          amount: 50,
          category: {
            id: "c2",
            name: "カテゴリ2",
          },
          genre: {
            id: "g2",
            name: "ジャンル2",
          },
        },
        {
          __typename: "HouseholdAllDetailView",
          withdrawalDate: "2023-09-01",
          amount: 100,
          category: {
            id: "c1",
            name: "カテゴリ1",
          },
          genre: {
            id: "g1",
            name: "ジャンル1",
          },
        },
        {
          __typename: "HouseholdAllDetailView",
          withdrawalDate: "2023-09-02",
          amount: 300,
          category: {
            id: "c1",
            name: "カテゴリ1",
          },
          genre: {
            id: "g1",
            name: "ジャンル1",
          },
        },
      ],
    };

    const actual = aggregateCategoryData(params);
    const actual2 = convertToCategoryChartData(params);

    expect(actual).toEqual({
      "c1__2023-08": {
        categoryId: "c1",
        categoryName: "カテゴリ1",
        genreName: "ジャンル1",
        yearMonth: "2023-08",
        total: 150,
      },
      "c2__2023-08": {
        categoryId: "c2",
        categoryName: "カテゴリ2",
        genreName: "ジャンル2",
        yearMonth: "2023-08",
        total: 50,
      },
      "c1__2023-09": {
        categoryId: "c1",
        categoryName: "カテゴリ1",
        genreName: "ジャンル1",
        yearMonth: "2023-09",
        total: 400,
      },
    });

    expect(actual2).toEqual({
      c1: {
        categoryName: "カテゴリ1",
        genreName: "ジャンル1",
        monthlyTotal: {
          "2023-08": 150,
          "2023-09": 400,
        },
      },
      c2: {
        categoryName: "カテゴリ2",
        genreName: "ジャンル2",
        monthlyTotal: {
          "2023-08": 50,
        },
      },
    });
  });
});

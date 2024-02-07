export const paths = {
  app: "/",
  household: {
    dashboard: "/household/dashboard" as "/",
    account: "/household/account" as "/",
    calendar: ({ date }: { date: Date }) =>
      `/household/calendar/${date.toISOString().slice(0, 10)}` as "/",
    registerDaily: "/household/register" as "/",
    daily: ({ id }: { id: string }) => `/household/detail/daily/${id}` as "/",
    creditCardDetail: ({ id }: { id: string }) =>
      `/household/detail/creditCard/${id}` as "/",
    detailListByAccount: ({ accountId }: { accountId: string }) =>
      `/household/detailList/account/${accountId}` as "/",
    detailListByCreditCardSummary: ({ summaryId }: { summaryId: string }) =>
      `/household/detailList/creditCardSummary/${summaryId}` as "/",
    categoryRanking: ({ date }: { date: Date }) =>
      `/household/detailList/categoryRanking/${date
        .toISOString()
        .slice(0, 10)}` as "/",
    rankCategoryYearly: ({ date }: { date: Date }) =>
      `/household/rank/category/yearly/${date
        .toISOString()
        .slice(0, 10)}` as "/",
    detailListByCategory: ({
      year,
      categoryId,
    }: {
      year: Date;
      categoryId: string;
    }) =>
      `/household/rank/category/yearly/${year
        .toISOString()
        .slice(0, 10)}/${categoryId}` as "/",
    setting: {
      root: "/household/setting" as "/",
      dashboard: "/household/setting/dashboard" as "/",
    },
  },
} as const;

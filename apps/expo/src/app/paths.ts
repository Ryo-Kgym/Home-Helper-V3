export const paths = {
  app: "/",
  household: {
    dashboard: "/household/dashboard",
    account: "/household/account",
    calendar: (date: Date) =>
      `/household/calendar/${date.toISOString().slice(0, 10)}`,
    registerDaily: "/household/register" as "/",
    daily: (id: string) => `/household/detail/daily/${id}`,
    creditCardDetail: (id: string) => `/household/detail/creditCard/${id}`,
    detailListByAccount: (accountId: string) =>
      `/household/detailList/account/${accountId}`,
    detailListByCreditCardSummary: (summaryId: string) =>
      `/household/detailList/creditCardSummary/${summaryId}`,
    categoryRanking: (date: Date) =>
      `/household/detailList/categoryRanking/${date
        .toISOString()
        .slice(0, 10)}`,
    rankCategoryYearly: (date: Date) =>
      `/household/rank/category/yearly/${date.toISOString().slice(0, 10)}`,
  },
};

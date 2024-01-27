export const paths = {
  app: "/",
  household: {
    dashboard: "/household/dashboard",
    account: "/household/account",
    calendar: (date: Date) =>
      `/household/calendar/${date.toISOString().slice(0, 10)}`,
    daily: (id: string) => `/household/detail/daily/${id}`,
    creditCardDetail: (id: string) => `/household/detail/creditCard/${id}`,
    detailListByAccount: (accountId: string) =>
      `/household/detailList/account/${accountId}`,
    categoryRanking: (date: Date) =>
      `/household/detailList/categoryRanking/${date
        .toISOString()
        .slice(0, 10)}`,
  },
};

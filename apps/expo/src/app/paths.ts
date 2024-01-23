export const paths = {
  app: "/",
  household: {
    dashboard: "/household/dashboard",
    account: "/household/account",
    calendar: (date: Date) =>
      `/household/calendar/${date.toISOString().slice(0, 10)}`,
    daily: (id: string) => `/household/detail/daily/${id}`,
    detailListByAccount: (accountId: string) =>
      `/household/detailList/account/${accountId}`,
  },
};

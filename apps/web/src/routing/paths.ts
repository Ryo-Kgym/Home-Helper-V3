export const paths = {
  group: {
    select: "/group",
  },
  household: {
    dashboard: "/household/dashboard",
    balanceChart: "/household/chart",
    categoryChart: "/household/chart?type=category",
    search: "/household/search",
    account: "/household/account",
    creditCard: "/household/creditCard",
    fileImport: "/household/fileImport",
    setting: {
      genre: "/household/setting/genre",
      category: "/household/setting/category",
      categoryAdd: "/household/setting/category/add",
      tag: "/household/setting/tag",
    },
    creditDetail: {
      edit: ({
        creditCardSummaryId,
        creditDetailId,
      }: {
        creditCardSummaryId: string;
        creditDetailId: string;
      }) =>
        `/household/creditCard/${creditCardSummaryId}/edit/${creditDetailId}`,
      add: ({ creditCardSummaryId }: { creditCardSummaryId: string }) =>
        `/household/creditCard/${creditCardSummaryId}/add`,
    },
  },
  business: {
    timecard: "/business/timecard",
  },
};

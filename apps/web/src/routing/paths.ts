export const paths = {
  group: {
    select: "/group",
  },
  household: {
    dashboard: "/household/dashboard",
    balanceChart: "/household/chart",
    categoryChart: "/household/chart?type=category",
    account: "/household/account",
    creditCard: "/household/creditCard",
    fileImport: "/household/fileImport",
    setting: "/household/setting",
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
};

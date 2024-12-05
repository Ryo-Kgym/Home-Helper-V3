export const paths = {
  app: {
    create: "/app/create",
    show: ({ id }: { id: string }) => `/app/show/${id}`,
    setting: ({ id }: { id: string }) => `/app/setting/${id}`,
    import: ({ id }: { id: string }) => `/app/import/${id}`,
    chart: ({ id }: { id: string }) => `/app/chart/${id}`,
  },
  view: {
    create: "/view/create",
    show: ({ id }: { id: string }) => `/view/show/${id}`,
    modify: ({ id }: { id: string }) => `/view/modify/${id}`,
  },
  record: {
    show: ({ id }: { id: string }) => `/record/show/${id}`,
  },
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
  },
};

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
  group: {
    select: "/group",
  },
};

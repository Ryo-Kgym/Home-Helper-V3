export const paths = {
  app: {
    create: "/app/create",
    show: ({ id }: { id: string }) => `/app/show/${id}`,
    setting: ({ id }: { id: string }) => `/app/setting/${id}`,
    import: ({ id }: { id: string }) => `/app/import/${id}`,
  },
  view: {
    create: "/view/create",
  },
  group: {
    select: "/group",
  },
};

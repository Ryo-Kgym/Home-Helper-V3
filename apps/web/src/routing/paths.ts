export const paths = {
  app: {
    create: "/app/create",
    show: ({ id }: { id: string }) => `/app/show/${id}`,
    setting: ({ id }: { id: string }) => `/app/setting/${id}`,
  },
  group: {
    select: "/group/select",
  },
};

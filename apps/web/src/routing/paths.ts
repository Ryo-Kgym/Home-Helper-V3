export const paths = {
  app: {
    create: "/app/create",
    show: ({ id }: { id: string }) => `/app/show/${id}`,
  },
  group: {
    select: "/group/select",
  },
};

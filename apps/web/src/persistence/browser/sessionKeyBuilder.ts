export const sessionKeyBuilder = (params: {
  name: string;
  groupId: string;
}) => {
  return `${params.groupId}-${params.name}`;
};

export const isEquals = <T>(a: T, b: T): boolean => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return _.isEqual(a, b);
};

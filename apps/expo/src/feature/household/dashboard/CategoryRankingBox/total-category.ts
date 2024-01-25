type BaseType = {
  categoryId: string;
  categoryName: string;
};

type WithAmountType = { amount: number } & BaseType;

export const totalCategory = <T extends WithAmountType>({
  details,
}: {
  details: T[];
}): WithAmountType[] => {
  const categoryList = details
    .filter(
      (x, i, arr) => arr.findIndex((y) => y.categoryId === x.categoryId) === i,
    )
    .map(
      ({ categoryId, categoryName }) =>
        ({
          categoryId,
          categoryName,
        }) as BaseType,
    );

  return categoryList.map((c) => {
    const total = details
      .filter((d) => d.categoryId === c.categoryId)
      .reduce((acc, cur) => acc + cur.amount, 0);

    return {
      ...c,
      amount: total,
    };
  });
};

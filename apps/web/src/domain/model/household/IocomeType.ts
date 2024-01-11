export enum IocomeType {
  // eslint-disable-next-line no-unused-vars
  Income = "INCOME", // 収入
  // eslint-disable-next-line no-unused-vars
  Outcome = "OUTCOME", // 支出
}

const labelMap = new Map<IocomeType, string>([
  [IocomeType.Income, "収入"],
  [IocomeType.Outcome, "支出"],
]);

export function getLabel(iocomeType: IocomeType): string {
  return labelMap.get(iocomeType) ?? "";
}

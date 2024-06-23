export type SqlResultBase = Record<string, unknown>;
export type SqlResult<T extends SqlResultBase> = T[];

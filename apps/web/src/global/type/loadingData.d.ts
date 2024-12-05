export type LoadingData<T extends object> =
  | {
      loading: false;
      data: T;
    }
  | {
      loading: true;
      data: undefined;
    };

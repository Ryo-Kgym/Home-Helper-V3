export type BusinessUsecase<I, O> = {
  handle: (input: I) => Promise<O>;
};

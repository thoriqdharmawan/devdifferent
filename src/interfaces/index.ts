export interface ReturnDataMany<T> {
  data: {
    results: T[];
  };
}

export interface ResponseDataSingle<T> {
  data: T;
}

export type FetchState<T> =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: T };

export function assertNever(x: never): never {
  throw new Error(`Beklenmeyen durum değeri: ${JSON.stringify(x)}`);
}
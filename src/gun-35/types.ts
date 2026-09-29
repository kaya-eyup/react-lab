export type FetchState<T> =
  | { status: "idle" }
  | { status: "loading"; previous: T | null }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

export class HttpError extends Error {
  readonly status: number;
  constructor(status: number) {
    super(`HTTP ${status}`);
    this.name = "HttpError";
    this.status = status;
  }
}

export function assertNever(value: never): never {
  throw new Error(`Beklenmeyen bir durum (status) yakalandı: ${value}`);
}

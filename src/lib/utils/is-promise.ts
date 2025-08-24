export function isPromise<T = unknown>(v: unknown): v is Promise<T> {
  return !!v && (typeof v === 'object' || typeof v === 'function')
    && typeof (v as any).then === 'function';
}
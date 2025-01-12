export function removeFalsyFields<T extends Record<string, any>>(obj: T): Partial<T> {
    return Object.fromEntries(Object.entries(obj).filter(([_, value]) => Boolean(value))) as Partial<T>;
}

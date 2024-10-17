interface FetchOptions extends RequestInit {
    timeout?: number;
}

const BASETIMEOUT = 8000;
export async function fetcher<T>(url: string, options: FetchOptions = {}): Promise<T> {
    const { timeout = BASETIMEOUT, ...fetchOptions } = options;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { ...fetchOptions, signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`http error with status: ${response.status}`);
        }

        const data: T = await response.json();

        return data;
    } catch (error) {
        throw new Error(`Fetch error: ${(error as Error).message}`);
    }
}

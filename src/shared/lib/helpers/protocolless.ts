export const protocolless = (str: string): string => {
    return str.replace(/^[a-z]+:\/\//i, '');
};
export const stringToColor = (str: string): string => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < str.length; i += 1) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        const pastelValue = Math.floor(value * 0.25 + 255 * 0.75);
        color += `00${pastelValue.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
};

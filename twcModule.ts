/**
 * Interface for the object passed as an argument to the twc function.
 */
export interface TwcObject {
    [key: string]: string | TwcObject;
}

/**
 * Converts an object into a formatted text string.
 * @param obj The object to convert.
 * @param prefix Optional prefix for properties.
 * @returns The resulting text string.
 */
export function twc(obj: TwcObject, prefix = ''): string {
    let result = '';
    if (obj.default) { 
        result = (prefix !== '' ? `${obj['default']} ${prefix}` : obj['default']) + ' ';
    }

    for (const key in obj) {
        if (key !== 'default') {
            const value = obj[key];
            result += typeof value === 'object' && !Array.isArray(value)
                ? twc(value, `${prefix}${key}:`)
                : `${value}`.replace(/([^\s]+)/g, `${prefix}${key}:$1`) + ' ';
        }
    }

    return result;
}
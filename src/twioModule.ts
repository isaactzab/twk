/**
 * Interface for the object passed as an argument to the twio function.
 */
export interface TwioObject {
    [key: string]: string | TwioObject;
}

/**
 * Converts an object into a text plain tailwind classes with prefixes.
 * @param obj The object to convert.
 * @param prefix Optional prefix for properties.
 * @returns The resutling text plain tailwind classes with prefixes.
 */
export function twio(obj: TwioObject, prefix = ''): string {
    let result = '';
    if (obj.default) { 
        result = (prefix.length > 0 ? `${obj['default']}`.replace(/([^\s]+)/g, `${prefix}$1`) + '' : obj['default']) + ' ';
    }

    for (const key in obj) {
        if (key !== 'default') {
            const value = obj[key];
            result += typeof value === 'object' && !Array.isArray(value)
                ? twio(value, `${prefix}${key}:`)
                : `${value}`.replace(/([^\s]+)/g, `${prefix}${key}:$1`) + ' ';
        }
    }

    return result.trim();
}
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
export function twc(obj: TwcObject, prefix?: string): string;
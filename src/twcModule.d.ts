/**
 * Interface for the object passed as an argument to the twc function.
 */
export interface TwcObject {
    [key: string]: string | TwcObject;
}

/**
 * Converts an object into a text plain tailwind classes with prefixes.
 * @param obj The object to convert.
 * @param prefix Optional prefix for properties.
 * @returns The resutling text plain tailwind classes with prefixes.
 */
export function twc(obj: TwcObject, prefix?: string): string;
/**
 * Interface for the object passed as an argument to the twk function.
 */
export interface TwkObject {
    [key: string]: string | TwkObject;
}

/**
 * Converts an object into a text plain tailwind classes with prefixes.
 * @param obj The object to convert.
 * @param prefix Optional prefix for properties.
 * @returns The resutling text plain tailwind classes with prefixes.
 */
export function twk(obj: TwkObject, prefix?: string): string;
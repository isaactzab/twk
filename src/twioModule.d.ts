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
export function twio(obj: TwioObject, prefix?: string): string;
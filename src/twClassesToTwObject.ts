import { TwkObject } from "./twkModule";

const isString = (s: unknown): boolean => typeof s === 'string';

/**
 * Assigns a value to a nested object based on a given path.
 * @param target The target object to modify.
 * @param value The value to assign.
 * @param path An array representing the path to the property.
 * @returns The modified target object.
 */
function assignValue(target: Record<string, unknown>, value: unknown, path: string[]): Record<string, unknown> {
    let current = target;

    for (let i = 0; i <= path.length - 1; i++) {
        const key = path[i];
        const isLastElement = i === path.length - 1;

        if (!current[key]) {
            current[key] = isLastElement ? value : {};
        } else if (isString(current[key])) {
            current[key] = isLastElement ? `${current[key]} ${value}` : { default: current[key] };
        }

        if (!isLastElement) {
            current = current[key] as Record<string, unknown>;
        }
    }

    return target;
}

/**
 * Converts Tailwind CSS classes to an object representation.
 * @param twClasses A space-separated string of Tailwind CSS classes.
 * @returns An object representing the classes.
 */
export const TWClassesToTWObject = (twClasses: string):  TwkObject => {
    const results:  TwkObject = {};
    twClasses.split(' ').map((w) => {
        let classPrefixPath = w.split(':');
        const finalClass = classPrefixPath.pop();
        classPrefixPath = classPrefixPath.length > 0 ? classPrefixPath : ['default'];

        assignValue(results, finalClass, classPrefixPath);
    });

    return results;
};

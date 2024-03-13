"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twc = void 0;
/**
 * Converts an object into a formatted text string.
 * @param obj The object to convert.
 * @param prefix Optional prefix for properties.
 * @returns The resulting text string.
 */
function twc(obj, prefix = '') {
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
exports.twc = twc;
//# sourceMappingURL=twcModule.js.map
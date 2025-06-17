export function assign(target: any, ...sources: any[]): any {
    if (target == null) throw new TypeError("Cannot convert undefined or null to object");
    const result = Object(target);
    for (const source of sources) {
        if (source == null) continue;
        for (const key of Object.keys(source)) {
            result[key] = source[key];
        }
        for (const sym of Object.getOwnPropertySymbols(source)) {
            // source.propertyIsEnumerable(sym) を使う
            if (source.propertyIsEnumerable(sym)) {
                result[sym] = source[sym];
            }
        }
    }
    return result;
}
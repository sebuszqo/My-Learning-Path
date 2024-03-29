export function rest(httpMethod, path) {
    return (target, propertyName) => {
        var _a;
        const ar = (_a = Reflect.get(target, '_restApiCalls')) !== null && _a !== void 0 ? _a : [];
        ar.push({
            httpMethod,
            path,
            propertyName,
        });
        Reflect.set(target, '_restApiCall', ar);
    };
}
export function get(path) {
    return rest('get', path);
}
//# sourceMappingURL=rest.decorators.js.map
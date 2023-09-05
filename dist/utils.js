export function isDefined(obj) {
    try {
        return Object.keys(obj).length !== 0;
    }
    catch (error) {
        return false;
    }
}

export function isDefined(obj: Object) {
  try {
    return Object.keys(obj).length !== 0;
  } catch (error) {
    return false;
  }
}

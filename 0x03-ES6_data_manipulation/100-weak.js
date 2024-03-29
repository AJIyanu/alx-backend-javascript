export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 1);
  } else if (weakMap.get(endpoint) === 4) {
    throw new Error('Endpoint load is high');
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
  }
}

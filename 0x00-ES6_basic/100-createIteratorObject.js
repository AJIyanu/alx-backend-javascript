export default function createIteratorObject(report) {
    let all = [];
    for (const employees of Object.values(report)) all.push(...employees)
    return all;
}

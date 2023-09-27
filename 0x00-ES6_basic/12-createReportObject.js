export default function createReportObject(employeesList) {
    const allEmployees = {
        ...employeesList,
        getNumberOfDepartments(employeesList) {
            return Object.keys(employeesList).length
        },
    }
    return allEmployees;
}

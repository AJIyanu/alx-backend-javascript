export default function createReportObject(employeesList) {
    const obj = { allEmployees: {
        ...employeesList,
  },
        getNumberOfDepartments(employeesList) {
            return Object.keys(obj.allEmployees).length
        },
    }
    return obj;
}

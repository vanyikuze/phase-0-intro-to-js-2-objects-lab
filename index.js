// Write your solution in this file!
const employee = {
    name: 'Sam',
        streetAddress: '11 Broadway'
};
for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeDetails = {
        name: 'Sam',
        streetAddress: '11 Broadway'
    };
    return employeeDetails;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
    }

    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
    }
const getEmployerRole = (employeeName, employees) => {
  const isValidName = employeeName && typeof employeeName === "string";
  const isValidEmployeeList = employees && employees?.length > 0;
  const hasValidInputs = isValidName && isValidEmployeeList;

  if (!hasValidInputs) return "";

  const employee = employees.find((employee) => {
    return employee.name === employeeName;
  });
  return employee?.role || "";
};

module.exports = getEmployerRole;

const { getEmployerRole } = require("../src");

const employees = [
  { name: "Satti", role: "Developer" },
  { name: "Jenny", role: "Sales Associate" },
  { name: "Javid", role: "Human Recommended Reading Assistant" },
];

describe("getEmployerRole", () => {
  test("returns a empty string if not all parameters given", () => {
    expect(getEmployerRole()).toBe("");
    expect(getEmployerRole("Satti")).toBe("");
    expect(getEmployerRole(2, employees)).toBe("");
    expect(getEmployerRole("Shmavid", employees)).toBe("");
  });
  test("returns role of employee in array of 1", () => {
    const javid = employees[2];
    expect(getEmployerRole("Javid", [javid])).toBe(
      "Human Recommended Reading Assistant"
    );
  });
  test("should return role of employee in array of 2", () => {
    const satti = employees[0];
    const javid = employees[2];
    expect(getEmployerRole("Satti", [javid, satti])).toBe("Developer");
  });

  test("returns the employee's role in the company", () => {});
});

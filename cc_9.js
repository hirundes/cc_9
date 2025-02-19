// Task 1 - Created Employee Class
class Employee {    //CREATE CLASS Employee WITH PROPERTIES NAME, ID, DEPARTMENT, AND SALARY
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

getDetails() {      //ADD METHOD getDetails() THAT RETURNS FORMATTED STRING OF EMPLOYEE DETAILS
    console.log(`Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`);
}

calculateAnnualSalary() {       //ADD METHOD calculateAnnualSalary THAT RETURNS EMPLOYEE'S ANNNUAL SALARY
    console.log(`${this.salary * 12}`) 
}
}
console.log ("---Task 1---")    //INSTANTIATE Employee as emp1, LOGGED "Task 1", AND emp1.getDetails();, AND emp1.calculateAnnualSalary(); 
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
emp1.getDetails();  
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
emp1.calculateAnnualSalary(); 
// Expected output: 60000
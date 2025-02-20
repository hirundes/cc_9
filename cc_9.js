// Task 1 - Created Employee Class
class Employee {    //CREATE CLASS Employee WITH PROPERTIES NAME, ID, DEPARTMENT, AND SALARY
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary; 
    };

getDetails() {      //ADD METHOD getDetails() THAT RETURNS FORMATTED STRING OF EMPLOYEE DETAILS
    return (`Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`);
};

calculateAnnualSalary() {       //ADD METHOD calculateAnnualSalary THAT RETURNS EMPLOYEE'S ANNNUAL SALARY
    return this.salary * 12
};
};
console.log ("---Task 1---")    //INSTANTIATE Employee as emp1, LOGGED "Task 1", AND emp1.getDetails();, AND emp1.calculateAnnualSalary(); 
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000


//Task 2 - Created Manager Class with Inheritance
class Manager extends Employee {    //MANAGER CLASS INHERIT FROM EMPLOYEE
    calculateAnnualSalary() {       //TASK 4: MODIFYING calculateAnnyalSalary() OVERRIDE
        return (this.salary * 12) +  
    this.calculateBonus(); //ADDS BONUS
    }

getDetails() {      //OVERRIDE getDetails() TO INCLUDE TEAM SIZE
    return(`Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`)
};

calculateBonus() {      //CALCULATE BONUS BY MULTIPLYING ANNUAL SALARY BY 10 PERCENT
    return (this.salary * 12) * 0.10
};
};

console.log("---Task 2---")     //INSTANTIATE MANAGER AS mgr1 AND LOGGED "Task 2" AND LOGGED mgr1.getDetails AND mgr1.calculateBonus.
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600


//Task 3 - Created Company Class
class Company {     //CREATING COMPANY CLASS
    constructor(name) {
        this.name = name;       //PROPERTY NAME FOR COMPANY NAME
        this.employees = [];    //ARRAY EMPLOYEES TO STORE EMPLOYEE OBJECTS
    };

    addEmployee(employee) {     //ADD METHOD WHICH ADDS AN EMPLOYEE TO THE ARRAY
        this.employees.push(employee);
    };

    listEmployees() {           //ADD METHOD WHICH LOGS LIST OF EMPLOYEES' DETAILS
        this.employees.forEach(employee => console.log(employee));
    };  
    
    calculateTotalPayroll() {   //TASK 4: ADD METHOD CalculateTotalPayroll() THAT RETURNS SUM OF ALL EMPLOYEE SALARIES INC MANAGERS
        return this.employees.reduce((total, emp) => {
            return total + emp.calculateAnnualSalary();
        }, 0);
    }
    
    promoteToManager(employee, teamSize) {  //TASK 5: ADD METHOD promoteToManager(employee, teamSize) WHICH CONVERTS AN EMPLOYEE INTO A MANAGER
        let index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees [index] = new Manager (employee.name, employee.id, employee.department, employee.salary, teamSize); 
        }
    }
}
console.log("---Task 3---")           //LOGGED "Task 3", DECLARED COMPANY, AND LOGGED addEmployee, and listEmployees
const company = new Company("TechCorp");    
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"


//Task 4 - Implemented Payroll System
console.log("---Task 4---")     //LOGGED "Task 4" AND company.calculateTotalPayroll
console.log(company.calculateTotalPayroll()); 
// Expected output: 156000 (assuming emp1 and mgr1 salaries)


//Task 5 - Implemented Promotion System
console.log("---Task 5---")     //LOGGED "Task 5" AND promoteToManager AND listEmployees
company.promoteToManager(emp1, 3);  
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"


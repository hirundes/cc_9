// Task 1 - Created Employee Class
class Employee {    //CREATE CLASS Employee WITH PROPERTIES NAME, ID, DEPARTMENT, AND SALARY
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };

getDetails() {      //ADD METHOD getDetails() THAT RETURNS FORMATTED STRING OF EMPLOYEE DETAILS
    console.log(`Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`);
};

calculateAnnualSalary() {       //ADD METHOD calculateAnnualSalary THAT RETURNS EMPLOYEE'S ANNNUAL SALARY
    console.log(`$${this.salary * 12}`) 
};
};
console.log ("---Task 1---")    //INSTANTIATE Employee as emp1, LOGGED "Task 1", AND emp1.getDetails();, AND emp1.calculateAnnualSalary(); 
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
emp1.getDetails();  
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
emp1.calculateAnnualSalary(); 
// Expected output: 60000


//Task 2 - Created Manager Class with Inheritance
class Manager extends Employee {    //MANAGER CLASS INHERIT FROM EMPLOYEE
    constructor(name, id, department, salary, teamSize) {   
    super(name, id, department, salary)
    this.teamSize = teamSize        //ADDING NEW PROPERTY teamSize
    };

getDetails() {      //OVERRIDE getDetails() TO INCLUDE TEAM SIZE
    console.log(`Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`)
};

calculateBonus() {      //CALCULATE BONUS BY MULTIPLYING ANNUAL SALARY BY 10 PERCENT
    console.log(`$${((this.salary * 12) * 0.10)}`)
};
};

console.log("---Task 2---")     //INSTANTIATE MANAGER AS mgr1 AND LOGGED "Task 2" AND LOGGED mgr1.getDetails AND mgr1.calculateBonus.
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
mgr1.getDetails();
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
mgr1.calculateBonus(); 
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
};

console.log("---Task 3---")           //LOGGED "Task 3", DECLARED COMPANY, AND LOGGED addEmployee, and listEmployees
const company = new Company("TechCorp");    
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"


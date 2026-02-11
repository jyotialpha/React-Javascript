export const coreJavaTopics = [
  {
    id: 'oops-basics',
    title: 'OOP Basics',
    description: 'Classes, Objects, Constructors, this keyword',
    icon: '🎯',
    status: 'active',
    order: 1
  },
  {
    id: 'oops-pillars',
    title: 'OOP Pillars',
    description: 'Encapsulation, Inheritance, Polymorphism, Abstraction',
    icon: '🏛️',
    status: 'active',
    order: 2
  },
  {
    id: 'interfaces-abstract',
    title: 'Interfaces & Abstract Classes',
    description: 'Interface vs Abstract Class, Multiple Inheritance',
    icon: '🔌',
    status: 'active',
    order: 3
  },
  {
    id: 'collections-framework',
    title: 'Collections Framework',
    description: 'List, Set, Map, Queue - Complete Guide',
    icon: '📦',
    status: 'active',
    order: 4
  },
  {
    id: 'exception-handling',
    title: 'Exception Handling',
    description: 'Try-Catch, Custom Exceptions, Best Practices',
    icon: '⚠️',
    status: 'active',
    order: 5
  },
  {
    id: 'multithreading',
    title: 'Multithreading',
    description: 'Threads, Synchronization, Executor Framework',
    icon: '⚡',
    status: 'active',
    order: 6
  },
  {
    id: 'java8-features',
    title: 'Java 8+ Features',
    description: 'Lambda, Stream API, Optional, Functional Interface',
    icon: '🚀',
    status: 'active',
    order: 7
  },
  {
    id: 'file-io',
    title: 'File I/O',
    description: 'File Handling, Serialization, NIO',
    icon: '📁',
    status: 'active',
    order: 8
  },
  {
    id: 'generics',
    title: 'Generics',
    description: 'Generic Classes, Methods, Wildcards',
    icon: '🔤',
    status: 'active',
    order: 9
  },
  {
    id: 'annotations',
    title: 'Annotations',
    description: 'Built-in & Custom Annotations',
    icon: '@',
    status: 'coming-soon',
    order: 10
  }
];

import { interfacesAbstractContent } from './interfacesAbstractContent';
import { collectionsFrameworkContent } from './collectionsFrameworkContent';
import { exceptionHandlingContent } from './exceptionHandlingContent';
import { multithreadingContent } from './multithreadingContent';
import { java8FeaturesContent } from './java8FeaturesContent';
import { fileIOContent } from './fileIOContent';
import { genericsContent } from './genericsContent';

export const coreJavaContent = {
  'oops-basics': {
    title: 'OOP Basics - Classes, Objects & Constructors',
    sections: [
      {
        id: 'what-is-oop',
        title: '1. What is Object-Oriented Programming?',
        content: `
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" which contain data (fields/attributes) and code (methods/functions).

**Why OOP?**
- **Real-world modeling**: Represents real-world entities
- **Code reusability**: Write once, use multiple times
- **Maintainability**: Easy to modify and maintain
- **Scalability**: Easy to extend functionality
        `
      },
      {
        id: 'class-and-object',
        title: '2. Class and Object',
        content: `
**Class**: A blueprint or template for creating objects. It defines the structure and behavior.

**Object**: An instance of a class. It's a real-world entity with state and behavior.

**Real-time Example**: Think of a Car blueprint (Class) and actual cars like "Tesla Model 3", "BMW X5" (Objects).
        `,
        code: `
// Class Definition
public class Car {
    // Attributes (State)
    String brand;
    String model;
    int year;
    String color;
    
    // Method (Behavior)
    public void start() {
        System.out.println(brand + " " + model + " is starting...");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Color: " + color);
    }
}

// Creating Objects
public class Main {
    public static void main(String[] args) {
        // Object 1
        Car car1 = new Car();
        car1.brand = "Tesla";
        car1.model = "Model 3";
        car1.year = 2023;
        car1.color = "White";
        
        // Object 2
        Car car2 = new Car();
        car2.brand = "BMW";
        car2.model = "X5";
        car2.year = 2022;
        car2.color = "Black";
        
        // Using objects
        car1.displayInfo();
        car1.start();
        
        System.out.println("\\n---\\n");
        
        car2.displayInfo();
        car2.start();
    }
}

/* Output:
Brand: Tesla
Model: Model 3
Year: 2023
Color: White
Tesla Model 3 is starting...

---

Brand: BMW
Model: X5
Year: 2022
Color: Black
BMW X5 is starting...
*/
        `,
        explanation: `
**Key Points:**
1. **Class** is a template, **Object** is an instance
2. Use \`new\` keyword to create objects
3. Each object has its own copy of instance variables
4. Objects can call methods defined in the class
        `
      },
      {
        id: 'constructors',
        title: '3. Constructors',
        content: `
**Constructor**: A special method used to initialize objects. It has the same name as the class and no return type.

**Types of Constructors:**
1. **Default Constructor**: No parameters
2. **Parameterized Constructor**: Takes parameters
3. **Copy Constructor**: Creates object from another object

**Real-time Example**: When you order a pizza, you specify size, toppings, etc. - that's like calling a parameterized constructor.
        `,
        code: `
public class Student {
    String name;
    int rollNo;
    String course;
    double marks;
    
    // 1. Default Constructor
    public Student() {
        name = "Unknown";
        rollNo = 0;
        course = "Not Assigned";
        marks = 0.0;
        System.out.println("Default constructor called");
    }
    
    // 2. Parameterized Constructor
    public Student(String name, int rollNo, String course, double marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
        this.marks = marks;
        System.out.println("Parameterized constructor called");
    }
    
    // 3. Copy Constructor
    public Student(Student other) {
        this.name = other.name;
        this.rollNo = other.rollNo;
        this.course = other.course;
        this.marks = other.marks;
        System.out.println("Copy constructor called");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("Course: " + course);
        System.out.println("Marks: " + marks);
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        // Using default constructor
        Student s1 = new Student();
        s1.displayInfo();
        
        // Using parameterized constructor
        Student s2 = new Student("John Doe", 101, "Computer Science", 85.5);
        s2.displayInfo();
        
        // Using copy constructor
        Student s3 = new Student(s2);
        s3.displayInfo();
    }
}

/* Output:
Default constructor called
Name: Unknown
Roll No: 0
Course: Not Assigned
Marks: 0.0

Parameterized constructor called
Name: John Doe
Roll No: 101
Course: Computer Science
Marks: 85.5

Copy constructor called
Name: John Doe
Roll No: 101
Course: Computer Science
Marks: 85.5
*/
        `,
        explanation: `
**Constructor Rules:**
1. Same name as class
2. No return type (not even void)
3. Called automatically when object is created
4. Can be overloaded (multiple constructors with different parameters)
5. If no constructor is defined, Java provides a default one
        `
      },
      {
        id: 'this-keyword',
        title: '4. The "this" Keyword',
        content: `
**this**: A reference variable that refers to the current object.

**Uses of this:**
1. Differentiate between instance variables and parameters
2. Call one constructor from another (constructor chaining)
3. Pass current object as parameter
4. Return current object

**Real-time Example**: Like saying "this car" when you're sitting in a specific car.
        `,
        code: `
public class BankAccount {
    private String accountNumber;
    private String holderName;
    private double balance;
    
    // Using 'this' to differentiate instance variables from parameters
    public BankAccount(String accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;  // this.accountNumber refers to instance variable
        this.holderName = holderName;
        this.balance = balance;
    }
    
    // Constructor chaining using 'this'
    public BankAccount(String accountNumber, String holderName) {
        this(accountNumber, holderName, 0.0);  // Calls the above constructor
        System.out.println("Constructor chaining used");
    }
    
    // Using 'this' to return current object (Method Chaining)
    public BankAccount deposit(double amount) {
        this.balance += amount;
        System.out.println("Deposited: " + amount);
        return this;  // Returns current object
    }
    
    public BankAccount withdraw(double amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
        return this;
    }
    
    public void displayBalance() {
        System.out.println("Current Balance: " + this.balance);
    }
    
    // Using 'this' to pass current object
    public void compareWith(BankAccount other) {
        if (this.balance > other.balance) {
            System.out.println(this.holderName + " has more balance");
        } else {
            System.out.println(other.holderName + " has more balance");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Constructor chaining
        BankAccount acc1 = new BankAccount("ACC001", "Alice");
        
        // Method chaining using 'this'
        acc1.deposit(1000)
            .deposit(500)
            .withdraw(200)
            .displayBalance();
        
        System.out.println("\\n---\\n");
        
        BankAccount acc2 = new BankAccount("ACC002", "Bob", 2000);
        
        // Comparing objects
        acc1.compareWith(acc2);
    }
}

/* Output:
Constructor chaining used
Deposited: 1000
Deposited: 500
Withdrawn: 200
Current Balance: 1300.0

---

Alice has more balance
*/
        `,
        explanation: `
**Key Points about 'this':**
1. **this.variable**: Refers to instance variable
2. **this()**: Calls another constructor (must be first statement)
3. **return this**: Enables method chaining
4. **this as parameter**: Pass current object to methods
        `
      },
      {
        id: 'real-world-example',
        title: '5. Real-World Complete Example',
        content: `
Let's build a complete **Employee Management System** using all OOP basics concepts.
        `,
        code: `
public class Employee {
    // Instance variables
    private int empId;
    private String name;
    private String department;
    private double salary;
    private static int totalEmployees = 0;  // Static variable
    
    // Default Constructor
    public Employee() {
        this("Unknown", "Not Assigned", 0.0);
    }
    
    // Parameterized Constructor
    public Employee(String name, String department, double salary) {
        this.empId = ++totalEmployees;  // Auto-increment ID
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    // Getters and Setters
    public int getEmpId() {
        return this.empId;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getDepartment() {
        return this.department;
    }
    
    public void setDepartment(String department) {
        this.department = department;
    }
    
    public double getSalary() {
        return this.salary;
    }
    
    public void setSalary(double salary) {
        if (salary > 0) {
            this.salary = salary;
        }
    }
    
    // Method to give raise
    public Employee giveRaise(double percentage) {
        this.salary += this.salary * (percentage / 100);
        System.out.println(this.name + " got " + percentage + "% raise");
        return this;
    }
    
    // Method to transfer department
    public Employee transferTo(String newDepartment) {
        System.out.println(this.name + " transferred from " + 
                          this.department + " to " + newDepartment);
        this.department = newDepartment;
        return this;
    }
    
    // Display employee info
    public void displayInfo() {
        System.out.println("\\n=== Employee Details ===");
        System.out.println("ID: " + this.empId);
        System.out.println("Name: " + this.name);
        System.out.println("Department: " + this.department);
        System.out.println("Salary: $" + this.salary);
    }
    
    // Static method
    public static int getTotalEmployees() {
        return totalEmployees;
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating employees
        Employee emp1 = new Employee("John Smith", "IT", 50000);
        Employee emp2 = new Employee("Sarah Johnson", "HR", 45000);
        Employee emp3 = new Employee("Mike Brown", "Finance", 55000);
        
        // Display initial info
        emp1.displayInfo();
        
        // Method chaining - give raise and transfer
        emp1.giveRaise(10)
            .transferTo("Management")
            .displayInfo();
        
        // Update employee details
        emp2.setSalary(48000);
        emp2.displayInfo();
        
        // Display total employees
        System.out.println("\\nTotal Employees: " + Employee.getTotalEmployees());
    }
}

/* Output:
=== Employee Details ===
ID: 1
Name: John Smith
Department: IT
Salary: $50000.0

John Smith got 10.0% raise
John Smith transferred from IT to Management

=== Employee Details ===
ID: 1
Name: John Smith
Department: Management
Salary: $55000.0

=== Employee Details ===
ID: 2
Name: Sarah Johnson
Department: HR
Salary: $48000.0

Total Employees: 3
*/
        `,
        explanation: `
**Real-World Application:**
This example demonstrates:
1. **Encapsulation**: Private variables with getters/setters
2. **Constructor Chaining**: Default constructor calls parameterized
3. **this keyword**: Used throughout for clarity
4. **Method Chaining**: giveRaise() and transferTo() return 'this'
5. **Static members**: totalEmployees tracks all instances
6. **Business Logic**: Realistic employee management operations
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Create a Book class with title, author, price, and ISBN. Include constructors and methods to apply discount.',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'Build a Rectangle class with length and width. Add methods to calculate area, perimeter, and compare with another rectangle.',
        difficulty: 'Easy'
      },
      {
        id: 3,
        question: 'Design a ShoppingCart class that can add items, remove items, calculate total, and apply coupon codes.',
        difficulty: 'Medium'
      }
    ],
    keyTakeaways: [
      'Class is a blueprint, Object is an instance',
      'Constructors initialize objects and have no return type',
      'this keyword refers to the current object',
      'Constructor chaining improves code reusability',
      'Method chaining (returning this) makes code fluent',
      'Always use meaningful names for classes and methods'
    ]
  },
  'oops-pillars': {
    title: 'OOP Pillars - The Four Foundations',
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction to OOP Pillars',
        content: `
The Four Pillars of Object-Oriented Programming are fundamental concepts that make OOP powerful and flexible:

1. **Encapsulation** - Data hiding and bundling
2. **Inheritance** - Code reusability and hierarchy
3. **Polymorphism** - One interface, multiple implementations
4. **Abstraction** - Hiding complexity, showing essentials

**Real-world Analogy**: Think of a car:
- **Encapsulation**: Internal engine details are hidden, you just use steering/pedals
- **Inheritance**: SUV inherits features from base Vehicle class
- **Polymorphism**: Different cars respond differently to "accelerate"
- **Abstraction**: You drive without knowing engine mechanics
        `
      },
      {
        id: 'encapsulation',
        title: '2. Encapsulation - Data Hiding',
        content: `
**Encapsulation** is the bundling of data (variables) and methods that operate on that data into a single unit (class), while restricting direct access to some components.

**Why Encapsulation?**
- **Data Protection**: Prevent unauthorized access
- **Flexibility**: Change implementation without affecting users
- **Maintainability**: Easy to modify internal code
- **Control**: Validate data before setting

**How to Achieve:**
1. Make variables private
2. Provide public getter/setter methods
3. Add validation in setters

**Real-time Example**: ATM machine - you can't directly access cash, only through defined operations.
        `,
        code: `
// Without Encapsulation (Bad Practice)
class BankAccountBad {
    public String accountNumber;
    public double balance;  // Anyone can modify!
}

public class Test {
    public static void main(String[] args) {
        BankAccountBad acc = new BankAccountBad();
        acc.balance = -5000;  // Invalid! But no protection
    }
}

// With Encapsulation (Good Practice)
class BankAccount {
    // Private variables - cannot be accessed directly
    private String accountNumber;
    private String holderName;
    private double balance;
    private String accountType;
    
    // Constructor
    public BankAccount(String accountNumber, String holderName, String accountType) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.accountType = accountType;
        this.balance = 0.0;
    }
    
    // Getter methods - Read access
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getHolderName() {
        return holderName;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public String getAccountType() {
        return accountType;
    }
    
    // Setter with validation
    public void setHolderName(String holderName) {
        if (holderName != null && !holderName.trim().isEmpty()) {
            this.holderName = holderName;
        } else {
            System.out.println("Invalid name");
        }
    }
    
    // Business methods with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New Balance: $" + balance);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("Remaining Balance: $" + balance);
        } else if (amount > balance) {
            System.out.println("Insufficient balance");
        } else {
            System.out.println("Invalid withdrawal amount");
        }
    }
    
    public void displayAccountInfo() {
        System.out.println("\n=== Account Information ===");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Holder Name: " + holderName);
        System.out.println("Account Type: " + accountType);
        System.out.println("Balance: $" + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("ACC12345", "John Doe", "Savings");
        
        // Cannot access: account.balance = -1000; // Compilation error!
        
        // Must use methods
        account.deposit(5000);
        account.withdraw(2000);
        account.withdraw(5000);  // Will fail - insufficient balance
        
        account.displayAccountInfo();
        
        // Getter usage
        System.out.println("\nAccount holder: " + account.getHolderName());
        System.out.println("Current balance: $" + account.getBalance());
    }
}

/* Output:
Deposited: $5000.0
New Balance: $5000.0
Withdrawn: $2000.0
Remaining Balance: $3000.0
Insufficient balance

=== Account Information ===
Account Number: ACC12345
Holder Name: John Doe
Account Type: Savings
Balance: $3000.0

Account holder: John Doe
Current balance: $3000.0
*/
        `,
        explanation: `
**Benefits Demonstrated:**
1. **Data Protection**: balance cannot be set to negative
2. **Validation**: All operations are validated
3. **Controlled Access**: Only through defined methods
4. **Flexibility**: Can change internal implementation without affecting users
        `
      },
      {
        id: 'inheritance',
        title: '3. Inheritance - Code Reusability',
        content: `
**Inheritance** is a mechanism where a new class (child/subclass) acquires properties and behaviors of an existing class (parent/superclass).

**Why Inheritance?**
- **Code Reusability**: Don't repeat code
- **Method Overriding**: Customize parent behavior
- **Hierarchical Classification**: Organize related classes
- **Extensibility**: Easy to add new features

**Types:**
1. **Single Inheritance**: One parent, one child
2. **Multilevel Inheritance**: Chain of inheritance
3. **Hierarchical Inheritance**: One parent, multiple children

**Real-time Example**: Vehicle → Car, Bike, Truck (all inherit from Vehicle)
        `,
        code: `
// Parent Class (Superclass)
class Employee {
    protected int empId;
    protected String name;
    protected String department;
    protected double baseSalary;
    
    public Employee(int empId, String name, String department, double baseSalary) {
        this.empId = empId;
        this.name = name;
        this.department = department;
        this.baseSalary = baseSalary;
    }
    
    public void displayInfo() {
        System.out.println("\n=== Employee Information ===");
        System.out.println("ID: " + empId);
        System.out.println("Name: " + name);
        System.out.println("Department: " + department);
        System.out.println("Base Salary: $" + baseSalary);
    }
    
    public double calculateSalary() {
        return baseSalary;
    }
    
    public void work() {
        System.out.println(name + " is working...");
    }
}

// Child Class 1 - Manager
class Manager extends Employee {
    private double bonus;
    private int teamSize;
    
    public Manager(int empId, String name, String department, double baseSalary, 
                   double bonus, int teamSize) {
        super(empId, name, department, baseSalary);  // Call parent constructor
        this.bonus = bonus;
        this.teamSize = teamSize;
    }
    
    // Method Overriding
    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Bonus: $" + bonus);
        System.out.println("Team Size: " + teamSize);
        System.out.println("Total Salary: $" + calculateSalary());
    }
    
    // New method specific to Manager
    public void conductMeeting() {
        System.out.println(name + " is conducting a team meeting with " + teamSize + " members");
    }
}

// Child Class 2 - Developer
class Developer extends Employee {
    private String programmingLanguage;
    private int projectsCompleted;
    
    public Developer(int empId, String name, String department, double baseSalary,
                    String programmingLanguage, int projectsCompleted) {
        super(empId, name, department, baseSalary);
        this.programmingLanguage = programmingLanguage;
        this.projectsCompleted = projectsCompleted;
    }
    
    @Override
    public double calculateSalary() {
        // Bonus based on projects completed
        double projectBonus = projectsCompleted * 500;
        return baseSalary + projectBonus;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Programming Language: " + programmingLanguage);
        System.out.println("Projects Completed: " + projectsCompleted);
        System.out.println("Total Salary: $" + calculateSalary());
    }
    
    public void writeCode() {
        System.out.println(name + " is writing " + programmingLanguage + " code");
    }
}

// Child Class 3 - Intern (Multilevel Inheritance)
class Intern extends Developer {
    private int internshipDuration;  // in months
    
    public Intern(int empId, String name, String department, double baseSalary,
                 String programmingLanguage, int internshipDuration) {
        super(empId, name, department, baseSalary, programmingLanguage, 0);
        this.internshipDuration = internshipDuration;
    }
    
    @Override
    public double calculateSalary() {
        // Interns get reduced salary
        return baseSalary * 0.5;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Internship Duration: " + internshipDuration + " months");
    }
    
    public void attendTraining() {
        System.out.println(name + " is attending training sessions");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating different types of employees
        Manager manager = new Manager(101, "Alice Johnson", "IT", 80000, 20000, 10);
        Developer developer = new Developer(102, "Bob Smith", "IT", 70000, "Java", 5);
        Intern intern = new Intern(103, "Charlie Brown", "IT", 30000, "Python", 6);
        
        // Manager operations
        manager.displayInfo();
        manager.work();
        manager.conductMeeting();
        
        // Developer operations
        developer.displayInfo();
        developer.work();
        developer.writeCode();
        
        // Intern operations
        intern.displayInfo();
        intern.work();
        intern.writeCode();
        intern.attendTraining();
    }
}

/* Output:
=== Employee Information ===
ID: 101
Name: Alice Johnson
Department: IT
Base Salary: $80000.0
Bonus: $20000.0
Team Size: 10
Total Salary: $100000.0
Alice Johnson is working...
Alice Johnson is conducting a team meeting with 10 members

=== Employee Information ===
ID: 102
Name: Bob Smith
Department: IT
Base Salary: $70000.0
Programming Language: Java
Projects Completed: 5
Total Salary: $72500.0
Bob Smith is working...
Bob Smith is writing Java code

=== Employee Information ===
ID: 103
Name: Charlie Brown
Department: IT
Base Salary: $30000.0
Programming Language: Python
Projects Completed: 0
Total Salary: $15000.0
Internship Duration: 6 months
Charlie Brown is working...
Charlie Brown is writing Python code
Charlie Brown is attending training sessions
*/
        `,
        explanation: `
**Key Concepts:**
1. **super()**: Calls parent constructor
2. **super.method()**: Calls parent method
3. **@Override**: Indicates method overriding
4. **protected**: Accessible in child classes
5. **Multilevel**: Intern → Developer → Employee
6. **Hierarchical**: Manager, Developer both extend Employee
        `
      },
      {
        id: 'polymorphism',
        title: '4. Polymorphism - Many Forms',
        content: `
**Polymorphism** means "many forms" - the ability of an object to take many forms. It allows one interface to be used for different data types.

**Types of Polymorphism:**
1. **Compile-time (Static)** - Method Overloading
2. **Runtime (Dynamic)** - Method Overriding

**Why Polymorphism?**
- **Flexibility**: Same method name, different behaviors
- **Code Reusability**: Write generic code
- **Maintainability**: Easy to extend functionality
- **Loose Coupling**: Reduce dependencies

**Real-time Example**: A person can be a student, employee, customer at the same time - same person, different roles.
        `,
        code: `
// 1. COMPILE-TIME POLYMORPHISM (Method Overloading)
class Calculator {
    // Same method name, different parameters
    
    // Method 1: Add two integers
    public int add(int a, int b) {
        System.out.println("Adding two integers");
        return a + b;
    }
    
    // Method 2: Add three integers
    public int add(int a, int b, int c) {
        System.out.println("Adding three integers");
        return a + b + c;
    }
    
    // Method 3: Add two doubles
    public double add(double a, double b) {
        System.out.println("Adding two doubles");
        return a + b;
    }
    
    // Method 4: Concatenate strings
    public String add(String a, String b) {
        System.out.println("Concatenating strings");
        return a + b;
    }
}

// 2. RUNTIME POLYMORPHISM (Method Overriding)
// Parent class
class Payment {
    protected double amount;
    
    public Payment(double amount) {
        this.amount = amount;
    }
    
    // Method to be overridden
    public void processPayment() {
        System.out.println("Processing payment of $" + amount);
    }
    
    public void generateReceipt() {
        System.out.println("Receipt generated for $" + amount);
    }
}

// Child class 1
class CreditCardPayment extends Payment {
    private String cardNumber;
    private String cvv;
    
    public CreditCardPayment(double amount, String cardNumber, String cvv) {
        super(amount);
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    
    @Override
    public void processPayment() {
        System.out.println("\n=== Credit Card Payment ===");
        System.out.println("Validating card: " + maskCard(cardNumber));
        System.out.println("Processing credit card payment of $" + amount);
        System.out.println("Payment successful!");
    }
    
    private String maskCard(String card) {
        return "****-****-****-" + card.substring(card.length() - 4);
    }
}

// Child class 2
class PayPalPayment extends Payment {
    private String email;
    
    public PayPalPayment(double amount, String email) {
        super(amount);
        this.email = email;
    }
    
    @Override
    public void processPayment() {
        System.out.println("\n=== PayPal Payment ===");
        System.out.println("PayPal account: " + email);
        System.out.println("Redirecting to PayPal...");
        System.out.println("Processing PayPal payment of $" + amount);
        System.out.println("Payment successful!");
    }
}

// Child class 3
class CryptoPayment extends Payment {
    private String walletAddress;
    private String cryptocurrency;
    
    public CryptoPayment(double amount, String walletAddress, String cryptocurrency) {
        super(amount);
        this.walletAddress = walletAddress;
        this.cryptocurrency = cryptocurrency;
    }
    
    @Override
    public void processPayment() {
        System.out.println("\n=== Cryptocurrency Payment ===");
        System.out.println("Wallet: " + walletAddress.substring(0, 10) + "...");
        System.out.println("Currency: " + cryptocurrency);
        System.out.println("Processing crypto payment of $" + amount);
        System.out.println("Transaction confirmed on blockchain!");
    }
}

public class Main {
    public static void main(String[] args) {
        // COMPILE-TIME POLYMORPHISM DEMO
        System.out.println("=== Compile-Time Polymorphism ===");
        Calculator calc = new Calculator();
        
        System.out.println("Result: " + calc.add(5, 10));
        System.out.println("Result: " + calc.add(5, 10, 15));
        System.out.println("Result: " + calc.add(5.5, 10.5));
        System.out.println("Result: " + calc.add("Hello ", "World"));
        
        // RUNTIME POLYMORPHISM DEMO
        System.out.println("\n\n=== Runtime Polymorphism ===");
        
        // Parent reference, child objects
        Payment payment1 = new CreditCardPayment(150.00, "1234567890123456", "123");
        Payment payment2 = new PayPalPayment(200.00, "user@example.com");
        Payment payment3 = new CryptoPayment(300.00, "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", "Bitcoin");
        
        // Same method call, different behaviors
        payment1.processPayment();
        payment1.generateReceipt();
        
        payment2.processPayment();
        payment2.generateReceipt();
        
        payment3.processPayment();
        payment3.generateReceipt();
        
        // Array of payments - polymorphic behavior
        System.out.println("\n\n=== Processing Multiple Payments ===");
        Payment[] payments = {
            new CreditCardPayment(100, "9876543210987654", "456"),
            new PayPalPayment(250, "customer@email.com"),
            new CryptoPayment(500, "0xABC123DEF456", "Ethereum")
        };
        
        double totalAmount = 0;
        for (Payment p : payments) {
            p.processPayment();  // Polymorphic call
            totalAmount += p.amount;
        }
        
        System.out.println("\nTotal amount processed: $" + totalAmount);
    }
}

/* Output:
=== Compile-Time Polymorphism ===
Adding two integers
Result: 15
Adding three integers
Result: 30
Adding two doubles
Result: 16.0
Concatenating strings
Result: Hello World


=== Runtime Polymorphism ===

=== Credit Card Payment ===
Validating card: ****-****-****-3456
Processing credit card payment of $150.0
Payment successful!
Receipt generated for $150.0

=== PayPal Payment ===
PayPal account: user@example.com
Redirecting to PayPal...
Processing PayPal payment of $200.0
Payment successful!
Receipt generated for $200.0

=== Cryptocurrency Payment ===
Wallet: 0x742d35Cc...
Currency: Bitcoin
Processing crypto payment of $300.0
Transaction confirmed on blockchain!
Receipt generated for $300.0


=== Processing Multiple Payments ===

=== Credit Card Payment ===
Validating card: ****-****-****-7654
Processing credit card payment of $100.0
Payment successful!

=== PayPal Payment ===
PayPal account: customer@email.com
Redirecting to PayPal...
Processing PayPal payment of $250.0
Payment successful!

=== Cryptocurrency Payment ===
Wallet: 0xABC123DE...
Currency: Ethereum
Processing crypto payment of $500.0
Transaction confirmed on blockchain!

Total amount processed: $850.0
*/
        `,
        explanation: `
**Key Concepts:**
1. **Method Overloading**: Same name, different parameters (compile-time)
2. **Method Overriding**: Same signature, different implementation (runtime)
3. **Parent Reference**: Payment p = new CreditCardPayment() - polymorphic reference
4. **Dynamic Binding**: Actual method called is determined at runtime
5. **Flexibility**: Can process any payment type through Payment reference
        `
      },
      {
        id: 'abstraction',
        title: '5. Abstraction - Hiding Complexity',
        content: `
**Abstraction** is hiding implementation details and showing only essential features to the user.

**Why Abstraction?**
- **Simplicity**: Hide complex logic
- **Security**: Prevent direct access to implementation
- **Flexibility**: Change implementation without affecting users
- **Focus**: User focuses on WHAT, not HOW

**How to Achieve:**
1. **Abstract Classes** (0-100% abstraction)
2. **Interfaces** (100% abstraction)

**Real-time Example**: When you drive a car, you use steering/pedals (abstraction) without knowing engine mechanics (hidden complexity).
        `,
        code: `
// ABSTRACTION USING ABSTRACT CLASS
abstract class DatabaseConnection {
    protected String host;
    protected int port;
    protected String database;
    
    public DatabaseConnection(String host, int port, String database) {
        this.host = host;
        this.port = port;
        this.database = database;
    }
    
    // Abstract methods - must be implemented by child classes
    public abstract void connect();
    public abstract void disconnect();
    public abstract void executeQuery(String query);
    
    // Concrete method - common to all databases
    public void showConnectionInfo() {
        System.out.println("Host: " + host);
        System.out.println("Port: " + port);
        System.out.println("Database: " + database);
    }
}

// MySQL Implementation
class MySQLConnection extends DatabaseConnection {
    private String username;
    
    public MySQLConnection(String host, int port, String database, String username) {
        super(host, port, database);
        this.username = username;
    }
    
    @Override
    public void connect() {
        System.out.println("\n=== MySQL Connection ===");
        showConnectionInfo();
        System.out.println("User: " + username);
        System.out.println("Connecting to MySQL database...");
        System.out.println("MySQL connection established!");
    }
    
    @Override
    public void disconnect() {
        System.out.println("Closing MySQL connection...");
        System.out.println("MySQL disconnected!");
    }
    
    @Override
    public void executeQuery(String query) {
        System.out.println("Executing MySQL query: " + query);
        System.out.println("Query executed successfully!");
    }
}

// MongoDB Implementation
class MongoDBConnection extends DatabaseConnection {
    private String authDatabase;
    
    public MongoDBConnection(String host, int port, String database, String authDatabase) {
        super(host, port, database);
        this.authDatabase = authDatabase;
    }
    
    @Override
    public void connect() {
        System.out.println("\n=== MongoDB Connection ===");
        showConnectionInfo();
        System.out.println("Auth Database: " + authDatabase);
        System.out.println("Connecting to MongoDB...");
        System.out.println("MongoDB connection established!");
    }
    
    @Override
    public void disconnect() {
        System.out.println("Closing MongoDB connection...");
        System.out.println("MongoDB disconnected!");
    }
    
    @Override
    public void executeQuery(String query) {
        System.out.println("Executing MongoDB query: " + query);
        System.out.println("Query executed successfully!");
    }
}

// ABSTRACTION USING INTERFACE
interface NotificationService {
    void sendNotification(String recipient, String message);
    void scheduleNotification(String recipient, String message, String time);
}

// Email Notification
class EmailNotification implements NotificationService {
    @Override
    public void sendNotification(String recipient, String message) {
        System.out.println("\n=== Email Notification ===");
        System.out.println("To: " + recipient);
        System.out.println("Message: " + message);
        System.out.println("Email sent successfully!");
    }
    
    @Override
    public void scheduleNotification(String recipient, String message, String time) {
        System.out.println("Email scheduled for " + time);
    }
}

// SMS Notification
class SMSNotification implements NotificationService {
    @Override
    public void sendNotification(String recipient, String message) {
        System.out.println("\n=== SMS Notification ===");
        System.out.println("To: " + recipient);
        System.out.println("Message: " + message);
        System.out.println("SMS sent successfully!");
    }
    
    @Override
    public void scheduleNotification(String recipient, String message, String time) {
        System.out.println("SMS scheduled for " + time);
    }
}

// Push Notification
class PushNotification implements NotificationService {
    @Override
    public void sendNotification(String recipient, String message) {
        System.out.println("\n=== Push Notification ===");
        System.out.println("Device ID: " + recipient);
        System.out.println("Message: " + message);
        System.out.println("Push notification sent!");
    }
    
    @Override
    public void scheduleNotification(String recipient, String message, String time) {
        System.out.println("Push notification scheduled for " + time);
    }
}

public class Main {
    public static void main(String[] args) {
        // ABSTRACT CLASS DEMO
        System.out.println("=== Database Abstraction Demo ===");
        
        // User doesn't need to know internal connection logic
        DatabaseConnection mysql = new MySQLConnection("localhost", 3306, "myapp_db", "admin");
        mysql.connect();
        mysql.executeQuery("SELECT * FROM users");
        mysql.disconnect();
        
        DatabaseConnection mongo = new MongoDBConnection("localhost", 27017, "myapp_db", "admin");
        mongo.connect();
        mongo.executeQuery("db.users.find({})");
        mongo.disconnect();
        
        // INTERFACE DEMO
        System.out.println("\n\n=== Notification Abstraction Demo ===");
        
        // User doesn't need to know how notifications are sent
        NotificationService email = new EmailNotification();
        NotificationService sms = new SMSNotification();
        NotificationService push = new PushNotification();
        
        email.sendNotification("user@example.com", "Welcome to our platform!");
        sms.sendNotification("+1234567890", "Your OTP is 123456");
        push.sendNotification("device_token_123", "You have a new message");
        
        // Polymorphic array
        System.out.println("\n\n=== Sending Bulk Notifications ===");
        NotificationService[] services = {email, sms, push};
        
        for (NotificationService service : services) {
            service.sendNotification("recipient", "Important update!");
        }
    }
}

/* Output:
=== Database Abstraction Demo ===

=== MySQL Connection ===
Host: localhost
Port: 3306
Database: myapp_db
User: admin
Connecting to MySQL database...
MySQL connection established!
Executing MySQL query: SELECT * FROM users
Query executed successfully!
Closing MySQL connection...
MySQL disconnected!

=== MongoDB Connection ===
Host: localhost
Port: 27017
Database: myapp_db
Auth Database: admin
Connecting to MongoDB...
MongoDB connection established!
Executing MongoDB query: db.users.find({})
Query executed successfully!
Closing MongoDB connection...
MongoDB disconnected!


=== Notification Abstraction Demo ===

=== Email Notification ===
To: user@example.com
Message: Welcome to our platform!
Email sent successfully!

=== SMS Notification ===
To: +1234567890
Message: Your OTP is 123456
SMS sent successfully!

=== Push Notification ===
Device ID: device_token_123
Message: You have a new message
Push notification sent!


=== Sending Bulk Notifications ===

=== Email Notification ===
To: recipient
Message: Important update!
Email sent successfully!

=== SMS Notification ===
To: recipient
Message: Important update!
SMS sent successfully!

=== Push Notification ===
Device ID: recipient
Message: Important update!
Push notification sent!
*/
        `,
        explanation: `
**Key Concepts:**
1. **Abstract Class**: Can have abstract and concrete methods
2. **Abstract Method**: No body, must be implemented by child
3. **Interface**: 100% abstraction (all methods abstract by default)
4. **Cannot Instantiate**: Cannot create object of abstract class/interface
5. **Loose Coupling**: Implementation details are hidden
6. **Flexibility**: Easy to add new implementations
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Create a Shape class with area() method. Extend it to Circle, Rectangle, and Triangle with proper implementations.',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'Build a Vehicle hierarchy: Vehicle → Car → ElectricCar. Add appropriate properties and methods at each level.',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'Design a banking system with Account class and SavingsAccount, CurrentAccount as children with different interest calculations.',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'Create an abstract class Animal with abstract methods sound() and move(). Implement for Dog, Cat, and Bird.',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'Design a payment gateway system using interfaces supporting CreditCard, DebitCard, and UPI payments.',
        difficulty: 'Hard'
      }
    ],
    keyTakeaways: [
      'Encapsulation protects data using private variables and public methods',
      'Inheritance enables code reusability through parent-child relationships',
      'Polymorphism allows one interface to have multiple implementations',
      'Method Overloading is compile-time polymorphism (same name, different parameters)',
      'Method Overriding is runtime polymorphism (same signature, different implementation)',
      'Abstraction hides complexity and shows only essential features',
      'Abstract classes can have both abstract and concrete methods',
      'Interfaces provide 100% abstraction with all methods abstract',
      'Use abstract classes when classes share common code, interfaces for pure contracts'
    ]
  },
  'interfaces-abstract': interfacesAbstractContent,
  'collections-framework': collectionsFrameworkContent,
  'exception-handling': exceptionHandlingContent,
  'multithreading': multithreadingContent,
  'java8-features': java8FeaturesContent,
  'file-io': fileIOContent,
  'generics': genericsContent
};

export const getCoreJavaTopicById = (topicId) => {
  return coreJavaContent[topicId] || null;
};

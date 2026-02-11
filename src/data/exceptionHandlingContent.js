export const exceptionHandlingContent = {
  title: 'Exception Handling - Error Management',
  sections: [
    {
      id: 'introduction',
      title: '1. What is Exception Handling?',
      content: `
**Exception** is an abnormal event that disrupts the normal flow of program execution.

**Why Exception Handling?**
- Prevent program crashes
- Provide meaningful error messages
- Separate error handling from business logic
- Maintain normal program flow

**Exception Hierarchy:**
- Throwable (root)
  - Error (system errors, unrecoverable)
  - Exception (recoverable)
    - Checked Exceptions (compile-time)
    - Unchecked Exceptions (runtime)
      `,
      code: `
// Without Exception Handling - Program crashes
public class WithoutException {
    public static void main(String[] args) {
        int result = 10 / 0;  // ArithmeticException - Program terminates
        System.out.println("This line never executes");
    }
}

// With Exception Handling - Program continues
public class WithException {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero");
        }
        System.out.println("Program continues normally");
    }
}

/* Output:
Error: Cannot divide by zero
Program continues normally
*/
      `,
      explanation: `
**Key Concepts:**
1. Exception prevents program crash
2. try block contains risky code
3. catch block handles the error
4. Program continues after handling exception
      `
    },
    {
      id: 'try-catch',
      title: '2. Try-Catch Block',
      content: `
**try-catch** is used to handle exceptions gracefully.

**Syntax:**
- try: Contains code that might throw exception
- catch: Handles specific exception type
- Multiple catch blocks for different exceptions
- finally: Always executes (optional)
      `,
      code: `
import java.util.Scanner;

public class TryCatchExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // Example 1: Single catch
        System.out.println("=== Example 1: Division ===");
        try {
            System.out.print("Enter numerator: ");
            int num = sc.nextInt();
            System.out.print("Enter denominator: ");
            int den = sc.nextInt();
            int result = num / den;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // Example 2: Multiple catch blocks
        System.out.println("\\n=== Example 2: Array Access ===");
        try {
            int[] arr = {1, 2, 3};
            System.out.print("Enter index: ");
            int index = sc.nextInt();
            System.out.println("Value: " + arr[index]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Invalid index");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // Example 3: try-catch-finally
        System.out.println("\\n=== Example 3: Finally Block ===");
        try {
            String str = null;
            System.out.println(str.length());
        } catch (NullPointerException e) {
            System.out.println("Error: String is null");
        } finally {
            System.out.println("Finally block always executes");
        }
        
        System.out.println("\\nProgram completed successfully!");
    }
}

/* Sample Output:
=== Example 1: Division ===
Enter numerator: 10
Enter denominator: 0
Error: / by zero

=== Example 2: Array Access ===
Enter index: 5
Error: Invalid index

=== Example 3: Finally Block ===
Error: String is null
Finally block always executes

Program completed successfully!
*/
      `,
      explanation: `
**Key Points:**
1. Multiple catch blocks: Order from specific to general
2. finally block: Executes regardless of exception
3. Use finally for cleanup (closing files, connections)
4. catch (Exception e): Catches all exceptions (use as last catch)
      `
    },
    {
      id: 'exception-types',
      title: '3. Types of Exceptions',
      content: `
**Checked Exceptions** (Compile-time):
- Must be handled or declared
- IOException, SQLException, ClassNotFoundException

**Unchecked Exceptions** (Runtime):
- Not required to handle
- NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException

**Errors**:
- System-level problems
- OutOfMemoryError, StackOverflowError
      `,
      code: `
import java.io.*;

public class ExceptionTypes {
    
    // Checked Exception - Must handle or declare
    public static void readFile(String filename) throws IOException {
        FileReader file = new FileReader(filename);
        BufferedReader reader = new BufferedReader(file);
        System.out.println(reader.readLine());
        reader.close();
    }
    
    // Handling Checked Exception
    public static void readFileSafe(String filename) {
        try {
            FileReader file = new FileReader(filename);
            BufferedReader reader = new BufferedReader(file);
            System.out.println("File content: " + reader.readLine());
            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("Error: File not found - " + filename);
        } catch (IOException e) {
            System.out.println("Error: Cannot read file");
        }
    }
    
    // Unchecked Exceptions
    public static void demonstrateUnchecked() {
        System.out.println("\\n=== Unchecked Exceptions ===");
        
        // 1. NullPointerException
        try {
            String str = null;
            System.out.println(str.length());
        } catch (NullPointerException e) {
            System.out.println("1. NullPointerException caught");
        }
        
        // 2. ArithmeticException
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("2. ArithmeticException caught");
        }
        
        // 3. ArrayIndexOutOfBoundsException
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("3. ArrayIndexOutOfBoundsException caught");
        }
        
        // 4. NumberFormatException
        try {
            int num = Integer.parseInt("abc");
        } catch (NumberFormatException e) {
            System.out.println("4. NumberFormatException caught");
        }
        
        // 5. ClassCastException
        try {
            Object obj = "Hello";
            Integer num = (Integer) obj;
        } catch (ClassCastException e) {
            System.out.println("5. ClassCastException caught");
        }
    }
    
    public static void main(String[] args) {
        // Checked Exception
        System.out.println("=== Checked Exception ===");
        readFileSafe("nonexistent.txt");
        
        // Unchecked Exceptions
        demonstrateUnchecked();
        
        System.out.println("\\nProgram continues...");
    }
}

/* Output:
=== Checked Exception ===
Error: File not found - nonexistent.txt

=== Unchecked Exceptions ===
1. NullPointerException caught
2. ArithmeticException caught
3. ArrayIndexOutOfBoundsException caught
4. NumberFormatException caught
5. ClassCastException caught

Program continues...
*/
      `,
      explanation: `
**Checked vs Unchecked:**
1. Checked: Compiler forces handling (throws or try-catch)
2. Unchecked: Optional handling, occurs at runtime
3. Checked: External resources (files, network, database)
4. Unchecked: Programming errors (null, divide by zero)
      `
    },
    {
      id: 'throw-throws',
      title: '4. throw vs throws',
      content: `
**throw**: Used to explicitly throw an exception
**throws**: Declares that a method might throw exceptions

**When to use:**
- throw: When you detect an error condition
- throws: When you don't want to handle exception in current method
      `,
      code: `
public class ThrowThrowsExample {
    
    // throws - Declares exception
    public static void validateAge(int age) throws IllegalArgumentException {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or above");
        }
        System.out.println("Age is valid: " + age);
    }
    
    // throw - Explicitly throwing exception
    public static void withdraw(double balance, double amount) {
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        System.out.println("Withdrawal successful: $" + amount);
        System.out.println("Remaining balance: $" + (balance - amount));
    }
    
    // Method that handles exception
    public static void processAge(int age) {
        try {
            validateAge(age);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
    
    // Multiple exceptions in throws
    public static void riskyMethod() throws IOException, SQLException {
        // Method that might throw multiple exceptions
        System.out.println("Risky operation");
    }
    
    public static void main(String[] args) {
        System.out.println("=== throw Example ===");
        
        // Valid withdrawal
        try {
            withdraw(1000, 500);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        System.out.println();
        
        // Invalid withdrawal
        try {
            withdraw(1000, 1500);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        System.out.println("\\n=== throws Example ===");
        
        // Valid age
        processAge(25);
        
        // Invalid age
        processAge(15);
        
        System.out.println("\\nProgram completed!");
    }
}

/* Output:
=== throw Example ===
Withdrawal successful: $500.0
Remaining balance: $500.0

Error: Insufficient balance

=== throws Example ===
Age is valid: 25
Error: Age must be 18 or above

Program completed!
*/
      `,
      explanation: `
**Key Differences:**
1. throw: Used inside method body to throw exception object
2. throws: Used in method signature to declare exceptions
3. throw: Followed by exception instance (new Exception())
4. throws: Followed by exception class names
5. throw: Can throw only one exception at a time
6. throws: Can declare multiple exceptions
      `
    },
    {
      id: 'custom-exceptions',
      title: '5. Custom Exceptions',
      content: `
**Custom Exception** is a user-defined exception class for specific business logic errors.

**Why Custom Exceptions?**
- Meaningful error messages
- Better error categorization
- Domain-specific error handling
- Improved code readability
      `,
      code: `
// Custom Checked Exception
class InsufficientBalanceException extends Exception {
    private double balance;
    private double amount;
    
    public InsufficientBalanceException(double balance, double amount) {
        super("Insufficient balance. Available: $" + balance + ", Required: $" + amount);
        this.balance = balance;
        this.amount = amount;
    }
    
    public double getShortfall() {
        return amount - balance;
    }
}

// Custom Unchecked Exception
class InvalidAccountException extends RuntimeException {
    public InvalidAccountException(String message) {
        super(message);
    }
}

// Bank Account Class
class BankAccount {
    private String accountNumber;
    private String holderName;
    private double balance;
    
    public BankAccount(String accountNumber, String holderName, double initialBalance) {
        if (accountNumber == null || accountNumber.isEmpty()) {
            throw new InvalidAccountException("Account number cannot be empty");
        }
        if (initialBalance < 0) {
            throw new InvalidAccountException("Initial balance cannot be negative");
        }
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new InvalidAccountException("Deposit amount must be positive");
        }
        balance += amount;
        System.out.println("Deposited: $" + amount);
        System.out.println("New Balance: $" + balance);
    }
    
    public void withdraw(double amount) throws InsufficientBalanceException {
        if (amount <= 0) {
            throw new InvalidAccountException("Withdrawal amount must be positive");
        }
        if (amount > balance) {
            throw new InsufficientBalanceException(balance, amount);
        }
        balance -= amount;
        System.out.println("Withdrawn: $" + amount);
        System.out.println("Remaining Balance: $" + balance);
    }
    
    public void displayInfo() {
        System.out.println("\\nAccount: " + accountNumber);
        System.out.println("Holder: " + holderName);
        System.out.println("Balance: $" + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Banking System ===");
        
        try {
            // Create account
            BankAccount account = new BankAccount("ACC001", "John Doe", 1000);
            account.displayInfo();
            
            // Deposit
            System.out.println("\\n--- Deposit ---");
            account.deposit(500);
            
            // Valid withdrawal
            System.out.println("\\n--- Withdrawal 1 ---");
            account.withdraw(300);
            
            // Invalid withdrawal - insufficient balance
            System.out.println("\\n--- Withdrawal 2 ---");
            account.withdraw(2000);
            
        } catch (InsufficientBalanceException e) {
            System.out.println("\\nError: " + e.getMessage());
            System.out.println("Shortfall: $" + e.getShortfall());
        } catch (InvalidAccountException e) {
            System.out.println("\\nError: " + e.getMessage());
        }
        
        // Invalid account creation
        System.out.println("\\n=== Invalid Account ===");
        try {
            BankAccount invalid = new BankAccount("", "Jane", 100);
        } catch (InvalidAccountException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        System.out.println("\\nProgram completed!");
    }
}

/* Output:
=== Banking System ===

Account: ACC001
Holder: John Doe
Balance: $1000.0

--- Deposit ---
Deposited: $500.0
New Balance: $1500.0

--- Withdrawal 1 ---
Withdrawn: $300.0
Remaining Balance: $1200.0

--- Withdrawal 2 ---

Error: Insufficient balance. Available: $1200.0, Required: $2000.0
Shortfall: $800.0

=== Invalid Account ===
Error: Account number cannot be empty

Program completed!
*/
      `,
      explanation: `
**Creating Custom Exceptions:**
1. Extend Exception (checked) or RuntimeException (unchecked)
2. Add constructors with meaningful messages
3. Add custom fields and methods if needed
4. Use descriptive exception names (e.g., InsufficientBalanceException)
5. Provide context-specific information
      `
    },
    {
      id: 'best-practices',
      title: '6. Best Practices & Real-World Example',
      content: `
**Best Practices:**
- Catch specific exceptions first
- Don't catch Exception unless necessary
- Always close resources (use try-with-resources)
- Log exceptions properly
- Don't ignore exceptions
- Use custom exceptions for business logic
      `,
      code: `
import java.io.*;
import java.util.*;

// Custom Exceptions
class UserNotFoundException extends Exception {
    public UserNotFoundException(String userId) {
        super("User not found: " + userId);
    }
}

class InvalidCredentialsException extends Exception {
    public InvalidCredentialsException() {
        super("Invalid username or password");
    }
}

// User Management System
class UserService {
    private Map<String, String> users = new HashMap<>();
    
    public UserService() {
        users.put("user1", "pass123");
        users.put("user2", "pass456");
    }
    
    public void login(String username, String password) 
            throws UserNotFoundException, InvalidCredentialsException {
        
        if (!users.containsKey(username)) {
            throw new UserNotFoundException(username);
        }
        
        if (!users.get(username).equals(password)) {
            throw new InvalidCredentialsException();
        }
        
        System.out.println("Login successful! Welcome, " + username);
    }
    
    // Try-with-resources (Best Practice)
    public void saveUserLog(String username) {
        try (FileWriter writer = new FileWriter("user_log.txt", true);
             BufferedWriter buffer = new BufferedWriter(writer)) {
            
            buffer.write("User logged in: " + username + "\\n");
            System.out.println("Log saved successfully");
            
        } catch (IOException e) {
            System.err.println("Failed to save log: " + e.getMessage());
        }
        // Resources automatically closed - no need for finally
    }
}

// File Processing with Exception Handling
class FileProcessor {
    
    public static void processFile(String filename) {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(filename));
            String line;
            int lineNumber = 0;
            
            while ((line = reader.readLine()) != null) {
                lineNumber++;
                System.out.println("Line " + lineNumber + ": " + line);
            }
            
        } catch (FileNotFoundException e) {
            System.err.println("Error: File not found - " + filename);
        } catch (IOException e) {
            System.err.println("Error: Cannot read file - " + e.getMessage());
        } finally {
            // Always close resources
            if (reader != null) {
                try {
                    reader.close();
                    System.out.println("File closed successfully");
                } catch (IOException e) {
                    System.err.println("Error closing file: " + e.getMessage());
                }
            }
        }
    }
    
    // Better approach: try-with-resources
    public static void processFileBetter(String filename) {
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            int lineNumber = 0;
            
            while ((line = reader.readLine()) != null) {
                lineNumber++;
                System.out.println("Line " + lineNumber + ": " + line);
            }
            
        } catch (FileNotFoundException e) {
            System.err.println("Error: File not found - " + filename);
        } catch (IOException e) {
            System.err.println("Error: Cannot read file - " + e.getMessage());
        }
        // Reader automatically closed
    }
}

public class Main {
    public static void main(String[] args) {
        UserService userService = new UserService();
        
        System.out.println("=== User Login System ===\\n");
        
        // Test Case 1: Successful login
        System.out.println("Test 1: Valid credentials");
        try {
            userService.login("user1", "pass123");
            userService.saveUserLog("user1");
        } catch (UserNotFoundException | InvalidCredentialsException e) {
            System.err.println("Login failed: " + e.getMessage());
        }
        
        // Test Case 2: User not found
        System.out.println("\\nTest 2: User not found");
        try {
            userService.login("user999", "pass123");
        } catch (UserNotFoundException e) {
            System.err.println("Error: " + e.getMessage());
        } catch (InvalidCredentialsException e) {
            System.err.println("Error: " + e.getMessage());
        }
        
        // Test Case 3: Invalid password
        System.out.println("\\nTest 3: Invalid password");
        try {
            userService.login("user1", "wrongpass");
        } catch (UserNotFoundException | InvalidCredentialsException e) {
            System.err.println("Error: " + e.getMessage());
        }
        
        System.out.println("\\n=== Application continues running ===");
    }
}

/* Output:
=== User Login System ===

Test 1: Valid credentials
Login successful! Welcome, user1
Log saved successfully

Test 2: User not found
Error: User not found: user999

Test 3: Invalid password
Error: Invalid username or password

=== Application continues running ===
*/
      `,
      explanation: `
**Best Practices Demonstrated:**
1. **Specific Exceptions**: Catch UserNotFoundException before general Exception
2. **Multi-catch**: Use | to catch multiple exceptions in one block
3. **Try-with-resources**: Automatically closes resources (Java 7+)
4. **Custom Exceptions**: Business-specific errors (UserNotFoundException)
5. **Error Messages**: Meaningful messages for debugging
6. **Resource Cleanup**: Always close files, connections in finally or use try-with-resources
7. **Don't Swallow**: Always handle or log exceptions
8. **Fail Fast**: Throw exceptions early when detecting errors
      `
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      question: 'Write a program to handle division by zero and array index out of bounds exceptions.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Create a custom exception for invalid email format and validate user input.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Build a file reader that handles FileNotFoundException and IOException with proper resource cleanup.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      question: 'Design a banking system with custom exceptions for insufficient balance, invalid account, and transaction limits.',
      difficulty: 'Medium'
    },
    {
      id: 5,
      question: 'Implement a user registration system with multiple custom exceptions and proper exception chaining.',
      difficulty: 'Hard'
    }
  ],
  keyTakeaways: [
    'Exceptions prevent program crashes and provide graceful error handling',
    'Checked exceptions must be handled or declared, unchecked exceptions are optional',
    'Use try-catch-finally for exception handling and resource cleanup',
    'throw is used to throw exceptions, throws declares exceptions in method signature',
    'Create custom exceptions by extending Exception or RuntimeException',
    'Always catch specific exceptions before general Exception',
    'Use try-with-resources for automatic resource management (Java 7+)',
    'Never ignore exceptions - always handle or log them',
    'Custom exceptions improve code readability and provide business-specific error handling'
  ]
};

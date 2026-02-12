export const annotationsContent = {
  title: 'Java Annotations - Metadata for Code',
  sections: [
    {
      id: 'what-are-annotations',
      title: '1. What are Annotations?',
      content: `
Annotations are metadata (data about data) that provide information about the program but are not part of the program itself.

**Why Annotations?**
- **Compiler Instructions**: Give instructions to the compiler
- **Build-time Processing**: Generate code, XML files, etc.
- **Runtime Processing**: Examine code behavior at runtime
- **Documentation**: Better than comments

**Real-time Example**: Like labels on medicine bottles - they provide information about the medicine without being the medicine itself.
      `,
      code: `
// Basic Annotation Usage
@Override
public String toString() {
    return "Example";
}

@Deprecated
public void oldMethod() {
    System.out.println("This method is deprecated");
}

@SuppressWarnings("unchecked")
public void methodWithWarning() {
    List list = new ArrayList();
    list.add("item");
}
      `,
      explanation: `
**Key Points:**
1. Annotations start with @ symbol
2. Can be applied to classes, methods, fields, parameters
3. Processed at compile-time or runtime
4. Don't change program logic directly
      `
    },
    {
      id: 'built-in-annotations',
      title: '2. Built-in Annotations',
      content: `
Java provides several built-in annotations that are commonly used in everyday programming.

**Common Built-in Annotations:**
1. **@Override** - Method overrides parent method
2. **@Deprecated** - Marks element as outdated
3. **@SuppressWarnings** - Suppresses compiler warnings
4. **@FunctionalInterface** - Marks interface as functional
5. **@SafeVarargs** - Suppresses varargs warnings

**Real-time Example**: Like warning stickers on products - they inform users about important information.
      `,
      code: `
// 1. @Override - Ensures method overrides parent
class Animal {
    public void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    public void sound() {  // Compiler checks if this actually overrides
        System.out.println("Dog barks");
    }
    
    // @Override
    // public void sounds() {  // Compilation error - method doesn't exist in parent
    //     System.out.println("Wrong method name");
    // }
}

// 2. @Deprecated - Marks old code
class Calculator {
    @Deprecated
    public int add(int a, int b) {
        return a + b;
    }
    
    // New improved method
    public int addNumbers(int a, int b) {
        System.out.println("Using new method");
        return a + b;
    }
}

// 3. @SuppressWarnings - Suppresses warnings
class WarningExample {
    @SuppressWarnings("unchecked")
    public void rawTypeUsage() {
        List list = new ArrayList();  // Raw type warning suppressed
        list.add("item");
    }
    
    @SuppressWarnings({"unchecked", "deprecation"})
    public void multipleWarnings() {
        List list = new ArrayList();
        Calculator calc = new Calculator();
        calc.add(5, 10);  // Deprecated warning suppressed
    }
}

// 4. @FunctionalInterface - Ensures single abstract method
@FunctionalInterface
interface MathOperation {
    int operate(int a, int b);
    
    // int multiply(int a, int b);  // Error: Multiple abstract methods not allowed
    
    // Default and static methods are allowed
    default void display() {
        System.out.println("Math Operation");
    }
}

// 5. @SafeVarargs - Suppresses varargs warnings
class VarargsExample {
    @SafeVarargs
    public final <T> void printItems(T... items) {
        for (T item : items) {
            System.out.println(item);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // @Override demo
        Dog dog = new Dog();
        dog.sound();
        
        // @Deprecated demo
        Calculator calc = new Calculator();
        calc.add(5, 10);  // Warning: deprecated method
        calc.addNumbers(5, 10);  // Preferred way
        
        // @FunctionalInterface demo
        MathOperation addition = (a, b) -> a + b;
        System.out.println("Sum: " + addition.operate(10, 20));
        
        // @SafeVarargs demo
        VarargsExample example = new VarargsExample();
        example.printItems("Apple", "Banana", "Cherry");
    }
}

/* Output:
Dog barks
Using new method
Sum: 30
Apple
Banana
Cherry
*/
      `,
      explanation: `
**Best Practices:**
1. Always use @Override when overriding methods
2. Mark old code with @Deprecated and provide alternatives
3. Use @SuppressWarnings sparingly - fix warnings instead
4. @FunctionalInterface helps catch errors in lambda interfaces
5. @SafeVarargs only on final or static methods
      `
    },
    {
      id: 'meta-annotations',
      title: '3. Meta-Annotations',
      content: `
Meta-annotations are annotations that apply to other annotations. They define how annotations behave.

**Common Meta-Annotations:**
1. **@Retention** - How long annotation is retained
2. **@Target** - Where annotation can be applied
3. **@Documented** - Include in JavaDoc
4. **@Inherited** - Inherited by subclasses
5. **@Repeatable** - Can be applied multiple times

**Real-time Example**: Like rules for creating rules - they define how other annotations work.
      `,
      code: `
import java.lang.annotation.*;

// @Retention - Defines annotation lifetime
@Retention(RetentionPolicy.RUNTIME)  // Available at runtime
@interface RuntimeAnnotation {
    String value();
}

@Retention(RetentionPolicy.SOURCE)  // Discarded after compilation
@interface SourceAnnotation {
    String value();
}

@Retention(RetentionPolicy.CLASS)  // In .class file but not at runtime
@interface ClassAnnotation {
    String value();
}

// @Target - Defines where annotation can be used
@Target(ElementType.METHOD)  // Only on methods
@interface MethodOnly {
    String value();
}

@Target({ElementType.TYPE, ElementType.FIELD})  // On classes and fields
@interface TypeAndField {
    String value();
}

@Target(ElementType.PARAMETER)  // Only on parameters
@interface ParameterAnnotation {
    String value();
}

// @Documented - Include in JavaDoc
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface DocumentedAnnotation {
    String author();
    String date();
}

// @Inherited - Inherited by subclasses
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface InheritedAnnotation {
    String value();
}

// @Repeatable - Can be used multiple times
@Repeatable(Schedules.class)
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Schedule {
    String day();
    String time();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Schedules {
    Schedule[] value();
}

// Usage Examples
@InheritedAnnotation("Parent Class")
class Parent {
    @MethodOnly("This is a method")
    @DocumentedAnnotation(author = "John Doe", date = "2024-01-15")
    public void parentMethod() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    // Inherits @InheritedAnnotation from Parent
    
    @Schedule(day = "Monday", time = "09:00")
    @Schedule(day = "Wednesday", time = "14:00")
    @Schedule(day = "Friday", time = "11:00")
    public void scheduledTask() {
        System.out.println("Executing scheduled task");
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        // Check if Child inherited annotation
        if (Child.class.isAnnotationPresent(InheritedAnnotation.class)) {
            InheritedAnnotation ann = Child.class.getAnnotation(InheritedAnnotation.class);
            System.out.println("Child inherited: " + ann.value());
        }
        
        // Read repeatable annotations
        Child child = new Child();
        Schedule[] schedules = child.getClass()
            .getMethod("scheduledTask")
            .getAnnotationsByType(Schedule.class);
        
        System.out.println("\\nScheduled times:");
        for (Schedule schedule : schedules) {
            System.out.println(schedule.day() + " at " + schedule.time());
        }
    }
}

/* Output:
Child inherited: Parent Class

Scheduled times:
Monday at 09:00
Wednesday at 14:00
Friday at 11:00
*/
      `,
      explanation: `
**Retention Policies:**
- **SOURCE**: Discarded by compiler (e.g., @Override)
- **CLASS**: In .class file, not available at runtime (default)
- **RUNTIME**: Available at runtime via reflection

**Target Types:**
- TYPE (class, interface), FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE, ANNOTATION_TYPE, PACKAGE, TYPE_PARAMETER, TYPE_USE
      `
    },
    {
      id: 'custom-annotations',
      title: '4. Creating Custom Annotations',
      content: `
You can create your own annotations to add custom metadata to your code.

**Annotation Elements:**
- Can have elements (like methods)
- Elements can have default values
- Return types: primitives, String, Class, enum, annotation, arrays

**Real-time Example**: Like creating custom labels for your products with specific information you need.
      `,
      code: `
import java.lang.annotation.*;

// Simple custom annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Test {
}

// Annotation with single element
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Author {
    String value();  // Single element named 'value'
}

// Annotation with multiple elements
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface MethodInfo {
    String author();
    String date();
    int version() default 1;  // Default value
    String description() default "No description";
}

// Annotation for validation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface NotNull {
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface Range {
    int min();
    int max();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface Email {
}

// Using custom annotations
class Employee {
    @NotNull
    private String name;
    
    @Range(min = 18, max = 65)
    private int age;
    
    @Email
    private String email;
    
    @Range(min = 0, max = 100000)
    private double salary;
    
    public Employee(String name, int age, String email, double salary) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.salary = salary;
    }
    
    @Test
    @Author("John Doe")
    @MethodInfo(
        author = "Jane Smith",
        date = "2024-01-15",
        version = 2,
        description = "Calculates annual salary"
    )
    public double calculateAnnualSalary() {
        return salary * 12;
    }
    
    @Test
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Email: " + email);
        System.out.println("Salary: $" + salary);
    }
}

// Validator using reflection
class Validator {
    public static void validate(Object obj) throws Exception {
        Class<?> clazz = obj.getClass();
        
        for (java.lang.reflect.Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            
            // Check @NotNull
            if (field.isAnnotationPresent(NotNull.class)) {
                Object value = field.get(obj);
                if (value == null) {
                    throw new Exception(field.getName() + " cannot be null");
                }
            }
            
            // Check @Range
            if (field.isAnnotationPresent(Range.class)) {
                Range range = field.getAnnotation(Range.class);
                if (field.getType() == int.class) {
                    int value = field.getInt(obj);
                    if (value < range.min() || value > range.max()) {
                        throw new Exception(field.getName() + " must be between " + 
                                          range.min() + " and " + range.max());
                    }
                } else if (field.getType() == double.class) {
                    double value = field.getDouble(obj);
                    if (value < range.min() || value > range.max()) {
                        throw new Exception(field.getName() + " must be between " + 
                                          range.min() + " and " + range.max());
                    }
                }
            }
            
            // Check @Email
            if (field.isAnnotationPresent(Email.class)) {
                String value = (String) field.get(obj);
                if (value != null && !value.contains("@")) {
                    throw new Exception(field.getName() + " must be a valid email");
                }
            }
        }
        System.out.println("✓ Validation passed!");
    }
}

// Test runner using reflection
class TestRunner {
    public static void runTests(Class<?> clazz) throws Exception {
        Object obj = clazz.getDeclaredConstructor(
            String.class, int.class, String.class, double.class
        ).newInstance("John Doe", 30, "john@example.com", 5000.0);
        
        System.out.println("=== Running Tests ===\\n");
        
        for (java.lang.reflect.Method method : clazz.getDeclaredMethods()) {
            if (method.isAnnotationPresent(Test.class)) {
                System.out.println("Running test: " + method.getName());
                
                // Display method info if present
                if (method.isAnnotationPresent(MethodInfo.class)) {
                    MethodInfo info = method.getAnnotation(MethodInfo.class);
                    System.out.println("  Author: " + info.author());
                    System.out.println("  Date: " + info.date());
                    System.out.println("  Version: " + info.version());
                    System.out.println("  Description: " + info.description());
                }
                
                // Display author if present
                if (method.isAnnotationPresent(Author.class)) {
                    Author author = method.getAnnotation(Author.class);
                    System.out.println("  Author: " + author.value());
                }
                
                // Execute method
                Object result = method.invoke(obj);
                if (result != null) {
                    System.out.println("  Result: " + result);
                }
                
                System.out.println("  ✓ Test passed\\n");
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            // Valid employee
            Employee emp1 = new Employee("Alice Johnson", 28, "alice@company.com", 6000.0);
            System.out.println("=== Validating Employee 1 ===");
            Validator.validate(emp1);
            
            System.out.println("\\n=== Employee 1 Details ===");
            emp1.displayInfo();
            System.out.println("Annual Salary: $" + emp1.calculateAnnualSalary());
            
            // Run tests
            System.out.println("\\n");
            TestRunner.runTests(Employee.class);
            
            // Invalid employee (will throw exception)
            System.out.println("\\n=== Validating Employee 2 ===");
            Employee emp2 = new Employee("Bob Smith", 70, "invalid-email", 5000.0);
            Validator.validate(emp2);
            
        } catch (Exception e) {
            System.out.println("✗ Validation failed: " + e.getMessage());
        }
    }
}

/* Output:
=== Validating Employee 1 ===
✓ Validation passed!

=== Employee 1 Details ===
Name: Alice Johnson
Age: 28
Email: alice@company.com
Salary: $6000.0
Annual Salary: $72000.0


=== Running Tests ===

Running test: calculateAnnualSalary
  Author: Jane Smith
  Date: 2024-01-15
  Version: 2
  Description: Calculates annual salary
  Author: John Doe
  Result: 72000.0
  ✓ Test passed

Running test: displayInfo
  ✓ Test passed


=== Validating Employee 2 ===
✗ Validation failed: age must be between 18 and 65
*/
      `,
      explanation: `
**Creating Custom Annotations:**
1. Use @interface keyword
2. Add meta-annotations (@Retention, @Target)
3. Define elements (like methods)
4. Provide default values if needed
5. Process using reflection at runtime

**Common Use Cases:**
- Validation frameworks
- Testing frameworks (JUnit)
- Dependency injection (Spring)
- ORM mapping (Hibernate)
      `
    },
    {
      id: 'real-world-example',
      title: '5. Real-World Example - REST API',
      content: `
Let's build a simple REST API framework using custom annotations, similar to Spring Boot.
      `,
      code: `
import java.lang.annotation.*;
import java.lang.reflect.*;

// Custom annotations for REST API
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface RestController {
    String path();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface GetMapping {
    String value();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface PostMapping {
    String value();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface DeleteMapping {
    String value();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.PARAMETER)
@interface PathVariable {
    String value();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.PARAMETER)
@interface RequestBody {
}

// Model class
class User {
    private int id;
    private String name;
    private String email;
    
    public User(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    @Override
    public String toString() {
        return "User{id=" + id + ", name='" + name + "', email='" + email + "'}";
    }
}

// REST Controller
@RestController(path = "/api/users")
class UserController {
    
    @GetMapping("/")
    public String getAllUsers() {
        return "[User1, User2, User3]";
    }
    
    @GetMapping("/{id}")
    public String getUserById(@PathVariable("id") int id) {
        return "User{id=" + id + ", name='John Doe', email='john@example.com'}";
    }
    
    @PostMapping("/")
    public String createUser(@RequestBody User user) {
        return "Created: " + user.toString();
    }
    
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") int id) {
        return "Deleted user with id: " + id;
    }
}

// Simple framework to process annotations
class SimpleFramework {
    public static void processController(Class<?> controllerClass) throws Exception {
        if (!controllerClass.isAnnotationPresent(RestController.class)) {
            System.out.println("Not a REST controller");
            return;
        }
        
        RestController controller = controllerClass.getAnnotation(RestController.class);
        String basePath = controller.path();
        
        System.out.println("=== REST Controller: " + controllerClass.getSimpleName() + " ===");
        System.out.println("Base Path: " + basePath);
        System.out.println("\\nEndpoints:");
        
        Object instance = controllerClass.getDeclaredConstructor().newInstance();
        
        for (Method method : controllerClass.getDeclaredMethods()) {
            String httpMethod = "";
            String path = "";
            
            if (method.isAnnotationPresent(GetMapping.class)) {
                httpMethod = "GET";
                path = method.getAnnotation(GetMapping.class).value();
            } else if (method.isAnnotationPresent(PostMapping.class)) {
                httpMethod = "POST";
                path = method.getAnnotation(PostMapping.class).value();
            } else if (method.isAnnotationPresent(DeleteMapping.class)) {
                httpMethod = "DELETE";
                path = method.getAnnotation(DeleteMapping.class).value();
            }
            
            if (!httpMethod.isEmpty()) {
                System.out.println("\\n" + httpMethod + " " + basePath + path);
                System.out.println("Method: " + method.getName());
                
                // Display parameters
                Parameter[] params = method.getParameters();
                if (params.length > 0) {
                    System.out.println("Parameters:");
                    for (Parameter param : params) {
                        if (param.isAnnotationPresent(PathVariable.class)) {
                            PathVariable pv = param.getAnnotation(PathVariable.class);
                            System.out.println("  - @PathVariable(\\\"" + pv.value() + "\\\") " + 
                                             param.getType().getSimpleName() + " " + param.getName());
                        } else if (param.isAnnotationPresent(RequestBody.class)) {
                            System.out.println("  - @RequestBody " + 
                                             param.getType().getSimpleName() + " " + param.getName());
                        }
                    }
                }
                
                // Simulate API call
                System.out.println("\\nSimulating request...");
                Object result = null;
                
                if (params.length == 0) {
                    result = method.invoke(instance);
                } else if (params[0].isAnnotationPresent(PathVariable.class)) {
                    result = method.invoke(instance, 123);
                } else if (params[0].isAnnotationPresent(RequestBody.class)) {
                    User user = new User(1, "Alice", "alice@example.com");
                    result = method.invoke(instance, user);
                }
                
                System.out.println("Response: " + result);
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            SimpleFramework.processController(UserController.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

/* Output:
=== REST Controller: UserController ===
Base Path: /api/users

Endpoints:

GET /api/users/
Method: getAllUsers

Simulating request...
Response: [User1, User2, User3]

GET /api/users/{id}
Method: getUserById
Parameters:
  - @PathVariable("id") int id

Simulating request...
Response: User{id=123, name='John Doe', email='john@example.com'}

POST /api/users/
Method: createUser
Parameters:
  - @RequestBody User user

Simulating request...
Response: Created: User{id=1, name='Alice', email='alice@example.com'}

DELETE /api/users/{id}
Method: deleteUser
Parameters:
  - @PathVariable("id") int id

Simulating request...
Response: Deleted user with id: 123
*/
      `,
      explanation: `
**Real-World Applications:**
This example demonstrates how frameworks like Spring Boot use annotations:
1. **@RestController** - Marks class as REST controller
2. **@GetMapping/@PostMapping** - Define HTTP endpoints
3. **@PathVariable** - Extract URL parameters
4. **@RequestBody** - Parse request body

**Popular Framework Annotations:**
- **Spring**: @Component, @Service, @Repository, @Autowired
- **JPA/Hibernate**: @Entity, @Table, @Column, @Id
- **JUnit**: @Test, @Before, @After, @BeforeClass
- **Lombok**: @Data, @Getter, @Setter, @Builder
      `
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      question: 'Create a @MinLength and @MaxLength annotation to validate string fields.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Build a @Positive annotation that validates numeric fields are greater than zero.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Design a @Logger annotation that logs method entry, exit, and execution time.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      question: 'Create a @Cache annotation that caches method results for repeated calls with same parameters.',
      difficulty: 'Hard'
    },
    {
      id: 5,
      question: 'Build a simple dependency injection framework using @Inject and @Component annotations.',
      difficulty: 'Hard'
    }
  ],
  keyTakeaways: [
    'Annotations provide metadata about code without changing its behavior',
    'Built-in annotations: @Override, @Deprecated, @SuppressWarnings, @FunctionalInterface',
    'Meta-annotations define how annotations work: @Retention, @Target, @Documented, @Inherited',
    '@Retention defines annotation lifetime: SOURCE, CLASS, or RUNTIME',
    '@Target specifies where annotation can be applied: TYPE, METHOD, FIELD, etc.',
    'Custom annotations use @interface keyword',
    'Reflection is used to process annotations at runtime',
    'Annotations are heavily used in frameworks like Spring, Hibernate, JUnit',
    'Always use @Override to catch overriding errors at compile-time',
    'Custom annotations enable declarative programming and reduce boilerplate code'
  ]
};

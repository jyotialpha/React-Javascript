export const java8FeaturesContent = {
  title: 'Java 8+ Features - Modern Java',
  sections: [
    {
      id: 'lambda',
      title: '1. Lambda Expressions',
      content: `
**Lambda Expression** is concise syntax for anonymous functions.

**Syntax:** (parameters) -> expression

**Benefits:**
- Less boilerplate code
- Functional programming
- Better readability
      `,
      code: `
import java.util.*;

// Before Java 8
Calculator oldAdd = new Calculator() {
    public int calculate(int a, int b) {
        return a + b;
    }
};

// Java 8 Lambda
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

// With collections
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(name -> System.out.println(name));

// Sorting
List<Integer> numbers = Arrays.asList(5, 2, 8, 1);
numbers.sort((a, b) -> a - b);
      `,
      explanation: `
**Key Points:**
1. Lambda reduces 6 lines to 1 line
2. Syntax: (params) -> expression
3. Works with functional interfaces
      `
    },
    {
      id: 'stream',
      title: '2. Stream API',
      content: `
**Stream API** provides functional approach to process collections.

**Common Operations:**
- filter(), map(), reduce()
- collect(), forEach()
- sorted(), distinct()
      `,
      code: `
import java.util.stream.*;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter even numbers
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Map to squares
List<Integer> squares = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());

// Sum using reduce
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);

// Employee example
List<Employee> employees = getEmployees();

List<String> highEarners = employees.stream()
    .filter(e -> e.getSalary() > 50000)
    .sorted((e1, e2) -> e1.getAge() - e2.getAge())
    .map(e -> e.getName())
    .collect(Collectors.toList());

double avgSalary = employees.stream()
    .mapToDouble(Employee::getSalary)
    .average()
    .orElse(0);
      `,
      explanation: `
**Key Operations:**
1. filter(): Select elements
2. map(): Transform elements
3. reduce(): Combine to single result
4. collect(): Convert to collection
      `
    },
    {
      id: 'optional',
      title: '3. Optional Class',
      content: `
**Optional** prevents NullPointerException.

**Methods:**
- of(), empty(), ofNullable()
- isPresent(), get()
- orElse(), orElseGet()
- map(), filter()
      `,
      code: `
import java.util.Optional;

// Creating Optional
Optional<String> opt1 = Optional.of("Hello");
Optional<String> opt2 = Optional.empty();
Optional<String> opt3 = Optional.ofNullable(null);

// Getting values
String value = opt1.get();
String defaultValue = opt2.orElse("Default");
String generated = opt3.orElseGet(() -> "Generated");

// ifPresent
opt1.ifPresent(val -> System.out.println(val));

// map and filter
Optional<Integer> number = Optional.of(5);
Optional<Integer> squared = number.map(n -> n * n);
Optional<Integer> filtered = number.filter(n -> n > 10);

// Real-world example
Optional<String> getUserEmail(User user) {
    return Optional.ofNullable(user)
        .map(u -> u.getEmail())
        .map(String::toUpperCase);
}

String email = getUserEmail(user).orElse("NO EMAIL");
      `,
      explanation: `
**Key Methods:**
1. ofNullable(): Handles null safely
2. orElse(): Provides default value
3. map(): Transforms value
4. Prevents NullPointerException
      `
    },
    {
      id: 'functional',
      title: '4. Functional Interfaces',
      content: `
**Functional Interface** has one abstract method.

**Built-in Interfaces:**
- Predicate<T>: boolean test(T)
- Function<T,R>: R apply(T)
- Consumer<T>: void accept(T)
- Supplier<T>: T get()
      `,
      code: `
import java.util.function.*;

// Predicate - Returns boolean
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4)); // true

// Function - Transforms
Function<String, Integer> length = s -> s.length();
System.out.println(length.apply("Java")); // 4

// Consumer - Accepts input
Consumer<String> print = s -> System.out.println(s);
print.accept("Hello");

// Supplier - Generates value
Supplier<Double> random = () -> Math.random();
System.out.println(random.get());

// Real-world usage
void filterAndProcess(List<Integer> list,
                     Predicate<Integer> filter,
                     Function<Integer, Integer> transformer,
                     Consumer<Integer> consumer) {
    list.stream()
        .filter(filter)
        .map(transformer)
        .forEach(consumer);
}

filterAndProcess(numbers,
    n -> n % 2 == 0,
    n -> n * n,
    n -> System.out.println(n));
      `,
      explanation: `
**Key Interfaces:**
1. Predicate: Test condition
2. Function: Transform input
3. Consumer: Process input
4. Supplier: Generate value
      `
    },
    {
      id: 'method-ref',
      title: '5. Method References',
      content: `
**Method Reference** is shorthand for lambda.

**Types:**
- Static: ClassName::method
- Instance: object::method
- Constructor: ClassName::new
      `,
      code: `
import java.util.*;

// Static method reference
List<String> numbers = Arrays.asList("1", "2", "3");
List<Integer> nums = numbers.stream()
    .map(Integer::parseInt)
    .collect(Collectors.toList());

// Instance method reference
List<String> words = Arrays.asList("hello", "world");
words.stream()
    .map(String::toUpperCase)
    .forEach(System.out::println);

// Constructor reference
List<String> names = Arrays.asList("Alice", "Bob");
List<StringBuilder> builders = names.stream()
    .map(StringBuilder::new)
    .collect(Collectors.toList());

// Product sorting
class Product {
    String name;
    double price;
    
    static int compareByPrice(Product p1, Product p2) {
        return Double.compare(p1.price, p2.price);
    }
}

List<Product> products = getProducts();
products.sort(Product::compareByPrice);
      `,
      explanation: `
**Benefits:**
1. More concise than lambda
2. Better readability
3. Reuses existing methods
      `
    },
    {
      id: 'collectors',
      title: '6. Collectors & Real-World Example',
      content: `
**Collectors** provide powerful aggregation operations.

**Common Collectors:**
- toList(), toSet(), toMap()
- groupingBy(), partitioningBy()
- summingInt(), averagingDouble()
- joining(), counting()
      `,
      code: `
import java.util.stream.Collectors;

class Product {
    String name;
    double price;
    String category;
}

List<Product> products = Arrays.asList(
    new Product("Laptop", 999.99, "Electronics"),
    new Product("Mouse", 29.99, "Electronics"),
    new Product("Desk", 299.99, "Furniture")
);

// Group by category
Map<String, List<Product>> grouped = products.stream()
    .collect(Collectors.groupingBy(p -> p.category));

// Total value by category
Map<String, Double> totalByCategory = products.stream()
    .collect(Collectors.groupingBy(
        p -> p.category,
        Collectors.summingDouble(p -> p.price)
    ));

// Count by category
Map<String, Long> countByCategory = products.stream()
    .collect(Collectors.groupingBy(
        p -> p.category,
        Collectors.counting()
    ));

// Most expensive product
Optional<Product> mostExpensive = products.stream()
    .max((p1, p2) -> Double.compare(p1.price, p2.price));

// Average price
double avgPrice = products.stream()
    .collect(Collectors.averagingDouble(p -> p.price));

// Join names
String names = products.stream()
    .map(p -> p.name)
    .collect(Collectors.joining(", "));

// Partition by price
Map<Boolean, List<Product>> partitioned = products.stream()
    .collect(Collectors.partitioningBy(p -> p.price > 100));
      `,
      explanation: `
**Powerful Operations:**
1. groupingBy(): Categorize elements
2. summingDouble(): Calculate totals
3. counting(): Count elements
4. joining(): Concatenate strings
5. partitioningBy(): Split into two groups
      `
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      question: 'Convert list of strings to uppercase using lambda and Stream API.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Filter even numbers and calculate sum using streams.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Use Optional to safely handle null user objects.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      question: 'Build employee management system using Stream API to filter, sort, and group.',
      difficulty: 'Medium'
    },
    {
      id: 5,
      question: 'Design data processing pipeline using functional interfaces and method references.',
      difficulty: 'Hard'
    }
  ],
  keyTakeaways: [
    'Lambda expressions provide concise syntax for anonymous functions',
    'Stream API enables functional-style operations on collections',
    'Optional helps avoid NullPointerException with explicit null handling',
    'Functional interfaces: Predicate, Function, Consumer, Supplier',
    'Method references are shorthand for lambda expressions',
    'Collectors provide powerful aggregation operations',
    'Streams are lazy - execute only when terminal operation is called',
    'Parallel streams enable concurrent processing',
    'Java 8+ makes code more readable, concise, and maintainable'
  ]
};

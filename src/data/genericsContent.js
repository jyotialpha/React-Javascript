export const genericsContent = {
  title: 'Generics - Type Safety',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction to Generics',
      content: `
**Generics** enable types (classes and interfaces) to be parameters.

**Why Generics?**
- Type safety at compile-time
- Eliminate type casting
- Enable generic algorithms
- Code reusability

**Before Generics:** Runtime errors, type casting required
**With Generics:** Compile-time errors, no casting needed
      `,
      code: `
import java.util.*;

// Without Generics - Unsafe
class WithoutGenerics {
    public static void main(String[] args) {
        List list = new ArrayList();
        list.add("Hello");
        list.add(123);  // Can add any type
        
        String str = (String) list.get(0);  // Type casting required
        String str2 = (String) list.get(1); // Runtime error!
    }
}

// With Generics - Type Safe
class WithGenerics {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Hello");
        // list.add(123);  // Compile-time error!
        
        String str = list.get(0);  // No casting needed
        System.out.println(str);
    }
}

/* Output:
Hello
*/
      `,
      explanation: `
**Key Benefits:**
1. Compile-time type checking
2. No type casting needed
3. Prevents ClassCastException
4. Code is more readable
      `
    },
    {
      id: 'generic-classes',
      title: '2. Generic Classes',
      content: `
**Generic Class** uses type parameters.

**Syntax:** class ClassName<T>

**Common Type Parameters:**
- T: Type
- E: Element
- K: Key
- V: Value
- N: Number
      `,
      code: `
// Generic Box class
class Box<T> {
    private T value;
    
    public void set(T value) {
        this.value = value;
    }
    
    public T get() {
        return value;
    }
    
    public void display() {
        System.out.println("Value: " + value + " (Type: " + value.getClass().getSimpleName() + ")");
    }
}

// Generic Pair class
class Pair<K, V> {
    private K key;
    private V value;
    
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }
    
    public K getKey() { return key; }
    public V getValue() { return value; }
    
    @Override
    public String toString() {
        return "(" + key + ", " + value + ")";
    }
}

public class GenericClassDemo {
    public static void main(String[] args) {
        // Box with String
        Box<String> stringBox = new Box<>();
        stringBox.set("Hello");
        stringBox.display();
        
        // Box with Integer
        Box<Integer> intBox = new Box<>();
        intBox.set(123);
        intBox.display();
        
        // Pair examples
        Pair<String, Integer> pair1 = new Pair<>("Age", 25);
        Pair<Integer, String> pair2 = new Pair<>(1, "First");
        
        System.out.println("\\nPairs:");
        System.out.println(pair1);
        System.out.println(pair2);
    }
}

/* Output:
Value: Hello (Type: String)
Value: 123 (Type: Integer)

Pairs:
(Age, 25)
(1, First)
*/
      `,
      explanation: `
**Key Points:**
1. <T> is type parameter
2. Can use multiple type parameters <K, V>
3. Type is specified when creating object
4. Provides type safety
      `
    },
    {
      id: 'generic-methods',
      title: '3. Generic Methods',
      content: `
**Generic Method** has its own type parameters.

**Syntax:** <T> returnType methodName(T param)

**Can be:**
- Static or non-static
- In generic or non-generic class
      `,
      code: `
public class GenericMethods {
    
    // Generic method to print array
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
    
    // Generic method to find max
    public static <T extends Comparable<T>> T findMax(T a, T b, T c) {
        T max = a;
        if (b.compareTo(max) > 0) max = b;
        if (c.compareTo(max) > 0) max = c;
        return max;
    }
    
    // Generic method to swap
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    // Generic method to check if element exists
    public static <T> boolean contains(T[] array, T element) {
        for (T item : array) {
            if (item.equals(element)) {
                return true;
            }
        }
        return false;
    }
    
    public static void main(String[] args) {
        // Print arrays
        Integer[] intArray = {1, 2, 3, 4, 5};
        String[] strArray = {"Hello", "World", "Java"};
        
        System.out.println("Integer array:");
        printArray(intArray);
        
        System.out.println("String array:");
        printArray(strArray);
        
        // Find max
        System.out.println("\\nMax of 3, 7, 5: " + findMax(3, 7, 5));
        System.out.println("Max of A, Z, M: " + findMax('A', 'Z', 'M'));
        
        // Swap
        System.out.println("\\nBefore swap:");
        printArray(intArray);
        swap(intArray, 0, 4);
        System.out.println("After swap:");
        printArray(intArray);
        
        // Contains
        System.out.println("\\nContains 3? " + contains(intArray, 3));
        System.out.println("Contains 10? " + contains(intArray, 10));
    }
}

/* Output:
Integer array:
1 2 3 4 5 
String array:
Hello World Java 

Max of 3, 7, 5: 7
Max of A, Z, M: Z

Before swap:
1 2 3 4 5 
After swap:
5 2 3 4 1 

Contains 3? true
Contains 10? false
*/
      `,
      explanation: `
**Key Points:**
1. <T> before return type declares type parameter
2. Can work with any type
3. <T extends Comparable<T>> adds constraint
4. Type inference from arguments
      `
    },
    {
      id: 'bounded-types',
      title: '4. Bounded Type Parameters',
      content: `
**Bounded Types** restrict type parameters.

**Upper Bound:** <T extends Class>
- T must be Class or its subclass

**Multiple Bounds:** <T extends Class & Interface>
      `,
      code: `
// Upper bound - Number and its subclasses
class Calculator<T extends Number> {
    private T num1;
    private T num2;
    
    public Calculator(T num1, T num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    
    public double add() {
        return num1.doubleValue() + num2.doubleValue();
    }
    
    public double multiply() {
        return num1.doubleValue() * num2.doubleValue();
    }
}

// Multiple bounds
interface Printable {
    void print();
}

class Data implements Comparable<Data>, Printable {
    int value;
    
    Data(int value) {
        this.value = value;
    }
    
    @Override
    public int compareTo(Data other) {
        return this.value - other.value;
    }
    
    @Override
    public void print() {
        System.out.println("Value: " + value);
    }
}

class Processor<T extends Comparable<T> & Printable> {
    public void process(T obj1, T obj2) {
        obj1.print();
        obj2.print();
        
        if (obj1.compareTo(obj2) > 0) {
            System.out.println("First is greater");
        } else {
            System.out.println("Second is greater or equal");
        }
    }
}

public class BoundedTypesDemo {
    public static void main(String[] args) {
        // Calculator with Integer
        Calculator<Integer> intCalc = new Calculator<>(10, 20);
        System.out.println("Add: " + intCalc.add());
        System.out.println("Multiply: " + intCalc.multiply());
        
        // Calculator with Double
        Calculator<Double> doubleCalc = new Calculator<>(5.5, 2.5);
        System.out.println("\\nAdd: " + doubleCalc.add());
        System.out.println("Multiply: " + doubleCalc.multiply());
        
        // Processor with Data
        System.out.println("\\nProcessor:");
        Processor<Data> processor = new Processor<>();
        processor.process(new Data(10), new Data(20));
    }
}

/* Output:
Add: 30.0
Multiply: 200.0

Add: 8.0
Multiply: 13.75

Processor:
Value: 10
Value: 20
Second is greater or equal
*/
      `,
      explanation: `
**Key Points:**
1. extends restricts to specific type hierarchy
2. Can use methods of bounded type
3. Multiple bounds with & operator
4. Class must come before interfaces
      `
    },
    {
      id: 'wildcards',
      title: '5. Wildcards',
      content: `
**Wildcards** represent unknown type.

**Types:**
- ? : Unbounded wildcard
- ? extends Type : Upper bounded
- ? super Type : Lower bounded
      `,
      code: `
import java.util.*;

public class WildcardsDemo {
    
    // Unbounded wildcard - read only
    public static void printList(List<?> list) {
        for (Object obj : list) {
            System.out.print(obj + " ");
        }
        System.out.println();
    }
    
    // Upper bounded - Number and subclasses
    public static double sumList(List<? extends Number> list) {
        double sum = 0;
        for (Number num : list) {
            sum += num.doubleValue();
        }
        return sum;
    }
    
    // Lower bounded - Integer and superclasses
    public static void addIntegers(List<? super Integer> list) {
        for (int i = 1; i <= 5; i++) {
            list.add(i);
        }
    }
    
    public static void main(String[] args) {
        // Unbounded wildcard
        List<String> strings = Arrays.asList("A", "B", "C");
        List<Integer> integers = Arrays.asList(1, 2, 3);
        
        System.out.println("Unbounded wildcard:");
        printList(strings);
        printList(integers);
        
        // Upper bounded wildcard
        List<Integer> intList = Arrays.asList(1, 2, 3, 4, 5);
        List<Double> doubleList = Arrays.asList(1.5, 2.5, 3.5);
        
        System.out.println("\\nUpper bounded:");
        System.out.println("Sum of integers: " + sumList(intList));
        System.out.println("Sum of doubles: " + sumList(doubleList));
        
        // Lower bounded wildcard
        List<Integer> integerList = new ArrayList<>();
        List<Number> numberList = new ArrayList<>();
        List<Object> objectList = new ArrayList<>();
        
        System.out.println("\\nLower bounded:");
        addIntegers(integerList);
        addIntegers(numberList);
        addIntegers(objectList);
        
        System.out.println("Integer list: " + integerList);
        System.out.println("Number list: " + numberList);
        System.out.println("Object list: " + objectList);
    }
}

/* Output:
Unbounded wildcard:
A B C 
1 2 3 

Upper bounded:
Sum of integers: 15.0
Sum of doubles: 7.5

Lower bounded:
Integer list: [1, 2, 3, 4, 5]
Number list: [1, 2, 3, 4, 5]
Object list: [1, 2, 3, 4, 5]
*/
      `,
      explanation: `
**Wildcard Rules:**
1. ? : Can read as Object, cannot add
2. ? extends T : Can read as T, cannot add
3. ? super T : Can add T, read as Object
4. PECS: Producer Extends, Consumer Super
      `
    },
    {
      id: 'real-world',
      title: '6. Real-World Example',
      content: `
**Generic Repository Pattern** - Database operations with type safety.
      `,
      code: `
import java.util.*;

// Generic Repository interface
interface Repository<T, ID> {
    void save(T entity);
    T findById(ID id);
    List<T> findAll();
    void delete(ID id);
    void update(T entity);
}

// Base Entity
abstract class Entity<ID> {
    protected ID id;
    
    public ID getId() { return id; }
    public void setId(ID id) { this.id = id; }
}

// User entity
class User extends Entity<Integer> {
    private String name;
    private String email;
    
    public User(Integer id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    public String getName() { return name; }
    public String getEmail() { return email; }
    
    @Override
    public String toString() {
        return "User{id=" + id + ", name='" + name + "', email='" + email + "'}";
    }
}

// Generic Repository implementation
class InMemoryRepository<T extends Entity<ID>, ID> implements Repository<T, ID> {
    private Map<ID, T> storage = new HashMap<>();
    
    @Override
    public void save(T entity) {
        storage.put(entity.getId(), entity);
        System.out.println("Saved: " + entity);
    }
    
    @Override
    public T findById(ID id) {
        return storage.get(id);
    }
    
    @Override
    public List<T> findAll() {
        return new ArrayList<>(storage.values());
    }
    
    @Override
    public void delete(ID id) {
        T removed = storage.remove(id);
        System.out.println("Deleted: " + removed);
    }
    
    @Override
    public void update(T entity) {
        storage.put(entity.getId(), entity);
        System.out.println("Updated: " + entity);
    }
}

// Service layer with generics
class UserService {
    private Repository<User, Integer> userRepository;
    
    public UserService(Repository<User, Integer> repository) {
        this.userRepository = repository;
    }
    
    public void createUser(Integer id, String name, String email) {
        User user = new User(id, name, email);
        userRepository.save(user);
    }
    
    public User getUser(Integer id) {
        return userRepository.findById(id);
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public void removeUser(Integer id) {
        userRepository.delete(id);
    }
}

public class Main {
    public static void main(String[] args) {
        // Create repository and service
        Repository<User, Integer> userRepo = new InMemoryRepository<>();
        UserService userService = new UserService(userRepo);
        
        // Create users
        System.out.println("=== Creating Users ===");
        userService.createUser(1, "Alice", "alice@example.com");
        userService.createUser(2, "Bob", "bob@example.com");
        userService.createUser(3, "Charlie", "charlie@example.com");
        
        // Find user
        System.out.println("\\n=== Find User ===");
        User user = userService.getUser(2);
        System.out.println("Found: " + user);
        
        // Get all users
        System.out.println("\\n=== All Users ===");
        List<User> allUsers = userService.getAllUsers();
        allUsers.forEach(System.out::println);
        
        // Delete user
        System.out.println("\\n=== Delete User ===");
        userService.removeUser(2);
        
        // Get all after deletion
        System.out.println("\\n=== After Deletion ===");
        userService.getAllUsers().forEach(System.out::println);
    }
}

/* Output:
=== Creating Users ===
Saved: User{id=1, name='Alice', email='alice@example.com'}
Saved: User{id=2, name='Bob', email='bob@example.com'}
Saved: User{id=3, name='Charlie', email='charlie@example.com'}

=== Find User ===
Found: User{id=2, name='Bob', email='bob@example.com'}

=== All Users ===
User{id=1, name='Alice', email='alice@example.com'}
User{id=2, name='Bob', email='bob@example.com'}
User{id=3, name='Charlie', email='charlie@example.com'}

=== Delete User ===
Deleted: User{id=2, name='Bob', email='bob@example.com'}

=== After Deletion ===
User{id=1, name='Alice', email='alice@example.com'}
User{id=3, name='Charlie', email='charlie@example.com'}
*/
      `,
      explanation: `
**Design Benefits:**
1. Type-safe repository pattern
2. Reusable for any entity type
3. Compile-time type checking
4. No type casting needed
5. Clean separation of concerns
6. Easy to extend for new entities
      `
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      question: 'Create a generic Stack class with push, pop, and peek operations.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Write a generic method to reverse an array of any type.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Implement a generic Pair class that can compare pairs based on first element.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      question: 'Create a generic cache system with get, put, and eviction policy.',
      difficulty: 'Medium'
    },
    {
      id: 5,
      question: 'Design a generic data access layer with CRUD operations for multiple entity types.',
      difficulty: 'Hard'
    }
  ],
  keyTakeaways: [
    'Generics provide compile-time type safety',
    'Eliminate need for type casting',
    'Generic classes use type parameters like <T>',
    'Generic methods can be in generic or non-generic classes',
    'Bounded types restrict type parameters with extends',
    'Wildcards (?) represent unknown types',
    'Upper bound (? extends T) for reading, lower bound (? super T) for writing',
    'PECS principle: Producer Extends, Consumer Super',
    'Generics enable code reusability with type safety'
  ]
};

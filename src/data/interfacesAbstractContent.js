export const interfacesAbstractContent = {
  title: 'Interfaces & Abstract Classes',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: `
**Abstract Classes** and **Interfaces** are two ways to achieve abstraction in Java. They define contracts that implementing classes must follow.

**Key Differences:**
- Abstract class can have both abstract and concrete methods
- Interface has only abstract methods (until Java 8)
- A class can extend only one abstract class but implement multiple interfaces
- Abstract class can have constructors, interfaces cannot

**When to Use:**
- **Abstract Class**: When classes share common code and state
- **Interface**: When you want to define a contract without implementation
      `
    },
    {
      id: 'abstract-classes',
      title: '2. Abstract Classes',
      content: `
**Abstract Class** is a class that cannot be instantiated and may contain abstract methods (methods without body).

**Features:**
- Declared with \`abstract\` keyword
- Can have abstract and concrete methods
- Can have constructors, instance variables
- Can have access modifiers (public, protected, private)
- Supports single inheritance

**Real-world Example**: Vehicle is abstract (you can't have just a "vehicle"), but Car, Bike are concrete.
      `,
      code: `
// Abstract Class Example
abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    
    // Constructor
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Abstract methods - must be implemented by child classes
    public abstract void start();
    public abstract void stop();
    public abstract double calculateMaintenanceCost();
    
    // Concrete method - common to all vehicles
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
}

class Car extends Vehicle {
    private int doors;
    private String fuelType;
    
    public Car(String brand, String model, int year, int doors, String fuelType) {
        super(brand, model, year);
        this.doors = doors;
        this.fuelType = fuelType;
    }
    
    @Override
    public void start() {
        System.out.println(brand + " " + model + " car is starting with key ignition...");
    }
    
    @Override
    public void stop() {
        System.out.println("Car engine stopped.");
    }
    
    @Override
    public double calculateMaintenanceCost() {
        return 500.0; // Base cost for cars
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Doors: " + doors);
        System.out.println("Fuel Type: " + fuelType);
    }
}

class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    
    public Motorcycle(String brand, String model, int year, boolean hasSidecar) {
        super(brand, model, year);
        this.hasSidecar = hasSidecar;
    }
    
    @Override
    public void start() {
        System.out.println(brand + " " + model + " motorcycle is starting with kick/button...");
    }
    
    @Override
    public void stop() {
        System.out.println("Motorcycle engine stopped.");
    }
    
    @Override
    public double calculateMaintenanceCost() {
        return 200.0; // Lower cost for motorcycles
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Has Sidecar: " + (hasSidecar ? "Yes" : "No"));
    }
}

public class Main {
    public static void main(String[] args) {
        // Cannot instantiate: Vehicle v = new Vehicle(); // Error!
        
        Vehicle car = new Car("Toyota", "Camry", 2023, 4, "Petrol");
        Vehicle bike = new Motorcycle("Harley-Davidson", "Street 750", 2022, false);
        
        System.out.println("=== Car Details ===");
        car.displayInfo();
        car.start();
        System.out.println("Maintenance Cost: $" + car.calculateMaintenanceCost());
        car.stop();
        
        System.out.println("\\n=== Motorcycle Details ===");
        bike.displayInfo();
        bike.start();
        System.out.println("Maintenance Cost: $" + bike.calculateMaintenanceCost());
        bike.stop();
    }
}

/* Output:
=== Car Details ===
Brand: Toyota
Model: Camry
Year: 2023
Doors: 4
Fuel Type: Petrol
Toyota Camry car is starting with key ignition...
Maintenance Cost: $500.0
Car engine stopped.

=== Motorcycle Details ===
Brand: Harley-Davidson
Model: Street 750
Year: 2022
Has Sidecar: No
Harley-Davidson Street 750 motorcycle is starting with kick/button...
Maintenance Cost: $200.0
Motorcycle engine stopped.
*/
      `,
      explanation: `
**Key Points:**
1. Vehicle is abstract - cannot create Vehicle object
2. Abstract methods (start, stop) must be implemented
3. Concrete method (displayInfo) can be inherited or overridden
4. Constructor in abstract class is called via super()
5. Polymorphism: Vehicle reference can hold Car or Motorcycle
      `
    },
    {
      id: 'interfaces',
      title: '3. Interfaces',
      content: `
**Interface** is a blueprint of a class that contains only abstract methods (before Java 8). It defines a contract.

**Features:**
- Declared with \`interface\` keyword
- All methods are public and abstract by default
- All variables are public, static, and final (constants)
- A class can implement multiple interfaces
- Supports multiple inheritance

**Real-world Example**: A person can be Drawable, Playable, Readable - multiple behaviors.
      `,
      code: `
// Interface Example
interface Drawable {
    void draw(); // public abstract by default
}

interface Resizable {
    void resize(int width, int height);
}

interface Colorable {
    void setColor(String color);
}

// Class implementing multiple interfaces
class Rectangle implements Drawable, Resizable, Colorable {
    private int width;
    private int height;
    private String color;
    
    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
        this.color = "Black";
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing Rectangle: " + width + "x" + height + " in " + color);
    }
    
    @Override
    public void resize(int width, int height) {
        this.width = width;
        this.height = height;
        System.out.println("Resized to: " + width + "x" + height);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
        System.out.println("Color changed to: " + color);
    }
}

class Circle implements Drawable, Resizable, Colorable {
    private int radius;
    private String color;
    
    public Circle(int radius) {
        this.radius = radius;
        this.color = "Red";
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing Circle with radius: " + radius + " in " + color);
    }
    
    @Override
    public void resize(int width, int height) {
        this.radius = (width + height) / 4;
        System.out.println("Resized circle to radius: " + radius);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
        System.out.println("Color changed to: " + color);
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle(100, 50);
        rect.draw();
        rect.setColor("Blue");
        rect.resize(150, 75);
        rect.draw();
        
        System.out.println("\\n---\\n");
        
        Circle circle = new Circle(30);
        circle.draw();
        circle.setColor("Green");
        circle.resize(80, 80);
        circle.draw();
        
        // Polymorphism with interfaces
        System.out.println("\\n=== Polymorphic Behavior ===");
        Drawable[] shapes = {new Rectangle(200, 100), new Circle(50)};
        for (Drawable shape : shapes) {
            shape.draw();
        }
    }
}

/* Output:
Drawing Rectangle: 100x50 in Black
Color changed to: Blue
Resized to: 150x75
Drawing Rectangle: 150x75 in Blue

---

Drawing Circle with radius: 30 in Red
Color changed to: Green
Resized circle to radius: 40
Drawing Circle with radius: 40 in Green

=== Polymorphic Behavior ===
Drawing Rectangle: 200x100 in Black
Drawing Circle with radius: 50 in Red
*/
      `,
      explanation: `
**Key Points:**
1. Multiple interfaces can be implemented (Drawable, Resizable, Colorable)
2. All interface methods must be implemented
3. Provides multiple inheritance capability
4. Interface reference can hold implementing class objects
5. Promotes loose coupling and flexibility
      `
    },
    {
      id: 'interface-vs-abstract',
      title: '4. Interface vs Abstract Class',
      content: `
**Comparison Table:**

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Methods | Abstract + Concrete | Only Abstract (before Java 8) |
| Variables | Any type | public static final only |
| Constructor | Yes | No |
| Inheritance | Single (extends) | Multiple (implements) |
| Access Modifiers | All | public only |
| When to Use | Common code + state | Pure contract |

**Real-world Example**: Payment processing system
      `,
      code: `
// Abstract Class - Common implementation
abstract class PaymentProcessor {
    protected String transactionId;
    protected double amount;
    
    public PaymentProcessor(double amount) {
        this.amount = amount;
        this.transactionId = generateTransactionId();
    }
    
    // Concrete method - common to all
    private String generateTransactionId() {
        return "TXN" + System.currentTimeMillis();
    }
    
    // Abstract methods
    public abstract boolean validatePayment();
    public abstract void processPayment();
    
    // Concrete method with common logic
    public void completeTransaction() {
        System.out.println("Transaction ID: " + transactionId);
        System.out.println("Amount: $" + amount);
        if (validatePayment()) {
            processPayment();
            System.out.println("Transaction completed successfully!\\n");
        } else {
            System.out.println("Transaction failed!\\n");
        }
    }
}

// Interfaces - Additional capabilities
interface Refundable {
    void refund(double amount);
}

interface Trackable {
    String getTrackingInfo();
}

// Implementation combining abstract class and interfaces
class CreditCardPayment extends PaymentProcessor implements Refundable, Trackable {
    private String cardNumber;
    private String cvv;
    
    public CreditCardPayment(double amount, String cardNumber, String cvv) {
        super(amount);
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    
    @Override
    public boolean validatePayment() {
        System.out.println("Validating credit card...");
        return cardNumber.length() == 16 && cvv.length() == 3;
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing credit card payment of $" + amount);
        System.out.println("Card: ****" + cardNumber.substring(12));
    }
    
    @Override
    public void refund(double amount) {
        System.out.println("Refunding $" + amount + " to credit card");
    }
    
    @Override
    public String getTrackingInfo() {
        return "Credit Card Transaction: " + transactionId;
    }
}

class UPIPayment extends PaymentProcessor implements Trackable {
    private String upiId;
    
    public UPIPayment(double amount, String upiId) {
        super(amount);
        this.upiId = upiId;
    }
    
    @Override
    public boolean validatePayment() {
        System.out.println("Validating UPI ID...");
        return upiId.contains("@");
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing UPI payment of $" + amount);
        System.out.println("UPI ID: " + upiId);
    }
    
    @Override
    public String getTrackingInfo() {
        return "UPI Transaction: " + transactionId;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Credit Card Payment ===");
        CreditCardPayment ccPayment = new CreditCardPayment(150.0, "1234567890123456", "123");
        ccPayment.completeTransaction();
        System.out.println("Tracking: " + ccPayment.getTrackingInfo());
        ccPayment.refund(50.0);
        
        System.out.println("\\n=== UPI Payment ===");
        UPIPayment upiPayment = new UPIPayment(200.0, "user@paytm");
        upiPayment.completeTransaction();
        System.out.println("Tracking: " + upiPayment.getTrackingInfo());
    }
}

/* Output:
=== Credit Card Payment ===
Transaction ID: TXN1234567890123
Amount: $150.0
Validating credit card...
Processing credit card payment of $150.0
Card: ****3456
Transaction completed successfully!

Tracking: Credit Card Transaction: TXN1234567890123
Refunding $50.0 to credit card

=== UPI Payment ===
Transaction ID: TXN1234567890456
Amount: $200.0
Validating UPI ID...
Processing UPI payment of $200.0
UPI ID: user@paytm
Transaction completed successfully!

Tracking: UPI Transaction: TXN1234567890456
*/
      `,
      explanation: `
**Design Decision:**
1. **Abstract Class (PaymentProcessor)**: Common code (transactionId, amount, completeTransaction)
2. **Interfaces (Refundable, Trackable)**: Optional capabilities
3. CreditCardPayment has refund capability, UPIPayment doesn't
4. Both are trackable
5. Flexibility to add more payment types easily
      `
    },
    {
      id: 'java8-features',
      title: '5. Java 8+ Interface Features',
      content: `
**Java 8 introduced:**
1. **Default Methods**: Methods with implementation in interface
2. **Static Methods**: Utility methods in interface

**Why?**
- Add new methods without breaking existing implementations
- Provide common utility methods
      `,
      code: `
interface Logger {
    // Abstract method
    void log(String message);
    
    // Default method - has implementation
    default void logInfo(String message) {
        log("[INFO] " + message);
    }
    
    default void logError(String message) {
        log("[ERROR] " + message);
    }
    
    default void logWarning(String message) {
        log("[WARNING] " + message);
    }
    
    // Static method
    static String formatMessage(String message) {
        return "[" + java.time.LocalDateTime.now() + "] " + message;
    }
}

class ConsoleLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println(Logger.formatMessage(message));
    }
}

class FileLogger implements Logger {
    private String filename;
    
    public FileLogger(String filename) {
        this.filename = filename;
    }
    
    @Override
    public void log(String message) {
        System.out.println("Writing to " + filename + ": " + Logger.formatMessage(message));
    }
    
    // Can override default method if needed
    @Override
    public void logError(String message) {
        log("[CRITICAL ERROR] " + message);
    }
}

public class Main {
    public static void main(String[] args) {
        Logger consoleLogger = new ConsoleLogger();
        consoleLogger.logInfo("Application started");
        consoleLogger.logWarning("Low memory");
        consoleLogger.logError("Connection failed");
        
        System.out.println("\\n---\\n");
        
        Logger fileLogger = new FileLogger("app.log");
        fileLogger.logInfo("User logged in");
        fileLogger.logError("Database error");
    }
}

/* Output:
[2024-01-15T10:30:45.123] [INFO] Application started
[2024-01-15T10:30:45.124] [WARNING] Low memory
[2024-01-15T10:30:45.125] [ERROR] Connection failed

---

Writing to app.log: [2024-01-15T10:30:45.126] [INFO] User logged in
Writing to app.log: [2024-01-15T10:30:45.127] [CRITICAL ERROR] Database error
*/
      `,
      explanation: `
**Key Points:**
1. **Default methods**: Provide implementation in interface
2. **Static methods**: Called using interface name (Logger.formatMessage)
3. Can override default methods if needed
4. Backward compatibility: Add methods without breaking existing code
      `
    },
    {
      id: 'real-world-example',
      title: '6. Real-World Complete Example',
      content: `
**E-Commerce System** with abstract classes and interfaces demonstrating best practices.
      `,
      code: `
// Interface for common behaviors
interface Searchable {
    boolean matches(String keyword);
}

interface Purchasable {
    double getPrice();
    boolean isAvailable();
}

// Abstract class for products
abstract class Product implements Searchable, Purchasable {
    protected String id;
    protected String name;
    protected double price;
    protected int stock;
    
    public Product(String id, String name, double price, int stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    @Override
    public double getPrice() {
        return price;
    }
    
    @Override
    public boolean isAvailable() {
        return stock > 0;
    }
    
    @Override
    public boolean matches(String keyword) {
        return name.toLowerCase().contains(keyword.toLowerCase());
    }
    
    public abstract void displayDetails();
    public abstract double calculateShipping();
}

class Electronics extends Product {
    private String brand;
    private int warrantyMonths;
    
    public Electronics(String id, String name, double price, int stock, 
                      String brand, int warrantyMonths) {
        super(id, name, price, stock);
        this.brand = brand;
        this.warrantyMonths = warrantyMonths;
    }
    
    @Override
    public void displayDetails() {
        System.out.println("\\n=== Electronics ===");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Brand: " + brand);
        System.out.println("Price: $" + price);
        System.out.println("Warranty: " + warrantyMonths + " months");
        System.out.println("Stock: " + stock);
        System.out.println("Shipping: $" + calculateShipping());
    }
    
    @Override
    public double calculateShipping() {
        return 15.0; // Fixed shipping for electronics
    }
}

class Clothing extends Product {
    private String size;
    private String material;
    
    public Clothing(String id, String name, double price, int stock, 
                   String size, String material) {
        super(id, name, price, stock);
        this.size = size;
        this.material = material;
    }
    
    @Override
    public void displayDetails() {
        System.out.println("\\n=== Clothing ===");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Size: " + size);
        System.out.println("Material: " + material);
        System.out.println("Price: $" + price);
        System.out.println("Stock: " + stock);
        System.out.println("Shipping: $" + calculateShipping());
    }
    
    @Override
    public double calculateShipping() {
        return 5.0; // Lower shipping for clothing
    }
}

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Electronics("E001", "Laptop", 999.99, 10, "Dell", 24),
            new Electronics("E002", "Smartphone", 699.99, 25, "Samsung", 12),
            new Clothing("C001", "T-Shirt", 29.99, 50, "L", "Cotton"),
            new Clothing("C002", "Jeans", 59.99, 30, "32", "Denim")
        };
        
        // Display all products
        System.out.println("=== All Products ===");
        for (Product p : products) {
            p.displayDetails();
        }
        
        // Search functionality
        System.out.println("\\n\\n=== Search Results for 'shirt' ===");
        for (Product p : products) {
            if (p.matches("shirt")) {
                p.displayDetails();
            }
        }
        
        // Calculate total cost
        System.out.println("\\n\\n=== Purchase Summary ===");
        double total = 0;
        for (Product p : products) {
            if (p.isAvailable()) {
                double cost = p.getPrice() + p.calculateShipping();
                System.out.println(p.name + ": $" + cost);
                total += cost;
            }
        }
        System.out.println("\\nTotal if buying all: $" + total);
    }
}

/* Output:
=== All Products ===

=== Electronics ===
ID: E001
Name: Laptop
Brand: Dell
Price: $999.99
Warranty: 24 months
Stock: 10
Shipping: $15.0

=== Electronics ===
ID: E002
Name: Smartphone
Brand: Samsung
Price: $699.99
Warranty: 12 months
Stock: 25
Shipping: $15.0

=== Clothing ===
ID: C001
Name: T-Shirt
Size: L
Material: Cotton
Price: $29.99
Stock: 50
Shipping: $5.0

=== Clothing ===
ID: C002
Name: Jeans
Size: 32
Material: Denim
Price: $59.99
Stock: 30
Shipping: $5.0


=== Search Results for 'shirt' ===

=== Clothing ===
ID: C001
Name: T-Shirt
Size: L
Material: Cotton
Price: $29.99
Stock: 50
Shipping: $5.0


=== Purchase Summary ===
Laptop: $1014.99
Smartphone: $714.99
T-Shirt: $34.99
Jeans: $64.99

Total if buying all: $1829.96
*/
      `,
      explanation: `
**Design Highlights:**
1. **Interfaces**: Define contracts (Searchable, Purchasable)
2. **Abstract Class**: Common product logic
3. **Concrete Classes**: Specific implementations (Electronics, Clothing)
4. **Polymorphism**: Array of Product references
5. **Flexibility**: Easy to add new product types
6. **Real-world**: Shipping calculation, search, availability check
      `
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      question: 'Create an abstract class Shape with abstract method area(). Implement Circle, Rectangle, Triangle.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Design interface Playable with play(), pause(), stop(). Implement for AudioPlayer and VideoPlayer.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Build a banking system with abstract class Account and interfaces Transferable, Withdrawable.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      question: 'Create interface Sortable with sort() method. Implement for different sorting algorithms.',
      difficulty: 'Medium'
    },
    {
      id: 5,
      question: 'Design a notification system using abstract class and multiple interfaces for Email, SMS, Push notifications.',
      difficulty: 'Hard'
    }
  ],
  keyTakeaways: [
    'Abstract classes can have both abstract and concrete methods',
    'Interfaces define pure contracts (all methods abstract before Java 8)',
    'A class can extend one abstract class but implement multiple interfaces',
    'Use abstract class when classes share common code and state',
    'Use interface when you want to define capability without implementation',
    'Java 8+ allows default and static methods in interfaces',
    'Abstract classes can have constructors, interfaces cannot',
    'Interfaces support multiple inheritance, abstract classes do not'
  ]
};

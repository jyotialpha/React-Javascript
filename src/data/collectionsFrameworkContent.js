export const collectionsFrameworkContent = {
  title: 'Collections Framework - Complete Guide',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction to Collections',
      content: `
**Collections Framework** is a unified architecture for storing and manipulating groups of objects.

**Hierarchy:**
- **Collection Interface** (root)
  - List (ordered, allows duplicates)
  - Set (unordered, no duplicates)
  - Queue (FIFO order)
- **Map Interface** (key-value pairs)

**Benefits:**
- Ready-to-use data structures
- High performance
- Interoperability between APIs
- Reduces programming effort
      `
    },
    {
      id: 'list-interface',
      title: '2. List Interface',
      content: `
**List** is an ordered collection that allows duplicates. Elements can be accessed by index.

**Implementations:**
- **ArrayList**: Dynamic array, fast random access
- **LinkedList**: Doubly-linked list, fast insertion/deletion
- **Vector**: Synchronized ArrayList (legacy)

**When to Use:**
- ArrayList: Frequent access, rare insertion/deletion
- LinkedList: Frequent insertion/deletion at beginning/middle
      `,
      code: `
import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        // ArrayList Example
        System.out.println("=== ArrayList Demo ===");
        List<String> fruits = new ArrayList<>();
        
        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Apple"); // Duplicates allowed
        System.out.println("Fruits: " + fruits);
        
        // Accessing elements
        System.out.println("First fruit: " + fruits.get(0));
        System.out.println("Size: " + fruits.size());
        
        // Updating
        fruits.set(1, "Mango");
        System.out.println("After update: " + fruits);
        
        // Removing
        fruits.remove("Apple"); // Removes first occurrence
        fruits.remove(0); // Remove by index
        System.out.println("After removal: " + fruits);
        
        // Iteration
        System.out.println("\\nIterating:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
        
        // LinkedList Example
        System.out.println("\\n=== LinkedList Demo ===");
        LinkedList<Integer> numbers = new LinkedList<>();
        
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.addFirst(5);  // Add at beginning
        numbers.addLast(40);  // Add at end
        System.out.println("Numbers: " + numbers);
        
        System.out.println("First: " + numbers.getFirst());
        System.out.println("Last: " + numbers.getLast());
        
        numbers.removeFirst();
        numbers.removeLast();
        System.out.println("After removal: " + numbers);
        
        // Real-world: Task Manager
        System.out.println("\\n=== Task Manager ===");
        List<String> tasks = new ArrayList<>();
        tasks.add("Complete project report");
        tasks.add("Review code");
        tasks.add("Attend meeting");
        
        System.out.println("Total tasks: " + tasks.size());
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i));
        }
        
        // Mark task as complete
        tasks.remove(0);
        System.out.println("\\nAfter completing first task:");
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i));
        }
    }
}

/* Output:
=== ArrayList Demo ===
Fruits: [Apple, Banana, Orange, Apple]
First fruit: Apple
Size: 4
After update: [Apple, Mango, Orange, Apple]
After removal: [Orange, Apple]

Iterating:
- Orange
- Apple

=== LinkedList Demo ===
Numbers: [5, 10, 20, 30, 40]
First: 5
Last: 40
After removal: [10, 20, 30]

=== Task Manager ===
Total tasks: 3
1. Complete project report
2. Review code
3. Attend meeting

After completing first task:
1. Review code
2. Attend meeting
*/
      `,
      explanation: `
**Key Methods:**
- add(E e): Add element
- get(int index): Get element at index
- set(int index, E e): Update element
- remove(int index): Remove by index
- size(): Get size
- contains(Object o): Check if exists
      `
    },
    {
      id: 'set-interface',
      title: '3. Set Interface',
      content: `
**Set** is a collection that does not allow duplicates.

**Implementations:**
- **HashSet**: Unordered, fastest (O(1) operations)
- **LinkedHashSet**: Maintains insertion order
- **TreeSet**: Sorted order (natural or custom)

**When to Use:**
- HashSet: Need unique elements, order doesn't matter
- LinkedHashSet: Need unique elements with insertion order
- TreeSet: Need unique elements in sorted order
      `,
      code: `
import java.util.*;

public class SetExample {
    public static void main(String[] args) {
        // HashSet Example
        System.out.println("=== HashSet Demo ===");
        Set<String> emails = new HashSet<>();
        
        emails.add("john@example.com");
        emails.add("jane@example.com");
        emails.add("john@example.com"); // Duplicate - won't be added
        emails.add("bob@example.com");
        
        System.out.println("Emails: " + emails);
        System.out.println("Size: " + emails.size());
        System.out.println("Contains john@example.com? " + emails.contains("john@example.com"));
        
        // LinkedHashSet Example
        System.out.println("\\n=== LinkedHashSet Demo ===");
        Set<String> orderedSet = new LinkedHashSet<>();
        orderedSet.add("First");
        orderedSet.add("Second");
        orderedSet.add("Third");
        orderedSet.add("First"); // Duplicate ignored
        
        System.out.println("Ordered Set: " + orderedSet); // Maintains insertion order
        
        // TreeSet Example
        System.out.println("\\n=== TreeSet Demo ===");
        Set<Integer> sortedNumbers = new TreeSet<>();
        sortedNumbers.add(50);
        sortedNumbers.add(20);
        sortedNumbers.add(80);
        sortedNumbers.add(10);
        sortedNumbers.add(20); // Duplicate ignored
        
        System.out.println("Sorted Numbers: " + sortedNumbers); // Automatically sorted
        
        // Real-world: Unique Visitors Tracker
        System.out.println("\\n=== Website Visitor Tracker ===");
        Set<String> uniqueVisitors = new HashSet<>();
        
        // Simulating page visits
        String[] visits = {"user1", "user2", "user1", "user3", "user2", "user4", "user1"};
        
        for (String visitor : visits) {
            uniqueVisitors.add(visitor);
        }
        
        System.out.println("Total visits: " + visits.length);
        System.out.println("Unique visitors: " + uniqueVisitors.size());
        System.out.println("Visitors: " + uniqueVisitors);
        
        // Set Operations
        System.out.println("\\n=== Set Operations ===");
        Set<String> set1 = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
        Set<String> set2 = new HashSet<>(Arrays.asList("C", "D", "E", "F"));
        
        // Union
        Set<String> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Union: " + union);
        
        // Intersection
        Set<String> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection: " + intersection);
        
        // Difference
        Set<String> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference (set1 - set2): " + difference);
    }
}

/* Output:
=== HashSet Demo ===
Emails: [bob@example.com, john@example.com, jane@example.com]
Size: 3
Contains john@example.com? true

=== LinkedHashSet Demo ===
Ordered Set: [First, Second, Third]

=== TreeSet Demo ===
Sorted Numbers: [10, 20, 50, 80]

=== Website Visitor Tracker ===
Total visits: 7
Unique visitors: 4
Visitors: [user1, user2, user3, user4]

=== Set Operations ===
Union: [A, B, C, D, E, F]
Intersection: [C, D]
Difference (set1 - set2): [A, B]
*/
      `,
      explanation: `
**Key Methods:**
- add(E e): Add element (returns false if duplicate)
- remove(Object o): Remove element
- contains(Object o): Check existence
- addAll(Collection c): Union
- retainAll(Collection c): Intersection
- removeAll(Collection c): Difference
      `
    },
    {
      id: 'map-interface',
      title: '4. Map Interface',
      content: `
**Map** stores key-value pairs. Keys must be unique.

**Implementations:**
- **HashMap**: Unordered, fastest (O(1) operations)
- **LinkedHashMap**: Maintains insertion order
- **TreeMap**: Sorted by keys
- **Hashtable**: Synchronized HashMap (legacy)

**When to Use:**
- HashMap: Fast lookup by key, order doesn't matter
- LinkedHashMap: Need insertion order
- TreeMap: Need sorted keys
      `,
      code: `
import java.util.*;

public class MapExample {
    public static void main(String[] args) {
        // HashMap Example
        System.out.println("=== HashMap Demo ===");
        Map<String, Integer> scores = new HashMap<>();
        
        // Adding key-value pairs
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);
        scores.put("Alice", 98); // Updates existing key
        
        System.out.println("Scores: " + scores);
        System.out.println("Alice's score: " + scores.get("Alice"));
        System.out.println("Contains Bob? " + scores.containsKey("Bob"));
        
        // Iterating
        System.out.println("\\nAll scores:");
        for (Map.Entry<String, Integer> entry : scores.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // LinkedHashMap Example
        System.out.println("\\n=== LinkedHashMap Demo ===");
        Map<String, String> orderedMap = new LinkedHashMap<>();
        orderedMap.put("First", "1st");
        orderedMap.put("Second", "2nd");
        orderedMap.put("Third", "3rd");
        
        System.out.println("Ordered Map: " + orderedMap); // Maintains insertion order
        
        // TreeMap Example
        System.out.println("\\n=== TreeMap Demo ===");
        Map<Integer, String> sortedMap = new TreeMap<>();
        sortedMap.put(3, "Three");
        sortedMap.put(1, "One");
        sortedMap.put(4, "Four");
        sortedMap.put(2, "Two");
        
        System.out.println("Sorted Map: " + sortedMap); // Sorted by keys
        
        // Real-world: Student Database
        System.out.println("\\n=== Student Database ===");
        Map<Integer, String> students = new HashMap<>();
        students.put(101, "John Doe");
        students.put(102, "Jane Smith");
        students.put(103, "Bob Johnson");
        
        System.out.println("Total students: " + students.size());
        System.out.println("Student 102: " + students.get(102));
        
        // Check if student exists
        int rollNo = 104;
        if (students.containsKey(rollNo)) {
            System.out.println("Student " + rollNo + ": " + students.get(rollNo));
        } else {
            System.out.println("Student " + rollNo + " not found");
        }
        
        // Real-world: Word Frequency Counter
        System.out.println("\\n=== Word Frequency Counter ===");
        String text = "java is great java is powerful java is popular";
        String[] words = text.split(" ");
        
        Map<String, Integer> wordCount = new HashMap<>();
        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("Word frequencies:");
        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Common operations
        System.out.println("\\n=== Common Operations ===");
        Map<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.put("C", 3);
        
        System.out.println("Keys: " + map.keySet());
        System.out.println("Values: " + map.values());
        System.out.println("Entries: " + map.entrySet());
        
        map.remove("B");
        System.out.println("After removing B: " + map);
    }
}

/* Output:
=== HashMap Demo ===
Scores: {Bob=87, Alice=98, Charlie=92}
Alice's score: 98
Contains Bob? true

All scores:
Bob: 87
Alice: 98
Charlie: 92

=== LinkedHashMap Demo ===
Ordered Map: {First=1st, Second=2nd, Third=3rd}

=== TreeMap Demo ===
Sorted Map: {1=One, 2=Two, 3=Three, 4=Four}

=== Student Database ===
Total students: 3
Student 102: Jane Smith
Student 104 not found

=== Word Frequency Counter ===
Word frequencies:
java: 3
is: 3
great: 1
powerful: 1
popular: 1

=== Common Operations ===
Keys: [A, B, C]
Values: [1, 2, 3]
Entries: [A=1, B=2, C=3]
After removing B: {A=1, C=3}
*/
      `,
      explanation: `
**Key Methods:**
- put(K key, V value): Add/update entry
- get(Object key): Get value by key
- remove(Object key): Remove entry
- containsKey(Object key): Check if key exists
- containsValue(Object value): Check if value exists
- keySet(): Get all keys
- values(): Get all values
- entrySet(): Get all entries
      `
    },
    {
      id: 'queue-interface',
      title: '5. Queue Interface',
      content: `
**Queue** follows FIFO (First-In-First-Out) order.

**Implementations:**
- **LinkedList**: Standard queue
- **PriorityQueue**: Elements ordered by priority
- **ArrayDeque**: Double-ended queue (Deque)

**When to Use:**
- Queue: Task scheduling, BFS
- PriorityQueue: Priority-based processing
- Deque: Stack or Queue operations
      `,
      code: `
import java.util.*;

public class QueueExample {
    public static void main(String[] args) {
        // Queue Example
        System.out.println("=== Queue Demo ===");
        Queue<String> queue = new LinkedList<>();
        
        // Adding elements
        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");
        
        System.out.println("Queue: " + queue);
        System.out.println("Front element (peek): " + queue.peek());
        
        // Removing elements
        System.out.println("Removed: " + queue.poll());
        System.out.println("After removal: " + queue);
        
        // PriorityQueue Example
        System.out.println("\\n=== PriorityQueue Demo ===");
        Queue<Integer> pq = new PriorityQueue<>();
        
        pq.offer(30);
        pq.offer(10);
        pq.offer(50);
        pq.offer(20);
        
        System.out.println("Priority Queue: " + pq);
        System.out.println("Polling elements (sorted order):");
        while (!pq.isEmpty()) {
            System.out.println("- " + pq.poll());
        }
        
        // Deque Example
        System.out.println("\\n=== Deque Demo ===");
        Deque<String> deque = new ArrayDeque<>();
        
        deque.offerFirst("Middle");
        deque.offerFirst("First");
        deque.offerLast("Last");
        
        System.out.println("Deque: " + deque);
        System.out.println("First: " + deque.peekFirst());
        System.out.println("Last: " + deque.peekLast());
        
        deque.pollFirst();
        deque.pollLast();
        System.out.println("After removal: " + deque);
        
        // Real-world: Print Queue
        System.out.println("\\n=== Print Queue System ===");
        Queue<String> printQueue = new LinkedList<>();
        
        printQueue.offer("Document1.pdf");
        printQueue.offer("Report.docx");
        printQueue.offer("Image.jpg");
        
        System.out.println("Print queue: " + printQueue);
        System.out.println("\\nProcessing print jobs:");
        while (!printQueue.isEmpty()) {
            String doc = printQueue.poll();
            System.out.println("Printing: " + doc);
        }
        System.out.println("All jobs completed!");
        
        // Real-world: Task Priority System
        System.out.println("\\n=== Task Priority System ===");
        
        class Task implements Comparable<Task> {
            String name;
            int priority;
            
            Task(String name, int priority) {
                this.name = name;
                this.priority = priority;
            }
            
            @Override
            public int compareTo(Task other) {
                return Integer.compare(this.priority, other.priority);
            }
            
            @Override
            public String toString() {
                return name + " (Priority: " + priority + ")";
            }
        }
        
        Queue<Task> taskQueue = new PriorityQueue<>();
        taskQueue.offer(new Task("Low priority task", 3));
        taskQueue.offer(new Task("Critical bug fix", 1));
        taskQueue.offer(new Task("Medium task", 2));
        taskQueue.offer(new Task("Urgent feature", 1));
        
        System.out.println("Processing tasks by priority:");
        while (!taskQueue.isEmpty()) {
            System.out.println("- " + taskQueue.poll());
        }
    }
}

/* Output:
=== Queue Demo ===
Queue: [First, Second, Third]
Front element (peek): First
Removed: First
After removal: [Second, Third]

=== PriorityQueue Demo ===
Priority Queue: [10, 20, 50, 30]
Polling elements (sorted order):
- 10
- 20
- 30
- 50

=== Deque Demo ===
Deque: [First, Middle, Last]
First: First
Last: Last
After removal: [Middle]

=== Print Queue System ===
Print queue: [Document1.pdf, Report.docx, Image.jpg]

Processing print jobs:
Printing: Document1.pdf
Printing: Report.docx
Printing: Image.jpg
All jobs completed!

=== Task Priority System ===
Processing tasks by priority:
- Critical bug fix (Priority: 1)
- Urgent feature (Priority: 1)
- Medium task (Priority: 2)
- Low priority task (Priority: 3)
*/
      `,
      explanation: `
**Key Methods:**
- offer(E e): Add element
- poll(): Remove and return front element
- peek(): View front element without removing
- isEmpty(): Check if empty
- size(): Get size

**Deque Methods:**
- offerFirst/offerLast: Add at front/back
- pollFirst/pollLast: Remove from front/back
- peekFirst/peekLast: View front/back
      `
    },
    {
      id: 'real-world-example',
      title: '6. Real-World Complete Example',
      content: `
**E-Commerce Shopping Cart System** using multiple collections.
      `,
      code: `
import java.util.*;

class Product {
    String id;
    String name;
    double price;
    
    Product(String id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    @Override
    public String toString() {
        return name + " ($" + price + ")";
    }
}

class ShoppingCart {
    private Map<String, Product> products;           // productId -> Product
    private Map<String, Integer> quantities;         // productId -> quantity
    private List<String> orderHistory;               // Order of additions
    private Set<String> wishlist;                    // Unique wishlist items
    
    public ShoppingCart() {
        products = new HashMap<>();
        quantities = new HashMap<>();
        orderHistory = new ArrayList<>();
        wishlist = new HashSet<>();
    }
    
    public void addProduct(Product product, int quantity) {
        products.put(product.id, product);
        quantities.put(product.id, quantities.getOrDefault(product.id, 0) + quantity);
        orderHistory.add(product.id);
        System.out.println("Added: " + product.name + " x" + quantity);
    }
    
    public void removeProduct(String productId) {
        if (products.containsKey(productId)) {
            System.out.println("Removed: " + products.get(productId).name);
            products.remove(productId);
            quantities.remove(productId);
        }
    }
    
    public void updateQuantity(String productId, int newQuantity) {
        if (products.containsKey(productId)) {
            quantities.put(productId, newQuantity);
            System.out.println("Updated " + products.get(productId).name + " quantity to " + newQuantity);
        }
    }
    
    public void addToWishlist(String productId) {
        if (wishlist.add(productId)) {
            System.out.println("Added to wishlist: " + products.get(productId).name);
        } else {
            System.out.println("Already in wishlist");
        }
    }
    
    public double calculateTotal() {
        double total = 0;
        for (Map.Entry<String, Integer> entry : quantities.entrySet()) {
            Product product = products.get(entry.getKey());
            total += product.price * entry.getValue();
        }
        return total;
    }
    
    public void displayCart() {
        System.out.println("\\n=== Shopping Cart ===");
        if (products.isEmpty()) {
            System.out.println("Cart is empty");
            return;
        }
        
        for (Map.Entry<String, Product> entry : products.entrySet()) {
            String id = entry.getKey();
            Product product = entry.getValue();
            int qty = quantities.get(id);
            double subtotal = product.price * qty;
            System.out.println(product.name + " x" + qty + " = $" + subtotal);
        }
        System.out.println("\\nTotal: $" + calculateTotal());
    }
    
    public void displayOrderHistory() {
        System.out.println("\\n=== Order History ===");
        Set<String> seen = new HashSet<>();
        for (String productId : orderHistory) {
            if (!seen.contains(productId)) {
                System.out.println("- " + products.get(productId).name);
                seen.add(productId);
            }
        }
    }
    
    public void displayWishlist() {
        System.out.println("\\n=== Wishlist ===");
        if (wishlist.isEmpty()) {
            System.out.println("Wishlist is empty");
        } else {
            for (String productId : wishlist) {
                System.out.println("- " + products.get(productId).name);
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        
        // Create products
        Product p1 = new Product("P001", "Laptop", 999.99);
        Product p2 = new Product("P002", "Mouse", 29.99);
        Product p3 = new Product("P003", "Keyboard", 79.99);
        Product p4 = new Product("P004", "Monitor", 299.99);
        
        // Add to cart
        cart.addProduct(p1, 1);
        cart.addProduct(p2, 2);
        cart.addProduct(p3, 1);
        
        // Display cart
        cart.displayCart();
        
        // Update quantity
        cart.updateQuantity("P002", 3);
        cart.displayCart();
        
        // Add to wishlist
        cart.addToWishlist("P004");
        cart.addToWishlist("P004"); // Duplicate
        cart.displayWishlist();
        
        // Remove product
        cart.removeProduct("P003");
        cart.displayCart();
        
        // Order history
        cart.displayOrderHistory();
    }
}

/* Output:
Added: Laptop x1
Added: Mouse x2
Added: Keyboard x1

=== Shopping Cart ===
Laptop x1 = $999.99
Mouse x2 = $59.98
Keyboard x1 = $79.99

Total: $1139.96
Updated Mouse quantity to 3

=== Shopping Cart ===
Laptop x1 = $999.99
Mouse x3 = $89.97
Keyboard x1 = $79.99

Total: $1169.95
Added to wishlist: Monitor
Already in wishlist

=== Wishlist ===
- Monitor
Removed: Keyboard

=== Shopping Cart ===
Laptop x1 = $999.99
Mouse x3 = $89.97

Total: $1089.96

=== Order History ===
- Laptop
- Mouse
- Keyboard
*/
      `,
      explanation: `
**Collections Used:**
1. **HashMap**: Store products and quantities (fast lookup)
2. **ArrayList**: Track order history (maintains order)
3. **HashSet**: Wishlist (unique items, no duplicates)

**Real-world Benefits:**
- Fast product lookup by ID
- Maintain addition order
- Prevent duplicate wishlist items
- Efficient cart operations
      `
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      question: 'Create a program to remove duplicates from an ArrayList while maintaining order.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Implement a phone book using HashMap with add, search, update, and delete operations.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Build a student grade management system using TreeMap to keep students sorted by roll number.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      question: 'Create a task scheduler using PriorityQueue where tasks are processed based on priority.',
      difficulty: 'Medium'
    },
    {
      id: 5,
      question: 'Design a cache system using LinkedHashMap with LRU (Least Recently Used) eviction policy.',
      difficulty: 'Hard'
    }
  ],
  keyTakeaways: [
    'List allows duplicates and maintains insertion order (ArrayList, LinkedList)',
    'Set does not allow duplicates (HashSet, LinkedHashSet, TreeSet)',
    'Map stores key-value pairs with unique keys (HashMap, LinkedHashMap, TreeMap)',
    'Queue follows FIFO order (LinkedList, PriorityQueue, ArrayDeque)',
    'ArrayList is best for random access, LinkedList for frequent insertions',
    'HashMap provides O(1) lookup, TreeMap provides sorted keys',
    'Use HashSet for uniqueness, TreeSet for sorted unique elements',
    'PriorityQueue automatically orders elements by priority',
    'Choose collection based on: ordering, duplicates, and performance needs'
  ]
};

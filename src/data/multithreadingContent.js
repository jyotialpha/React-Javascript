export const multithreadingContent = {
  title: 'Multithreading - Concurrent Programming',
  sections: [
    {
      id: 'introduction',
      title: '1. What is Multithreading?',
      content: `
**Thread** is a lightweight subprocess, the smallest unit of processing.

**Multithreading** allows concurrent execution of two or more parts of a program.

**Why Multithreading?**
- Better CPU utilization
- Improved application responsiveness
- Parallel task execution
- Resource sharing within process

**Real-world Example:** Browser downloads file while you browse other tabs.
      `,
      code: `
// Without Multithreading - Sequential execution
public class WithoutThreads {
    public static void task1() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task 1 - Count: " + i);
            try { Thread.sleep(500); } catch (Exception e) {}
        }
    }
    
    public static void task2() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task 2 - Count: " + i);
            try { Thread.sleep(500); } catch (Exception e) {}
        }
    }
    
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        task1();  // Completes first
        task2();  // Then starts
        long end = System.currentTimeMillis();
        System.out.println("Total time: " + (end - start) + "ms");
    }
}

/* Output:
Task 1 - Count: 1
Task 1 - Count: 2
...
Task 2 - Count: 1
Task 2 - Count: 2
...
Total time: ~5000ms
*/

// With Multithreading - Concurrent execution
class Task1 extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task 1 - Count: " + i);
            try { Thread.sleep(500); } catch (Exception e) {}
        }
    }
}

class Task2 extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task 2 - Count: " + i);
            try { Thread.sleep(500); } catch (Exception e) {}
        }
    }
}

public class WithThreads {
    public static void main(String[] args) throws InterruptedException {
        long start = System.currentTimeMillis();
        
        Task1 t1 = new Task1();
        Task2 t2 = new Task2();
        
        t1.start();  // Both run
        t2.start();  // concurrently
        
        t1.join();
        t2.join();
        
        long end = System.currentTimeMillis();
        System.out.println("Total time: " + (end - start) + "ms");
    }
}

/* Output:
Task 1 - Count: 1
Task 2 - Count: 1
Task 1 - Count: 2
Task 2 - Count: 2
...
Total time: ~2500ms (50% faster!)
*/
      `,
      explanation: `
**Key Concepts:**
1. Without threads: Sequential execution (5000ms)
2. With threads: Concurrent execution (2500ms)
3. start() begins thread execution
4. join() waits for thread completion
5. Threads run independently and simultaneously
      `
    },
    {
      id: 'creating-threads',
      title: '2. Creating Threads',
      content: `
**Two ways to create threads:**

**Method 1: Extend Thread class**
- Simple and straightforward
- Cannot extend other classes (single inheritance)

**Method 2: Implement Runnable interface**
- More flexible (can extend other classes)
- Preferred approach
- Separates task from thread mechanism
      `,
      code: `
// Method 1: Extending Thread class
class MyThread extends Thread {
    private String taskName;
    
    public MyThread(String taskName) {
        this.taskName = taskName;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(taskName + " - " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println(taskName + " completed!");
    }
}

// Method 2: Implementing Runnable interface
class MyRunnable implements Runnable {
    private String taskName;
    
    public MyRunnable(String taskName) {
        this.taskName = taskName;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(taskName + " - " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println(taskName + " completed!");
    }
}

// Method 3: Lambda expression (Java 8+)
public class ThreadCreation {
    public static void main(String[] args) {
        System.out.println("=== Method 1: Extending Thread ===");
        MyThread thread1 = new MyThread("Thread-1");
        thread1.start();
        
        try { Thread.sleep(3500); } catch (Exception e) {}
        
        System.out.println("\\n=== Method 2: Implementing Runnable ===");
        Thread thread2 = new Thread(new MyRunnable("Thread-2"));
        thread2.start();
        
        try { Thread.sleep(3500); } catch (Exception e) {}
        
        System.out.println("\\n=== Method 3: Lambda Expression ===");
        Thread thread3 = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                System.out.println("Lambda Thread - " + i);
                try { Thread.sleep(1000); } catch (Exception e) {}
            }
            System.out.println("Lambda Thread completed!");
        });
        thread3.start();
        
        // Thread information
        System.out.println("\\n=== Thread Information ===");
        System.out.println("Thread Name: " + thread3.getName());
        System.out.println("Thread ID: " + thread3.getId());
        System.out.println("Thread Priority: " + thread3.getPriority());
        System.out.println("Is Alive: " + thread3.isAlive());
    }
}

/* Output:
=== Method 1: Extending Thread ===
Thread-1 - 1
Thread-1 - 2
Thread-1 - 3
Thread-1 completed!

=== Method 2: Implementing Runnable ===
Thread-2 - 1
Thread-2 - 2
Thread-2 - 3
Thread-2 completed!

=== Method 3: Lambda Expression ===
Lambda Thread - 1
Lambda Thread - 2
Lambda Thread - 3
Lambda Thread completed!

=== Thread Information ===
Thread Name: Thread-2
Thread ID: 13
Thread Priority: 5
Is Alive: true
*/
      `,
      explanation: `
**Key Methods:**
1. start(): Begins thread execution, calls run()
2. run(): Contains code to be executed by thread
3. sleep(ms): Pauses thread for specified time
4. join(): Waits for thread to complete
5. getName(), setName(): Get/set thread name
6. getPriority(), setPriority(): Get/set priority (1-10)
      `
    },
    {
      id: 'thread-lifecycle',
      title: '3. Thread Lifecycle & States',
      content: `
**Thread States:**
1. **NEW**: Thread created but not started
2. **RUNNABLE**: Thread ready to run or running
3. **BLOCKED**: Waiting for monitor lock
4. **WAITING**: Waiting indefinitely for another thread
5. **TIMED_WAITING**: Waiting for specified time
6. **TERMINATED**: Thread completed execution
      `,
      code: `
public class ThreadLifecycle {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            System.out.println("Thread started");
            
            // TIMED_WAITING state
            try {
                System.out.println("Thread sleeping...");
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            
            System.out.println("Thread finishing");
        });
        
        // NEW state
        System.out.println("1. State after creation: " + thread.getState());
        
        // Start thread
        thread.start();
        
        // RUNNABLE state
        System.out.println("2. State after start(): " + thread.getState());
        
        // Wait a bit
        Thread.sleep(500);
        
        // TIMED_WAITING state
        System.out.println("3. State during sleep(): " + thread.getState());
        
        // Wait for completion
        thread.join();
        
        // TERMINATED state
        System.out.println("4. State after completion: " + thread.getState());
    }
}

/* Output:
1. State after creation: NEW
2. State after start(): RUNNABLE
Thread started
Thread sleeping...
3. State during sleep(): TIMED_WAITING
Thread finishing
4. State after completion: TERMINATED
*/
      `,
      explanation: `
**State Transitions:**
1. NEW → RUNNABLE: start() called
2. RUNNABLE → TIMED_WAITING: sleep() called
3. TIMED_WAITING → RUNNABLE: sleep time expires
4. RUNNABLE → TERMINATED: run() completes
5. RUNNABLE → BLOCKED: waiting for lock
      `
    },
    {
      id: 'synchronization',
      title: '4. Synchronization - Thread Safety',
      content: `
**Synchronization** prevents thread interference and memory consistency errors.

**Problem:** Multiple threads accessing shared resource simultaneously causes data inconsistency.

**Solution:** synchronized keyword ensures only one thread accesses resource at a time.

**Types:**
1. Synchronized method
2. Synchronized block
      `,
      code: `
// Without Synchronization - Race Condition
class Counter {
    private int count = 0;
    
    public void increment() {
        count++;  // Not thread-safe
    }
    
    public int getCount() {
        return count;
    }
}

// With Synchronization - Thread Safe
class SynchronizedCounter {
    private int count = 0;
    
    // Synchronized method
    public synchronized void increment() {
        count++;  // Thread-safe
    }
    
    public int getCount() {
        return count;
    }
}

// Synchronized Block
class BankAccount {
    private double balance = 1000;
    
    public void withdraw(double amount) {
        synchronized(this) {  // Synchronized block
            if (balance >= amount) {
                System.out.println(Thread.currentThread().getName() + 
                                 " withdrawing $" + amount);
                balance -= amount;
                System.out.println(Thread.currentThread().getName() + 
                                 " - New balance: $" + balance);
            } else {
                System.out.println(Thread.currentThread().getName() + 
                                 " - Insufficient balance");
            }
        }
    }
    
    public double getBalance() {
        return balance;
    }
}

public class SynchronizationDemo {
    public static void main(String[] args) throws InterruptedException {
        // Without Synchronization
        System.out.println("=== Without Synchronization ===");
        Counter counter = new Counter();
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });
        
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        
        System.out.println("Expected: 2000");
        System.out.println("Actual: " + counter.getCount());  // May be less than 2000!
        
        // With Synchronization
        System.out.println("\\n=== With Synchronization ===");
        SynchronizedCounter syncCounter = new SynchronizedCounter();
        
        Thread t3 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) syncCounter.increment();
        });
        
        Thread t4 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) syncCounter.increment();
        });
        
        t3.start();
        t4.start();
        t3.join();
        t4.join();
        
        System.out.println("Expected: 2000");
        System.out.println("Actual: " + syncCounter.getCount());  // Always 2000
        
        // Bank Account Example
        System.out.println("\\n=== Bank Account Synchronization ===");
        BankAccount account = new BankAccount();
        
        Thread user1 = new Thread(() -> account.withdraw(600), "User-1");
        Thread user2 = new Thread(() -> account.withdraw(600), "User-2");
        
        user1.start();
        user2.start();
        user1.join();
        user2.join();
        
        System.out.println("Final balance: $" + account.getBalance());
    }
}

/* Output:
=== Without Synchronization ===
Expected: 2000
Actual: 1847  (Race condition - inconsistent result)

=== With Synchronization ===
Expected: 2000
Actual: 2000  (Consistent result)

=== Bank Account Synchronization ===
User-1 withdrawing $600.0
User-1 - New balance: $400.0
User-2 - Insufficient balance
Final balance: $400.0
*/
      `,
      explanation: `
**Key Concepts:**
1. Race condition: Multiple threads modify shared data simultaneously
2. synchronized method: Locks entire method
3. synchronized block: Locks specific code section
4. Only one thread can execute synchronized code at a time
5. Other threads wait until lock is released
6. Prevents data inconsistency
      `
    },
    {
      id: 'inter-thread-communication',
      title: '5. Inter-Thread Communication',
      content: `
**Inter-thread communication** allows threads to communicate with each other.

**Methods:**
- wait(): Thread releases lock and waits
- notify(): Wakes up one waiting thread
- notifyAll(): Wakes up all waiting threads

**Use Case:** Producer-Consumer problem
      `,
      code: `
class SharedResource {
    private int data;
    private boolean hasData = false;
    
    // Producer produces data
    public synchronized void produce(int value) {
        while (hasData) {
            try {
                wait();  // Wait if data already exists
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        this.data = value;
        hasData = true;
        System.out.println("Produced: " + value);
        notify();  // Notify consumer
    }
    
    // Consumer consumes data
    public synchronized int consume() {
        while (!hasData) {
            try {
                wait();  // Wait if no data available
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        hasData = false;
        System.out.println("Consumed: " + data);
        notify();  // Notify producer
        return data;
    }
}

class Producer extends Thread {
    private SharedResource resource;
    
    public Producer(SharedResource resource) {
        this.resource = resource;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            resource.produce(i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class Consumer extends Thread {
    private SharedResource resource;
    
    public Consumer(SharedResource resource) {
        this.resource = resource;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            resource.consume();
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ProducerConsumerDemo {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();
        
        Producer producer = new Producer(resource);
        Consumer consumer = new Consumer(resource);
        
        producer.start();
        consumer.start();
    }
}

/* Output:
Produced: 1
Consumed: 1
Produced: 2
Consumed: 2
Produced: 3
Consumed: 3
Produced: 4
Consumed: 4
Produced: 5
Consumed: 5
*/
      `,
      explanation: `
**Key Concepts:**
1. wait(): Releases lock and waits for notification
2. notify(): Wakes up one waiting thread
3. Producer waits if data exists
4. Consumer waits if no data available
5. Prevents data loss and ensures proper synchronization
6. Must be called within synchronized context
      `
    },
    {
      id: 'executor-framework',
      title: '6. Executor Framework - Modern Approach',
      content: `
**Executor Framework** provides high-level API for thread management.

**Benefits:**
- Thread pool management
- Better resource utilization
- Simplified thread creation
- Built-in task scheduling

**Types:**
- FixedThreadPool: Fixed number of threads
- CachedThreadPool: Creates threads as needed
- SingleThreadExecutor: Single worker thread
- ScheduledThreadPool: Scheduled task execution
      `,
      code: `
import java.util.concurrent.*;
import java.util.*;

public class ExecutorFrameworkDemo {
    
    // Task 1: Simple task
    static class Task implements Runnable {
        private String name;
        
        public Task(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            System.out.println(name + " started by " + 
                             Thread.currentThread().getName());
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(name + " completed");
        }
    }
    
    // Task 2: Callable (returns result)
    static class CalculationTask implements Callable<Integer> {
        private int number;
        
        public CalculationTask(int number) {
            this.number = number;
        }
        
        @Override
        public Integer call() throws Exception {
            System.out.println("Calculating sum of 1 to " + number);
            Thread.sleep(1000);
            int sum = 0;
            for (int i = 1; i <= number; i++) {
                sum += i;
            }
            return sum;
        }
    }
    
    public static void main(String[] args) throws Exception {
        // 1. Fixed Thread Pool
        System.out.println("=== Fixed Thread Pool ===");
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        for (int i = 1; i <= 5; i++) {
            executor.execute(new Task("Task-" + i));
        }
        
        executor.shutdown();
        executor.awaitTermination(10, TimeUnit.SECONDS);
        
        // 2. Callable with Future
        System.out.println("\\n=== Callable with Future ===");
        ExecutorService calcExecutor = Executors.newFixedThreadPool(2);
        
        List<Future<Integer>> futures = new ArrayList<>();
        for (int i = 1; i <= 3; i++) {
            Future<Integer> future = calcExecutor.submit(new CalculationTask(i * 10));
            futures.add(future);
        }
        
        for (int i = 0; i < futures.size(); i++) {
            Integer result = futures.get(i).get();  // Blocking call
            System.out.println("Result " + (i + 1) + ": " + result);
        }
        
        calcExecutor.shutdown();
        
        // 3. Scheduled Executor
        System.out.println("\\n=== Scheduled Executor ===");
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
        
        // Schedule task with delay
        scheduler.schedule(() -> {
            System.out.println("Task executed after 2 seconds");
        }, 2, TimeUnit.SECONDS);
        
        // Schedule task at fixed rate
        scheduler.scheduleAtFixedRate(() -> {
            System.out.println("Periodic task: " + new Date());
        }, 0, 1, TimeUnit.SECONDS);
        
        // Let it run for 5 seconds
        Thread.sleep(5000);
        scheduler.shutdown();
        
        System.out.println("\\nAll tasks completed!");
    }
}

/* Output:
=== Fixed Thread Pool ===
Task-1 started by pool-1-thread-1
Task-2 started by pool-1-thread-2
Task-3 started by pool-1-thread-3
Task-1 completed
Task-4 started by pool-1-thread-1
Task-2 completed
Task-5 started by pool-1-thread-2
Task-3 completed
Task-4 completed
Task-5 completed

=== Callable with Future ===
Calculating sum of 1 to 10
Calculating sum of 1 to 20
Result 1: 55
Calculating sum of 1 to 30
Result 2: 210
Result 3: 465

=== Scheduled Executor ===
Periodic task: Mon Jan 15 10:30:00 IST 2024
Periodic task: Mon Jan 15 10:30:01 IST 2024
Task executed after 2 seconds
Periodic task: Mon Jan 15 10:30:02 IST 2024
Periodic task: Mon Jan 15 10:30:03 IST 2024
Periodic task: Mon Jan 15 10:30:04 IST 2024

All tasks completed!
*/
      `,
      explanation: `
**Key Concepts:**
1. ExecutorService: Manages thread pool
2. execute(): Submits Runnable task (no return value)
3. submit(): Submits Callable task (returns Future)
4. Future.get(): Retrieves result (blocking)
5. shutdown(): Stops accepting new tasks
6. awaitTermination(): Waits for tasks to complete
7. ScheduledExecutorService: For scheduled/periodic tasks
      `
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      question: 'Create two threads that print odd and even numbers alternately from 1 to 10.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Implement a thread-safe counter using synchronization that multiple threads can increment.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Build a producer-consumer system using wait() and notify() with a bounded buffer.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      question: 'Create a thread pool using ExecutorService to download multiple files concurrently.',
      difficulty: 'Medium'
    },
    {
      id: 5,
      question: 'Design a multi-threaded web crawler that processes URLs concurrently with proper synchronization.',
      difficulty: 'Hard'
    }
  ],
  keyTakeaways: [
    'Multithreading enables concurrent execution for better CPU utilization',
    'Create threads by extending Thread class or implementing Runnable interface',
    'Thread states: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED',
    'Synchronization prevents race conditions and ensures thread safety',
    'Use synchronized keyword for methods or blocks to lock shared resources',
    'wait(), notify(), notifyAll() enable inter-thread communication',
    'Executor Framework provides high-level thread management with thread pools',
    'Callable returns result, Runnable does not',
    'Always shutdown ExecutorService to release resources'
  ]
};

export const javaTopics = [
  {
    id: 'basics',
    title: 'Java Basics',
    description: 'Master the fundamentals of Java programming',
    icon: '🧱',
    completed: 0,
    total: 10
  },
  {
    id: 'oops',
    title: 'OOPs Concepts',
    description: 'Classes, Objects, Inheritance, Polymorphism',
    icon: '🎯',
    completed: 0,
    total: 12
  },
  {
    id: 'collections',
    title: 'Collections',
    description: 'Lists, Sets, Maps and more',
    icon: '🗂️',
    completed: 0,
    total: 10
  },
  {
    id: 'java8',
    title: 'Java 8+ Features',
    description: 'Lambdas, Streams, Optional, etc.',
    icon: '🚀',
    completed: 0,
    total: 8
  },
  {
    id: 'exceptions',
    title: 'Exception Handling',
    description: 'Try-catch, custom exceptions',
    icon: '⚠️',
    completed: 0,
    total: 5
  },
  {
    id: 'multithreading',
    title: 'Multithreading',
    description: 'Threads, Executors, Concurrency',
    icon: '⚡',
    completed: 0,
    total: 8
  },
  {
    id: 'io',
    title: 'I/O Operations',
    description: 'File handling, Streams, NIO',
    icon: '📁',
    completed: 0,
    total: 6
  },
  {
    id: 'jdbc',
    title: 'JDBC & Databases',
    description: 'Database connectivity with Java',
    icon: '💾',
    completed: 0,
    total: 8
  }
];

export const questions = {
  basics: [
    {
      id: 'b1',
      title: 'Hello World',
      difficulty: 'Easy',
      description: 'Write a program to print "Hello, World!" to the console.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
      solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      testCases: [
        { input: '', output: 'Hello, World!', isPublic: true }
      ],
      hints: [
        'Use System.out.println() to print to console',
        'Don\'t forget the semicolon at the end of the statement'
      ]
    },
    {
      id: 'b2',
      title: 'Variables and Data Types',
      difficulty: 'Easy',
      description: 'Create variables of different data types and print them.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Declare variables here\n        // int, double, String, boolean\n        \n        // Print the variables\n    }\n}',
      solution: 'public class Main {\n    public static void main(String[] args) {\n        int number = 10;\n        double decimal = 5.5;\n        String text = "Java";\n        boolean isTrue = true;\n        \n        System.out.println("Integer: " + number);\n        System.out.println("Double: " + decimal);\n        System.out.println("String: " + text);\n        System.out.println("Boolean: " + isTrue);\n    }\n}',
      testCases: [
        { input: '', output: 'Integer: 10\nDouble: 5.5\nString: Java\nBoolean: true', isPublic: true }
      ],
      hints: [
        'Use int for whole numbers',
        'Use double for decimal numbers',
        'Use String for text',
        'Use boolean for true/false values'
      ]
    },
    {
      id: 'b3',
      title: 'Basic Operators',
      difficulty: 'Easy',
      description: 'Perform basic arithmetic operations (+, -, *, /, %) on two numbers.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 4;\n        \n        // Perform operations and print results\n    }\n}',
      solution: 'public class Main {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 4;\n        \n        System.out.println("Sum: " + (a + b));\n        System.out.println("Difference: " + (a - b));\n        System.out.println("Product: " + (a * b));\n        System.out.println("Quotient: " + (a / b));\n        System.out.println("Remainder: " + (a % b));\n    }\n}',
      testCases: [
        { input: '', output: 'Sum: 19\nDifference: 11\nProduct: 60\nQuotient: 3\nRemainder: 3', isPublic: true }
      ],
      hints: [
        'Use + for addition',
        'Use - for subtraction',
        'Use * for multiplication',
        'Use / for division',
        'Use % for modulo (remainder)'
      ]
    },
    {
      id: 'b4',
      title: 'If-Else Statement',
      difficulty: 'Easy',
      description: 'Check if a number is positive, negative, or zero.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int number = 10; // Test with different values\n        \n        // Your code here\n    }\n}',
      solution: 'public class Main {\n    public static void main(String[] args) {\n        int number = 10;\n        \n        if (number > 0) {\n            System.out.println("Positive number");\n        } else if (number < 0) {\n            System.out.println("Negative number");\n        } else {\n            System.out.println("Zero");\n        }\n    }\n}',
      testCases: [
        { input: '10', output: 'Positive number', isPublic: true },
        { input: '-5', output: 'Negative number', isPublic: true },
        { input: '0', output: 'Zero', isPublic: true }
      ],
      hints: [
        'Use if-else if-else structure',
        'Check if number > 0 for positive',
        'Check if number < 0 for negative',
        'Else it must be zero'
      ]
    },
    {
      id: 'b5',
      title: 'For Loop',
      difficulty: 'Easy',
      description: 'Print numbers from 1 to 10 using a for loop.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
      solution: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.print(i + " ");\n        }\n        System.out.println();\n    }\n}',
      testCases: [
        { input: '', output: '1 2 3 4 5 6 7 8 9 10 ', isPublic: true }
      ],
      hints: [
        'Use for(initialization; condition; increment)',
        'Start from 1 (i = 1)',
        'Continue while i <= 10',
        'Increment i by 1 each iteration'
      ]
    },
    {
      id: 'b6',
      title: 'While Loop',
      difficulty: 'Easy',
      description: 'Calculate the sum of numbers from 1 to 10 using a while loop.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
      solution: 'public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        int i = 1;\n        \n        while (i <= 10) {\n            sum += i;\n            i++;\n        }\n        \n        System.out.println("Sum: " + sum);\n    }\n}',
      testCases: [
        { input: '', output: 'Sum: 55', isPublic: true }
      ],
      hints: [
        'Initialize sum to 0',
        'Use a while loop with condition i <= 10',
        'Add i to sum in each iteration',
        'Increment i by 1 each time'
      ]
    },
    {
      id: 'b7',
      title: 'Array Operations',
      difficulty: 'Medium',
      description: 'Find the maximum and minimum values in an array.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int[] numbers = {5, 2, 9, 1, 7, 3};\n        // Your code here\n    }\n}',
      solution: 'public class Main {\n    public static void main(String[] args) {\n        int[] numbers = {5, 2, 9, 1, 7, 3};\n        int max = numbers[0];\n        int min = numbers[0];\n        \n        for (int i = 1; i < numbers.length; i++) {\n            if (numbers[i] > max) {\n                max = numbers[i];\n            }\n            if (numbers[i] < min) {\n                min = numbers[i];\n            }\n        }\n        \n        System.out.println("Maximum: " + max);\n        System.out.println("Minimum: " + min);\n    }\n}',
      testCases: [
        { input: '', output: 'Maximum: 9\nMinimum: 1', isPublic: true },
        { input: '10,20,30,40,50', output: 'Maximum: 50\nMinimum: 10', isPublic: false }
      ],
      hints: [
        'Initialize max and min with first element',
        'Loop through the array',
        'Update max if current element is greater',
        'Update min if current element is smaller'
      ]
    },
    {
      id: 'b8',
      title: 'Methods',
      difficulty: 'Medium',
      description: 'Create a method to check if a number is prime and use it to print prime numbers between 1 and 50.',
      starterCode: 'public class Main {\n    // Your method here\n    \n    public static void main(String[] args) {\n        // Call your method and print primes between 1-50\n    }\n}',
      solution: 'public class Main {\n    // Method to check if a number is prime\n    public static boolean isPrime(int num) {\n        if (num <= 1) {\n            return false;\n        }\n        for (int i = 2; i <= Math.sqrt(num); i++) {\n            if (num % i == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println("Prime numbers between 1 and 50:");\n        for (int i = 1; i <= 50; i++) {\n            if (isPrime(i)) {\n                System.out.print(i + " ");\n            }\n        }\n        System.out.println();\n    }\n}',
      testCases: [
        { input: '', output: 'Prime numbers between 1 and 50:\n2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 ', isPublic: true }
      ],
      hints: [
        'Create a method with return type boolean',
        'Check divisibility up to square root of the number',
        'In main, loop through 1-50 and call the method',
        'Print numbers that return true'
      ]
    },
    {
      id: 'b9',
      title: 'String Operations',
      difficulty: 'Medium',
      description: 'Write a program to reverse a string and check if it\'s a palindrome.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String input = "madam";\n        // Your code here\n    }\n    \n    // Add your methods here if needed\n}',
      solution: 'public class Main {\n    // Method to reverse a string\n    public static String reverseString(String str) {\n        StringBuilder reversed = new StringBuilder();\n        for (int i = str.length() - 1; i >= 0; i--) {\n            reversed.append(str.charAt(i));\n        }\n        return reversed.toString();\n    }\n    \n    // Method to check if string is palindrome\n    public static boolean isPalindrome(String str) {\n        String reversed = reverseString(str);\n        return str.equals(reversed);\n    }\n    \n    public static void main(String[] args) {\n        String input = "madam";\n        String reversed = reverseString(input);\n        \n        System.out.println("Original: " + input);\n        System.out.println("Reversed: " + reversed);\n        \n        if (isPalindrome(input)) {\n            System.out.println("The string is a palindrome.");\n        } else {\n            System.out.println("The string is not a palindrome.");\n        }\n    }\n}',
      testCases: [
        { input: 'madam', output: 'Original: madam\nReversed: madam\nThe string is a palindrome.', isPublic: true },
        { input: 'hello', output: 'Original: hello\nReversed: olleh\nThe string is not a palindrome.', isPublic: true }
      ],
      hints: [
        'Create a method to reverse the string',
        'Compare original and reversed strings for palindrome check',
        'Use StringBuilder for efficient string manipulation',
        'Handle case sensitivity if needed (convert to lowercase)'
      ]
    },
    {
      id: 'b10',
      title: '2D Arrays',
      difficulty: 'Medium',
      description: 'Find the sum of all elements in a 2D array.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int[][] matrix = {\n            {1, 2, 3},\n            {4, 5, 6},\n            {7, 8, 9}\n        };\n        // Your code here\n    }\n}',
      solution: 'public class Main {\n    public static void main(String[] args) {\n        int[][] matrix = {\n            {1, 2, 3},\n            {4, 5, 6},\n            {7, 8, 9}\n        };\n        \n        int sum = 0;\n        \n        // Nested loops to traverse 2D array\n        for (int i = 0; i < matrix.length; i++) {\n            for (int j = 0; j < matrix[i].length; j++) {\n                sum += matrix[i][j];\n            }\n        }\n        \n        System.out.println("Sum of all elements: " + sum);\n    }\n}',
      testCases: [
        { input: '', output: 'Sum of all elements: 45', isPublic: true },
        { input: '{{1,1,1},{1,1,1},{1,1,1}}', output: 'Sum of all elements: 9', isPublic: false }
      ],
      hints: [
        'Use nested for loops to traverse rows and columns',
        'Initialize sum to 0 before the loops',
        'Add each element to sum',
        'Print the final sum after the loops'
      ]
    },
    {
      id: 'b2',
      title: 'Sum of Two Numbers',
      difficulty: 'Easy',
      description: 'Write a program that takes two numbers as input and prints their sum.',
      starterCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        \n        // Your code here\n    }\n}',
      solution: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        \n        System.out.println("Sum: " + (num1 + num2));\n    }\n}',
      starterCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Your code here\n    }\n}',
      solution: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        System.out.println(num1 + num2);\n    }\n}',
      testCases: [
        { 
          input: '5\\n3', 
          output: '8',
          isPublic: true
        },
        { 
          input: '0\\n0', 
          output: '0',
          isPublic: false
        }
      ],
      hints: [
        'Use Scanner class to read input',
        'Use nextInt() to read integers',
        'Add the two numbers and print the result'
      ]
    }
  ],
  oops: [
    {
      id: 'o1',
      title: 'Create a Class',
      difficulty: 'Easy',
      description: 'Create a class named "Person" with properties name (String) and age (int). Add a method displayInfo() that prints the person\'s details.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Create a Person object and call displayInfo()\n    }\n}\n\n// Your Person class here',
      solution: 'class Person {\n    String name;\n    int age;\n    \n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public void displayInfo() {\n        System.out.println(\"Name: \" + name + \", Age: \" + age);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person person = new Person(\"Alice\", 25);\n        person.displayInfo();\n    }\n}',
      testCases: [
        { 
          input: '', 
          output: 'Name: Alice, Age: 25',
          isPublic: true
        }
      ],
      hints: [
        'Create a class with instance variables',
        'Add a constructor to initialize the variables',
        'Implement the displayInfo() method'
      ]
    },
    {
      id: 'o2',
      title: 'Inheritance',
      difficulty: 'Medium',
      description: 'Create a base class "Vehicle" and a derived class "Car". The Car class should inherit from Vehicle and add a new method honk().',
      starterCode: '// Your code here',
      solution: 'class Vehicle {\n    protected String brand;\n    \n    public Vehicle(String brand) {\n        this.brand = brand;\n    }\n    \n    public void displayBrand() {\n        System.out.println(\"Brand: \" + brand);\n    }\n}\n\nclass Car extends Vehicle {\n    public Car(String brand) {\n        super(brand);\n    }\n    \n    public void honk() {\n        System.out.println(\"Honk! Honk!\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\");\n        myCar.displayBrand();\n        myCar.honk();\n    }\n}',
      testCases: [
        { 
          input: '', 
          output: 'Brand: Toyota\nHonk! Honk!',
          isPublic: true
        }
      ],
      hints: [
        'Use the "extends" keyword for inheritance',
        'Call the parent class constructor using super()',
        'Add the honk() method to the Car class'
      ]
    }
  ],
  collections: [
    {
      id: 'c1',
      title: 'ArrayList Operations',
      difficulty: 'Easy',
      description: 'Create an ArrayList of Strings, add some elements, and print them.',
      starterCode: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
      solution: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> fruits = new ArrayList<>();\n        fruits.add("Apple");\n        fruits.add("Banana");\n        fruits.add("Orange");\n        \n        for (String fruit : fruits) {\n            System.out.println(fruit);\n        }\n    }\n}',
      testCases: [
        { 
          input: '', 
          output: 'Apple\nBanana\nOrange',
          isPublic: true
        }
      ],
      hints: [
        'Use ArrayList<String> to create a list of strings',
        'Use add() method to add elements',
        'Use an enhanced for-loop to print elements'
      ]
    },
    {
      id: 'c2',
      title: 'HashMap Usage',
      difficulty: 'Medium',
      description: 'Create a HashMap to store student names and their corresponding grades.',
      starterCode: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
      solution: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Character> grades = new HashMap<>();\n        grades.put("Alice", \'A\');\n        grades.put("Bob", \'B\');\n        grades.put("Charlie", \'C\');\n        \n        for (Map.Entry<String, Character> entry : grades.entrySet()) {\n            System.out.println(entry.getKey() + " : " + entry.getValue());\n        }\n    }\n}',
      testCases: [
        { 
          input: '', 
          output: 'Alice : A\nBob : B\nCharlie : C',
          isPublic: true
        }
      ],
      hints: [
        'Use HashMap<String, Character>',
        'Use put() to add key-value pairs',
        'Use entrySet() to iterate through the map'
      ]
    }
  ],
  java8: [
    {
      id: 'j1',
      title: 'Lambda Expressions',
      difficulty: 'Medium',
      description: 'Use a lambda expression to sort a list of strings by their length.',
      starterCode: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList("apple", "banana", "cherry", "date");\n        // Your code here\n    }\n}',
      solution: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList("apple", "banana", "cherry", "date");\n        \n        // Sort by length using lambda\n        Collections.sort(words, (s1, s2) -> s1.length() - s2.length());\n        \n        // Print sorted list\n        words.forEach(System.out::println);\n    }\n}',
      testCases: [
        { 
          input: '', 
          output: 'date\napple\nbanana\ncherry',
          isPublic: true
        }
      ],
      hints: [
        'Use Collections.sort() with a lambda expression',
        'The lambda should compare string lengths',
        'Use forEach() to print the sorted list'
      ]
    },
    {
      id: 'j2',
      title: 'Stream API',
      difficulty: 'Medium',
      description: 'Use Java 8 Streams to filter even numbers and calculate their sum.',
      starterCode: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        // Your code here\n    }\n}',
      solution: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        \n        int sum = numbers.stream()\n                        .filter(n -> n % 2 == 0)\n                        .mapToInt(Integer::intValue)\n                        .sum();\n                        \n        System.out.println("Sum of even numbers: " + sum);\n    }\n}',
      testCases: [
        { 
          input: '', 
          output: 'Sum of even numbers: 30',
          isPublic: true
        }
      ],
      hints: [
        'Use stream() to create a stream',
        'Use filter() to keep only even numbers',
        'Use mapToInt() and sum() to calculate the total'
      ]
    }
  ],
  exceptions: [
    {
      id: 'e1',
      title: 'Basic Exception Handling',
      difficulty: 'Easy',
      description: 'Write a program that divides two numbers and handles division by zero exception.',
      starterCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        \n        // Your code here\n    }\n}',
      solution: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        \n        try {\n            int result = num1 / num2;\n            System.out.println("Result: " + result);\n        } catch (ArithmeticException e) {\n            System.out.println("Error: Division by zero is not allowed");\n        }\n    }\n}',
      testCases: [
        { 
          input: '10\n2', 
          output: 'Result: 5',
          isPublic: true
        },
        { 
          input: '10\n0', 
          output: 'Error: Division by zero is not allowed',
          isPublic: false
        }
      ],
      hints: [
        'Use try-catch block',
        'Catch ArithmeticException',
        'Print appropriate error message'
      ]
    }
  ],
  multithreading: [
    {
      id: 'm1',
      title: 'Basic Thread Creation',
      difficulty: 'Medium',
      description: 'Create two threads where one prints even numbers and another prints odd numbers from 1 to 10.',
      starterCode: '// Your code here',
      solution: 'class EvenThread extends Thread {\n    public void run() {\n        for (int i = 2; i <= 10; i += 2) {\n            System.out.println("Even: " + i);\n            try {\n                Thread.sleep(100);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n\nclass OddThread extends Thread {\n    public void run() {\n        for (int i = 1; i <= 10; i += 2) {\n            System.out.println("Odd: " + i);\n            try {\n                Thread.sleep(100);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        EvenThread evenThread = new EvenThread();\n        OddThread oddThread = new OddThread();\n        \n        evenThread.start();\n        oddThread.start();\n    }\n}',
      testCases: [
        { 
          input: '', 
          output: 'Even: 2\nOdd: 1\nEven: 4\nOdd: 3\nEven: 6\nOdd: 5\nEven: 8\nOdd: 7\nEven: 10\nOdd: 9',
          isPublic: true
        }
      ],
      hints: [
        'Create two classes that extend Thread',
        'Override the run() method in each',
        'Use start() to begin thread execution'
      ]
    }
  ]
};

export const getQuestionById = (topicId, questionId) => {
  return questions[topicId]?.find(q => q.id === questionId) || null;
};

export const getQuestionsByTopic = (topicId) => {
  return questions[topicId] || [];
};

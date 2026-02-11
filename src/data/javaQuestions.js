export const javaTopics = [
  // BEGINNER LEVEL
  {
    id: 'java-fundamentals',
    title: 'Java Fundamentals',
    description: 'Variables, Data Types, Operators, Input/Output',
    icon: '📚',
    level: 'Beginner',
    completed: 0,
    total: 30
  },
  {
    id: 'control-flow',
    title: 'Control Flow & Loops',
    description: 'If-else, Switch, For, While, Do-While',
    icon: '🔄',
    level: 'Beginner',
    completed: 0,
    total: 25
  },
  {
    id: 'arrays',
    title: 'Arrays',
    description: '1D Arrays, 2D Arrays, Array Manipulation',
    icon: '📊',
    level: 'Beginner',
    completed: 0,
    total: 40
  },
  {
    id: 'strings',
    title: 'Strings',
    description: 'String Operations, StringBuilder, Pattern Matching',
    icon: '📝',
    level: 'Beginner',
    completed: 0,
    total: 35
  },
  {
    id: 'functions',
    title: 'Functions & Recursion',
    description: 'Methods, Recursion, Backtracking Basics',
    icon: '🔧',
    level: 'Beginner',
    completed: 0,
    total: 30
  },
  
  // INTERMEDIATE LEVEL
  {
    id: 'oops',
    title: 'Object-Oriented Programming',
    description: 'Classes, Objects, Inheritance, Polymorphism, Encapsulation',
    icon: '🎯',
    level: 'Intermediate',
    completed: 0,
    total: 0
  },
  {
    id: 'searching',
    title: 'Searching Algorithms',
    description: 'Linear Search, Binary Search, Ternary Search',
    icon: '🔍',
    level: 'Intermediate',
    completed: 0,
    total: 0
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    description: 'Bubble, Selection, Insertion, Merge, Quick Sort',
    icon: '🔢',
    level: 'Intermediate',
    completed: 0,
    total: 0
  },
  {
    id: 'linked-list',
    title: 'Linked Lists',
    description: 'Singly, Doubly, Circular Linked Lists',
    icon: '🔗',
    level: 'Intermediate',
    completed: 0,
    total: 0
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'Stack Operations, Applications, Problems',
    icon: '📚',
    level: 'Intermediate',
    completed: 0,
    total: 0
  },
  {
    id: 'queues',
    title: 'Queues',
    description: 'Queue, Deque, Priority Queue, Circular Queue',
    icon: '🎫',
    level: 'Intermediate',
    completed: 0,
    total: 0
  },
  {
    id: 'hashing',
    title: 'Hashing',
    description: 'HashMap, HashSet, Hash Functions, Collision Handling',
    icon: '#️⃣',
    level: 'Intermediate',
    completed: 0,
    total: 0
  },
  
  // ADVANCED LEVEL
  {
    id: 'trees',
    title: 'Trees',
    description: 'Binary Trees, BST, AVL, Tree Traversals',
    icon: '🌳',
    level: 'Advanced',
    completed: 0,
    total: 0
  },
  {
    id: 'heaps',
    title: 'Heaps',
    description: 'Min Heap, Max Heap, Heap Sort, Priority Queue',
    icon: '⛰️',
    level: 'Advanced',
    completed: 0,
    total: 0
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'BFS, DFS, Shortest Path, MST, Topological Sort',
    icon: '🕸️',
    level: 'Advanced',
    completed: 0,
    total: 0
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    description: 'Memoization, Tabulation, DP Patterns',
    icon: '💎',
    level: 'Advanced',
    completed: 0,
    total: 0
  },
  {
    id: 'greedy',
    title: 'Greedy Algorithms',
    description: 'Activity Selection, Huffman Coding, Job Scheduling',
    icon: '🎯',
    level: 'Advanced',
    completed: 0,
    total: 0
  },
  {
    id: 'backtracking',
    title: 'Backtracking',
    description: 'N-Queens, Sudoku, Permutations, Combinations',
    icon: '↩️',
    level: 'Advanced',
    completed: 0,
    total: 0
  },
  {
    id: 'tries',
    title: 'Tries',
    description: 'Trie Implementation, Autocomplete, Word Search',
    icon: '🔤',
    level: 'Advanced',
    completed: 0,
    total: 0
  },
  {
    id: 'segment-trees',
    title: 'Segment Trees',
    description: 'Range Queries, Lazy Propagation',
    icon: '🌲',
    level: 'Advanced',
    completed: 0,
    total: 0
  },
  
  // EXPERT LEVEL
  {
    id: 'advanced-graphs',
    title: 'Advanced Graph Algorithms',
    description: 'Network Flow, Strongly Connected Components, Bridges',
    icon: '🌐',
    level: 'Expert',
    completed: 0,
    total: 0
  },
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation',
    description: 'Bitwise Operators, Bit Tricks, XOR Problems',
    icon: '🔢',
    level: 'Expert',
    completed: 0,
    total: 0
  },
  {
    id: 'math-algorithms',
    title: 'Mathematical Algorithms',
    description: 'Number Theory, Prime Numbers, GCD, LCM, Modular Arithmetic',
    icon: '🧮',
    level: 'Expert',
    completed: 0,
    total: 0
  },
  {
    id: 'string-algorithms',
    title: 'Advanced String Algorithms',
    description: 'KMP, Rabin-Karp, Z-Algorithm, Suffix Arrays',
    icon: '📜',
    level: 'Expert',
    completed: 0,
    total: 0
  }
];

export const topicTheory = {
  'java-fundamentals': {
    theory: `
# Java Fundamentals

## Variables & Data Types

### Primitive Data Types:
- **byte**: 8-bit integer (-128 to 127)
- **short**: 16-bit integer (-32,768 to 32,767)
- **int**: 32-bit integer (-2^31 to 2^31-1)
- **long**: 64-bit integer (-2^63 to 2^63-1)
- **float**: 32-bit floating point
- **double**: 64-bit floating point
- **char**: 16-bit Unicode character
- **boolean**: true or false

### Syntax:
\`\`\`java
int age = 25;
double price = 99.99;
char grade = 'A';
boolean isActive = true;
String name = "John"; // Reference type
\`\`\`

## Operators

### Arithmetic: +, -, *, /, %
### Relational: ==, !=, >, <, >=, <=
### Logical: &&, ||, !
### Assignment: =, +=, -=, *=, /=
### Increment/Decrement: ++, --

## Input/Output

\`\`\`java
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int num = sc.nextInt();
String str = sc.nextLine();

System.out.println("Output: " + num);
\`\`\`
    `,
    resources: [
      { title: 'Java Documentation', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html' },
      { title: 'W3Schools Java', url: 'https://www.w3schools.com/java/' }
    ]
  },
  'control-flow': {
    theory: `
# Control Flow & Loops

## If-Else Statement

\`\`\`java
if (condition) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}
\`\`\`

## Switch Statement

\`\`\`java
switch (variable) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
\`\`\`

## Loops

### For Loop
\`\`\`java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
\`\`\`

### While Loop
\`\`\`java
while (condition) {
    // code
}
\`\`\`

### Do-While Loop
\`\`\`java
do {
    // code
} while (condition);
\`\`\`

### Enhanced For Loop
\`\`\`java
for (int num : array) {
    System.out.println(num);
}
\`\`\`
    `,
    resources: [
      { title: 'Control Flow Tutorial', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html' }
    ]
  },
  'arrays': {
    theory: `
# Arrays in Java

## 1D Array

### Declaration & Initialization
\`\`\`java
int[] arr = new int[5];
int[] arr2 = {1, 2, 3, 4, 5};
\`\`\`

### Accessing Elements
\`\`\`java
arr[0] = 10;
int value = arr[0];
int length = arr.length;
\`\`\`

### Traversing Array
\`\`\`java
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Enhanced for loop
for (int num : arr) {
    System.out.println(num);
}
\`\`\`

## 2D Array

\`\`\`java
int[][] matrix = new int[3][3];
int[][] matrix2 = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing
matrix[0][0] = 1;

// Traversing
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
\`\`\`

## Common Operations
- Finding min/max
- Reversing array
- Sorting
- Searching
- Rotating array
    `,
    resources: [
      { title: 'Arrays Tutorial', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html' }
    ]
  },
  'strings': {
    theory: `
# Strings in Java

## String Basics

\`\`\`java
String str = "Hello";
String str2 = new String("World");
\`\`\`

## Common Methods

\`\`\`java
int len = str.length();
char ch = str.charAt(0);
String sub = str.substring(0, 3);
boolean equals = str.equals("Hello");
boolean contains = str.contains("ell");
String upper = str.toUpperCase();
String lower = str.toLowerCase();
String trimmed = str.trim();
String[] parts = str.split(",");
String replaced = str.replace('l', 'L');
int index = str.indexOf('e');
\`\`\`

## String Concatenation

\`\`\`java
String result = str + " " + str2;
String result2 = str.concat(str2);
\`\`\`

## StringBuilder (Mutable)

\`\`\`java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
sb.insert(5, ",");
sb.delete(5, 6);
sb.reverse();
String result = sb.toString();
\`\`\`

## Character Operations

\`\`\`java
boolean isDigit = Character.isDigit('5');
boolean isLetter = Character.isLetter('A');
boolean isUpperCase = Character.isUpperCase('A');
char lower = Character.toLowerCase('A');
\`\`\`
    `,
    resources: [
      { title: 'String API', url: 'https://docs.oracle.com/javase/8/docs/api/java/lang/String.html' }
    ]
  },
  'functions': {
    theory: `
# Functions & Recursion

## Method Syntax

\`\`\`java
returnType methodName(parameters) {
    // code
    return value;
}
\`\`\`

## Examples

\`\`\`java
// No return, no parameters
void greet() {
    System.out.println("Hello");
}

// With return and parameters
int add(int a, int b) {
    return a + b;
}

// Calling methods
greet();
int sum = add(5, 3);
\`\`\`

## Recursion

A function calling itself.

### Base Case: Stopping condition
### Recursive Case: Function calls itself

\`\`\`java
// Factorial
int factorial(int n) {
    if (n == 0 || n == 1) return 1; // Base case
    return n * factorial(n - 1);     // Recursive case
}

// Fibonacci
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Sum of digits
int sumDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}
\`\`\`

## Method Overloading

\`\`\`java
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}
\`\`\`
    `,
    resources: [
      { title: 'Methods Tutorial', url: 'https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html' }
    ]
  }
};

export const questions = {
  'java-fundamentals': [
    { id: 1, title: 'Add Two Numbers', difficulty: 'Easy', description: 'Take two numbers as input and print their sum', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-stdin-and-stdout-1/problem' },
    { id: 2, title: 'Simple Interest', difficulty: 'Easy', description: 'Calculate simple interest given principal, rate and time', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-stdin-stdout/problem' },
    { id: 3, title: 'Area of Circle', difficulty: 'Easy', description: 'Calculate area of circle given radius', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-datatypes/problem' },
    { id: 4, title: 'Swap Two Numbers', difficulty: 'Easy', description: 'Swap two numbers without using third variable', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/swap-two-numbers3844/1' },
    { id: 5, title: 'Check Even or Odd', difficulty: 'Easy', description: 'Check if a number is even or odd', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-if-else/problem' },
    { id: 6, title: 'Find Remainder', difficulty: 'Easy', description: 'Find remainder when dividing two numbers', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-int-to-string/problem' },
    { id: 7, title: 'Convert Celsius to Fahrenheit', difficulty: 'Easy', description: 'Convert temperature from Celsius to Fahrenheit', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-datatypes/problem' },
    { id: 8, title: 'Calculate Power', difficulty: 'Easy', description: 'Calculate x raised to power y', platform: 'LeetCode', link: 'https://leetcode.com/problems/powx-n/' },
    { id: 9, title: 'Find ASCII Value', difficulty: 'Easy', description: 'Find ASCII value of a character', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-strings-introduction/problem' },
    { id: 10, title: 'Check Positive Negative', difficulty: 'Easy', description: 'Check if number is positive, negative or zero', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-if-else/problem' },
    { id: 11, title: 'Find Largest of Three', difficulty: 'Easy', description: 'Find largest among three numbers', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-if-else/problem' },
    { id: 12, title: 'Calculate Average', difficulty: 'Easy', description: 'Calculate average of three numbers', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-stdin-stdout/problem' },
    { id: 13, title: 'Check Leap Year', difficulty: 'Easy', description: 'Check if a year is leap year', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-date-and-time/problem' },
    { id: 14, title: 'Find Quotient and Remainder', difficulty: 'Easy', description: 'Find quotient and remainder of division', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-stdin-stdout/problem' },
    { id: 15, title: 'Calculate Compound Interest', difficulty: 'Easy', description: 'Calculate compound interest', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-currency-formatter/problem' },
    { id: 16, title: 'Convert Days to Years', difficulty: 'Easy', description: 'Convert number of days to years, weeks and days', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-date-and-time/problem' },
    { id: 17, title: 'Calculate Distance', difficulty: 'Easy', description: 'Calculate distance between two points', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-1d-array/problem' },
    { id: 18, title: 'Check Vowel or Consonant', difficulty: 'Easy', description: 'Check if character is vowel or consonant', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-strings-introduction/problem' },
    { id: 19, title: 'Find Absolute Value', difficulty: 'Easy', description: 'Find absolute value of a number', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-datatypes/problem' },
    { id: 20, title: 'Calculate Percentage', difficulty: 'Easy', description: 'Calculate percentage of marks', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-output-formatting/problem' },
    { id: 21, title: 'Convert Minutes to Hours', difficulty: 'Easy', description: 'Convert minutes to hours and minutes', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-date-and-time/problem' },
    { id: 22, title: 'Check Alphabet', difficulty: 'Easy', description: 'Check if character is an alphabet', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-strings-introduction/problem' },
    { id: 23, title: 'Find Square Root', difficulty: 'Easy', description: 'Find square root of a number', platform: 'LeetCode', link: 'https://leetcode.com/problems/sqrtx/' },
    { id: 24, title: 'Check Divisibility', difficulty: 'Easy', description: 'Check if number is divisible by another', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops-i/problem' },
    { id: 25, title: 'Calculate BMI', difficulty: 'Easy', description: 'Calculate Body Mass Index', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-stdin-stdout/problem' },
    { id: 26, title: 'Find Sum of Digits', difficulty: 'Easy', description: 'Find sum of digits of a number', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/sum-of-digits1742/1' },
    { id: 27, title: 'Reverse a Number', difficulty: 'Easy', description: 'Reverse the digits of a number', platform: 'LeetCode', link: 'https://leetcode.com/problems/reverse-integer/' },
    { id: 28, title: 'Check Palindrome Number', difficulty: 'Easy', description: 'Check if number is palindrome', platform: 'LeetCode', link: 'https://leetcode.com/problems/palindrome-number/' },
    { id: 29, title: 'Find GCD', difficulty: 'Easy', description: 'Find GCD of two numbers', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1' },
    { id: 30, title: 'Find LCM', difficulty: 'Easy', description: 'Find LCM of two numbers', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1' }
  ],
  'control-flow': [
    { id: 1, title: 'Print 1 to N', difficulty: 'Easy', description: 'Print numbers from 1 to N', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops-i/problem' },
    { id: 2, title: 'Print N to 1', difficulty: 'Easy', description: 'Print numbers from N to 1', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops-i/problem' },
    { id: 3, title: 'Sum of N Numbers', difficulty: 'Easy', description: 'Find sum of first N natural numbers', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops-ii/problem' },
    { id: 4, title: 'Factorial of Number', difficulty: 'Easy', description: 'Find factorial of a number', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/factorial5739/1' },
    { id: 5, title: 'Fibonacci Series', difficulty: 'Easy', description: 'Print Fibonacci series up to N terms', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/print-first-n-fibonacci-numbers1002/1' },
    { id: 6, title: 'Check Prime Number', difficulty: 'Easy', description: 'Check if a number is prime', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/prime-number2314/1' },
    { id: 7, title: 'Print Prime Numbers', difficulty: 'Easy', description: 'Print all prime numbers up to N', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/sieve-of-eratosthenes5242/1' },
    { id: 8, title: 'Multiplication Table', difficulty: 'Easy', description: 'Print multiplication table of N', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops-ii/problem' },
    { id: 9, title: 'Count Digits', difficulty: 'Easy', description: 'Count number of digits in a number', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/count-digits5716/1' },
    { id: 10, title: 'Armstrong Number', difficulty: 'Easy', description: 'Check if number is Armstrong number', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1' },
    { id: 11, title: 'Perfect Number', difficulty: 'Easy', description: 'Check if number is perfect number', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/perfect-numbers3207/1' },
    { id: 12, title: 'Strong Number', difficulty: 'Easy', description: 'Check if number is strong number', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops/problem' },
    { id: 13, title: 'Print Pattern', difficulty: 'Easy', description: 'Print star pattern', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-output-formatting/problem' },
    { id: 14, title: 'Sum of Even Numbers', difficulty: 'Easy', description: 'Find sum of even numbers up to N', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops-i/problem' },
    { id: 15, title: 'Sum of Odd Numbers', difficulty: 'Easy', description: 'Find sum of odd numbers up to N', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops-i/problem' },
    { id: 16, title: 'Power of Number', difficulty: 'Easy', description: 'Calculate power using loops', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1' },
    { id: 17, title: 'Find HCF', difficulty: 'Easy', description: 'Find HCF using Euclidean algorithm', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1' },
    { id: 18, title: 'Binary to Decimal', difficulty: 'Easy', description: 'Convert binary to decimal', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/binary-to-decimal-1587115620/1' },
    { id: 19, title: 'Decimal to Binary', difficulty: 'Easy', description: 'Convert decimal to binary', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/decimal-to-binary-1587115620/1' },
    { id: 20, title: 'Sum of Series', difficulty: 'Easy', description: 'Find sum of series 1+2+3+...+N', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-loops-ii/problem' },
    { id: 21, title: 'Automorphic Number', difficulty: 'Easy', description: 'Check if number is automorphic', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/automorphic-number/1' },
    { id: 22, title: 'Palindrome Number', difficulty: 'Easy', description: 'Check if number is palindrome', platform: 'LeetCode', link: 'https://leetcode.com/problems/palindrome-number/' },
    { id: 23, title: 'Reverse Number', difficulty: 'Easy', description: 'Reverse digits of a number', platform: 'LeetCode', link: 'https://leetcode.com/problems/reverse-integer/' },
    { id: 24, title: 'FizzBuzz', difficulty: 'Easy', description: 'Print FizzBuzz sequence', platform: 'LeetCode', link: 'https://leetcode.com/problems/fizz-buzz/' },
    { id: 25, title: 'Print Diamond Pattern', difficulty: 'Medium', description: 'Print diamond star pattern', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/java-output-formatting/problem' }
  ],
  'arrays': [
    { id: 1, title: 'Find Largest Element', difficulty: 'Easy', description: 'Find largest element in array', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0' },
    { id: 2, title: 'Find Smallest Element', difficulty: 'Easy', description: 'Find smallest element in array', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/mini-max-sum/problem' },
    { id: 3, title: 'Reverse an Array', difficulty: 'Easy', description: 'Reverse the given array', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/reverse-an-array/0' },
    { id: 4, title: 'Sum of Array', difficulty: 'Easy', description: 'Find sum of all elements', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/simple-array-sum/problem' },
    { id: 5, title: 'Search Element', difficulty: 'Easy', description: 'Search for an element in array', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1' },
    { id: 6, title: 'Two Sum', difficulty: 'Easy', description: 'Find two numbers that add up to target', platform: 'LeetCode', link: 'https://leetcode.com/problems/two-sum/' },
    { id: 7, title: 'Remove Duplicates', difficulty: 'Easy', description: 'Remove duplicates from sorted array', platform: 'LeetCode', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
    { id: 8, title: 'Rotate Array', difficulty: 'Medium', description: 'Rotate array by K positions', platform: 'LeetCode', link: 'https://leetcode.com/problems/rotate-array/' },
    { id: 9, title: 'Contains Duplicate', difficulty: 'Easy', description: 'Check if array contains duplicates', platform: 'LeetCode', link: 'https://leetcode.com/problems/contains-duplicate/' },
    { id: 10, title: 'Missing Number', difficulty: 'Easy', description: 'Find missing number in array', platform: 'LeetCode', link: 'https://leetcode.com/problems/missing-number/' },
    { id: 11, title: 'Move Zeroes', difficulty: 'Easy', description: 'Move all zeros to end', platform: 'LeetCode', link: 'https://leetcode.com/problems/move-zeroes/' },
    { id: 12, title: 'Best Time to Buy Stock', difficulty: 'Easy', description: 'Find maximum profit', platform: 'LeetCode', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
    { id: 13, title: 'Maximum Subarray', difficulty: 'Medium', description: 'Find maximum sum subarray', platform: 'LeetCode', link: 'https://leetcode.com/problems/maximum-subarray/' },
    { id: 14, title: 'Product Except Self', difficulty: 'Medium', description: 'Product of array except self', platform: 'LeetCode', link: 'https://leetcode.com/problems/product-of-array-except-self/' },
    { id: 15, title: 'Merge Sorted Arrays', difficulty: 'Easy', description: 'Merge two sorted arrays', platform: 'LeetCode', link: 'https://leetcode.com/problems/merge-sorted-array/' },
    { id: 16, title: 'Intersection of Arrays', difficulty: 'Easy', description: 'Find intersection of two arrays', platform: 'LeetCode', link: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/' },
    { id: 17, title: 'Plus One', difficulty: 'Easy', description: 'Add one to array representing number', platform: 'LeetCode', link: 'https://leetcode.com/problems/plus-one/' },
    { id: 18, title: 'Find Peak Element', difficulty: 'Medium', description: 'Find peak element in array', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-peak-element/' },
    { id: 19, title: 'Sort Colors', difficulty: 'Medium', description: 'Sort array with 0s, 1s, 2s', platform: 'LeetCode', link: 'https://leetcode.com/problems/sort-colors/' },
    { id: 20, title: 'Majority Element', difficulty: 'Easy', description: 'Find majority element', platform: 'LeetCode', link: 'https://leetcode.com/problems/majority-element/' },
    { id: 21, title: 'Single Number', difficulty: 'Easy', description: 'Find number appearing once', platform: 'LeetCode', link: 'https://leetcode.com/problems/single-number/' },
    { id: 22, title: 'Find Duplicates', difficulty: 'Medium', description: 'Find all duplicates in array', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-all-duplicates-in-an-array/' },
    { id: 23, title: 'Container With Most Water', difficulty: 'Medium', description: 'Find container with most water', platform: 'LeetCode', link: 'https://leetcode.com/problems/container-with-most-water/' },
    { id: 24, title: '3Sum', difficulty: 'Medium', description: 'Find three numbers that sum to zero', platform: 'LeetCode', link: 'https://leetcode.com/problems/3sum/' },
    { id: 25, title: 'Spiral Matrix', difficulty: 'Medium', description: 'Return spiral order of matrix', platform: 'LeetCode', link: 'https://leetcode.com/problems/spiral-matrix/' },
    { id: 26, title: 'Set Matrix Zeroes', difficulty: 'Medium', description: 'Set row and column to zero', platform: 'LeetCode', link: 'https://leetcode.com/problems/set-matrix-zeroes/' },
    { id: 27, title: 'Rotate Image', difficulty: 'Medium', description: 'Rotate matrix by 90 degrees', platform: 'LeetCode', link: 'https://leetcode.com/problems/rotate-image/' },
    { id: 28, title: 'Search in 2D Matrix', difficulty: 'Medium', description: 'Search element in 2D matrix', platform: 'LeetCode', link: 'https://leetcode.com/problems/search-a-2d-matrix/' },
    { id: 29, title: 'Kth Largest Element', difficulty: 'Medium', description: 'Find kth largest element', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
    { id: 30, title: 'Subarray Sum Equals K', difficulty: 'Medium', description: 'Count subarrays with sum K', platform: 'LeetCode', link: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
    { id: 31, title: 'Next Permutation', difficulty: 'Medium', description: 'Find next permutation', platform: 'LeetCode', link: 'https://leetcode.com/problems/next-permutation/' },
    { id: 32, title: 'Longest Consecutive Sequence', difficulty: 'Medium', description: 'Find longest consecutive sequence', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-consecutive-sequence/' },
    { id: 33, title: 'Merge Intervals', difficulty: 'Medium', description: 'Merge overlapping intervals', platform: 'LeetCode', link: 'https://leetcode.com/problems/merge-intervals/' },
    { id: 34, title: 'Insert Interval', difficulty: 'Medium', description: 'Insert interval and merge', platform: 'LeetCode', link: 'https://leetcode.com/problems/insert-interval/' },
    { id: 35, title: 'Jump Game', difficulty: 'Medium', description: 'Check if can reach last index', platform: 'LeetCode', link: 'https://leetcode.com/problems/jump-game/' },
    { id: 36, title: 'Trapping Rain Water', difficulty: 'Hard', description: 'Calculate trapped rainwater', platform: 'LeetCode', link: 'https://leetcode.com/problems/trapping-rain-water/' },
    { id: 37, title: 'First Missing Positive', difficulty: 'Hard', description: 'Find first missing positive', platform: 'LeetCode', link: 'https://leetcode.com/problems/first-missing-positive/' },
    { id: 38, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', description: 'Find median of two sorted arrays', platform: 'LeetCode', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
    { id: 39, title: 'Sliding Window Maximum', difficulty: 'Hard', description: 'Find max in sliding window', platform: 'LeetCode', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
    { id: 40, title: 'Count Inversions', difficulty: 'Medium', description: 'Count number of inversions', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1' }
  ],
  'strings': [
    { id: 1, title: 'Reverse String', difficulty: 'Easy', description: 'Reverse a string', platform: 'LeetCode', link: 'https://leetcode.com/problems/reverse-string/' },
    { id: 2, title: 'Valid Palindrome', difficulty: 'Easy', description: 'Check if string is palindrome', platform: 'LeetCode', link: 'https://leetcode.com/problems/valid-palindrome/' },
    { id: 3, title: 'Valid Anagram', difficulty: 'Easy', description: 'Check if two strings are anagrams', platform: 'LeetCode', link: 'https://leetcode.com/problems/valid-anagram/' },
    { id: 4, title: 'First Unique Character', difficulty: 'Easy', description: 'Find first non-repeating character', platform: 'LeetCode', link: 'https://leetcode.com/problems/first-unique-character-in-a-string/' },
    { id: 5, title: 'Longest Common Prefix', difficulty: 'Easy', description: 'Find longest common prefix', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-common-prefix/' },
    { id: 6, title: 'Valid Parentheses', difficulty: 'Easy', description: 'Check if parentheses are valid', platform: 'LeetCode', link: 'https://leetcode.com/problems/valid-parentheses/' },
    { id: 7, title: 'Implement strStr()', difficulty: 'Easy', description: 'Find needle in haystack', platform: 'LeetCode', link: 'https://leetcode.com/problems/implement-strstr/' },
    { id: 8, title: 'Count and Say', difficulty: 'Medium', description: 'Generate count and say sequence', platform: 'LeetCode', link: 'https://leetcode.com/problems/count-and-say/' },
    { id: 9, title: 'Longest Substring Without Repeating', difficulty: 'Medium', description: 'Find longest substring without repeating characters', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
    { id: 10, title: 'Longest Palindromic Substring', difficulty: 'Medium', description: 'Find longest palindromic substring', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-palindromic-substring/' },
    { id: 11, title: 'Zigzag Conversion', difficulty: 'Medium', description: 'Convert string in zigzag pattern', platform: 'LeetCode', link: 'https://leetcode.com/problems/zigzag-conversion/' },
    { id: 12, title: 'String to Integer (atoi)', difficulty: 'Medium', description: 'Implement atoi function', platform: 'LeetCode', link: 'https://leetcode.com/problems/string-to-integer-atoi/' },
    { id: 13, title: 'Roman to Integer', difficulty: 'Easy', description: 'Convert roman to integer', platform: 'LeetCode', link: 'https://leetcode.com/problems/roman-to-integer/' },
    { id: 14, title: 'Integer to Roman', difficulty: 'Medium', description: 'Convert integer to roman', platform: 'LeetCode', link: 'https://leetcode.com/problems/integer-to-roman/' },
    { id: 15, title: 'Group Anagrams', difficulty: 'Medium', description: 'Group anagrams together', platform: 'LeetCode', link: 'https://leetcode.com/problems/group-anagrams/' },
    { id: 16, title: 'Multiply Strings', difficulty: 'Medium', description: 'Multiply two strings', platform: 'LeetCode', link: 'https://leetcode.com/problems/multiply-strings/' },
    { id: 17, title: 'Permutation in String', difficulty: 'Medium', description: 'Check if permutation exists', platform: 'LeetCode', link: 'https://leetcode.com/problems/permutation-in-string/' },
    { id: 18, title: 'Reverse Words in String', difficulty: 'Medium', description: 'Reverse words in a string', platform: 'LeetCode', link: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
    { id: 19, title: 'Compare Version Numbers', difficulty: 'Medium', description: 'Compare two version numbers', platform: 'LeetCode', link: 'https://leetcode.com/problems/compare-version-numbers/' },
    { id: 20, title: 'Simplify Path', difficulty: 'Medium', description: 'Simplify Unix file path', platform: 'LeetCode', link: 'https://leetcode.com/problems/simplify-path/' },
    { id: 21, title: 'Restore IP Addresses', difficulty: 'Medium', description: 'Generate valid IP addresses', platform: 'LeetCode', link: 'https://leetcode.com/problems/restore-ip-addresses/' },
    { id: 22, title: 'Decode Ways', difficulty: 'Medium', description: 'Count ways to decode string', platform: 'LeetCode', link: 'https://leetcode.com/problems/decode-ways/' },
    { id: 23, title: 'Word Break', difficulty: 'Medium', description: 'Check if string can be segmented', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-break/' },
    { id: 24, title: 'Word Pattern', difficulty: 'Easy', description: 'Check if pattern matches', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-pattern/' },
    { id: 25, title: 'Isomorphic Strings', difficulty: 'Easy', description: 'Check if strings are isomorphic', platform: 'LeetCode', link: 'https://leetcode.com/problems/isomorphic-strings/' },
    { id: 26, title: 'Repeated Substring Pattern', difficulty: 'Easy', description: 'Check if string has repeated pattern', platform: 'LeetCode', link: 'https://leetcode.com/problems/repeated-substring-pattern/' },
    { id: 27, title: 'Longest Repeating Character', difficulty: 'Medium', description: 'Find longest repeating character replacement', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
    { id: 28, title: 'Minimum Window Substring', difficulty: 'Hard', description: 'Find minimum window substring', platform: 'LeetCode', link: 'https://leetcode.com/problems/minimum-window-substring/' },
    { id: 29, title: 'Edit Distance', difficulty: 'Hard', description: 'Find minimum edit distance', platform: 'LeetCode', link: 'https://leetcode.com/problems/edit-distance/' },
    { id: 30, title: 'Wildcard Matching', difficulty: 'Hard', description: 'Implement wildcard pattern matching', platform: 'LeetCode', link: 'https://leetcode.com/problems/wildcard-matching/' },
    { id: 31, title: 'Regular Expression Matching', difficulty: 'Hard', description: 'Implement regex matching', platform: 'LeetCode', link: 'https://leetcode.com/problems/regular-expression-matching/' },
    { id: 32, title: 'Distinct Subsequences', difficulty: 'Hard', description: 'Count distinct subsequences', platform: 'LeetCode', link: 'https://leetcode.com/problems/distinct-subsequences/' },
    { id: 33, title: 'Palindrome Partitioning', difficulty: 'Medium', description: 'Partition string into palindromes', platform: 'LeetCode', link: 'https://leetcode.com/problems/palindrome-partitioning/' },
    { id: 34, title: 'Word Ladder', difficulty: 'Hard', description: 'Find shortest transformation sequence', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-ladder/' },
    { id: 35, title: 'Longest Valid Parentheses', difficulty: 'Hard', description: 'Find longest valid parentheses', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-valid-parentheses/' }
  ],
  'functions': [
    { id: 1, title: 'Factorial Using Recursion', difficulty: 'Easy', description: 'Calculate factorial using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/factorial5739/1' },
    { id: 2, title: 'Fibonacci Using Recursion', difficulty: 'Easy', description: 'Find nth Fibonacci number using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/nth-fibonacci-number1335/1' },
    { id: 3, title: 'Sum of Digits Recursion', difficulty: 'Easy', description: 'Find sum of digits using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/sum-of-digit-is-pallindrome-or-not2751/1' },
    { id: 4, title: 'Power Using Recursion', difficulty: 'Easy', description: 'Calculate power using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/power-using-recursion/1' },
    { id: 5, title: 'Reverse String Recursion', difficulty: 'Easy', description: 'Reverse string using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/reverse-a-string-using-recursion/1' },
    { id: 6, title: 'Check Palindrome Recursion', difficulty: 'Easy', description: 'Check palindrome using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/palindrome-string0817/1' },
    { id: 7, title: 'GCD Using Recursion', difficulty: 'Easy', description: 'Find GCD using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1' },
    { id: 8, title: 'Tower of Hanoi', difficulty: 'Medium', description: 'Solve Tower of Hanoi problem', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1' },
    { id: 9, title: 'Print N to 1 Recursion', difficulty: 'Easy', description: 'Print numbers from N to 1 using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/print-n-to-1-without-loop/1' },
    { id: 10, title: 'Print 1 to N Recursion', difficulty: 'Easy', description: 'Print numbers from 1 to N using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-3621/1' },
    { id: 11, title: 'Count Digits Recursion', difficulty: 'Easy', description: 'Count digits using recursion', platform: 'GeeksforGeeks', link: 'https://practice.geeksforgeeks.org/problems/count-digits5716/1' },
    { id: 12, title: 'Binary Search Recursion', difficulty: 'Easy', description: 'Implement binary search using recursion', platform: 'LeetCode', link: 'https://leetcode.com/problems/binary-search/' },
    { id: 13, title: 'Climbing Stairs', difficulty: 'Easy', description: 'Count ways to climb stairs', platform: 'LeetCode', link: 'https://leetcode.com/problems/climbing-stairs/' },
    { id: 14, title: 'Pow(x, n)', difficulty: 'Medium', description: 'Implement power function', platform: 'LeetCode', link: 'https://leetcode.com/problems/powx-n/' },
    { id: 15, title: 'Generate Parentheses', difficulty: 'Medium', description: 'Generate all valid parentheses', platform: 'LeetCode', link: 'https://leetcode.com/problems/generate-parentheses/' },
    { id: 16, title: 'Letter Combinations', difficulty: 'Medium', description: 'Letter combinations of phone number', platform: 'LeetCode', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
    { id: 17, title: 'Permutations', difficulty: 'Medium', description: 'Generate all permutations', platform: 'LeetCode', link: 'https://leetcode.com/problems/permutations/' },
    { id: 18, title: 'Permutations II', difficulty: 'Medium', description: 'Generate unique permutations', platform: 'LeetCode', link: 'https://leetcode.com/problems/permutations-ii/' },
    { id: 19, title: 'Combinations', difficulty: 'Medium', description: 'Generate all combinations', platform: 'LeetCode', link: 'https://leetcode.com/problems/combinations/' },
    { id: 20, title: 'Combination Sum', difficulty: 'Medium', description: 'Find all combinations that sum to target', platform: 'LeetCode', link: 'https://leetcode.com/problems/combination-sum/' },
    { id: 21, title: 'Combination Sum II', difficulty: 'Medium', description: 'Find unique combinations that sum to target', platform: 'LeetCode', link: 'https://leetcode.com/problems/combination-sum-ii/' },
    { id: 22, title: 'Subsets', difficulty: 'Medium', description: 'Generate all subsets', platform: 'LeetCode', link: 'https://leetcode.com/problems/subsets/' },
    { id: 23, title: 'Subsets II', difficulty: 'Medium', description: 'Generate unique subsets', platform: 'LeetCode', link: 'https://leetcode.com/problems/subsets-ii/' },
    { id: 24, title: 'Word Search', difficulty: 'Medium', description: 'Search word in 2D board', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-search/' },
    { id: 25, title: 'N-Queens', difficulty: 'Hard', description: 'Solve N-Queens problem', platform: 'LeetCode', link: 'https://leetcode.com/problems/n-queens/' },
    { id: 26, title: 'Sudoku Solver', difficulty: 'Hard', description: 'Solve Sudoku puzzle', platform: 'LeetCode', link: 'https://leetcode.com/problems/sudoku-solver/' },
    { id: 27, title: 'Palindrome Partitioning', difficulty: 'Medium', description: 'Partition string into palindromes', platform: 'LeetCode', link: 'https://leetcode.com/problems/palindrome-partitioning/' },
    { id: 28, title: 'Restore IP Addresses', difficulty: 'Medium', description: 'Generate valid IP addresses', platform: 'LeetCode', link: 'https://leetcode.com/problems/restore-ip-addresses/' },
    { id: 29, title: 'Unique Paths', difficulty: 'Medium', description: 'Count unique paths in grid', platform: 'LeetCode', link: 'https://leetcode.com/problems/unique-paths/' },
    { id: 30, title: 'Unique Paths II', difficulty: 'Medium', description: 'Count unique paths with obstacles', platform: 'LeetCode', link: 'https://leetcode.com/problems/unique-paths-ii/' }
  ]};

export const getQuestionById = (topicId, questionId) => {
  return questions[topicId]?.find(q => q.id === questionId) || null;
};

export const getQuestionsByTopic = (topicId) => {
  return questions[topicId] || [];
};

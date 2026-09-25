window.LMS_DATA = {
  courseInfo: {
    title: 'Object-Oriented Programming',
    code: 'CS-201',
    language: 'Java',
    instructor: 'Soban Hussain',
    university: 'The University of Larkano',
    semester: 'Fall 2026',
    departments: [
      { id: 'ai', name: 'Artificial Intelligence', shortName: 'AI', color: '#06b6d4' },
      { id: 'swe', name: 'Software Engineering', shortName: 'SWE', color: '#8b5cf6' }
    ],
    schedule: 'Monday / Wednesday / Friday — 10:00 AM to 11:30 AM',
    credits: 3,
    totalWeeks: 16,
    textbook: 'Absolute Java by Walter Savitch (Global Edition, Pearson)'
  },

  weeks: [
    {
      id: 1,
      weekNum: 1,
      title: 'Introduction to Java & OOP Concepts',
      objectives: ['Understand OOP paradigm', 'Know Java history', 'Set up JDK', 'Write first program'],
      topics: ['OOP vs procedural', 'Java features', 'JDK/JRE/JVM', 'Compilation process'],
      resources: [
        { name: 'Week 1 - Introduction Slides', path: 'Lecture-Presentation/OOP_Weeks_1.pptx', type: 'pptx' },
        { name: 'Weeks 1-2 Fundamentals Notes', path: 'Notes/oop_weeks_1_2_fundamental_Understanding.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Hello World Program',
          language: 'java',
          code: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
          description: 'The classic first Java program that prints a greeting to the console.'
        },
        {
          title: 'Basic Output',
          language: 'java',
          code: `public class OutputDemo {\n    public static void main(String[] args) {\n        System.out.print("First line. ");\n        System.out.println("Still first line.");\n        System.out.println("Second line.");\n    }\n}`,
          description: 'Demonstrating the difference between print() and println().'
        }
      ],
      department: 'all'
    },
    {
      id: 2,
      weekNum: 2,
      title: 'Data Types, Variables, Operators & I/O',
      objectives: ['Declare variables', 'Use data types', 'Apply operators', 'Handle console I/O'],
      topics: ['Primitive types (int, double, char, boolean)', 'String basics', 'Arithmetic/logical/relational operators', 'Scanner class'],
      resources: [
        { name: 'Weeks 1-2 Fundamentals Notes', path: 'Notes/oop_weeks_1_2_fundamental_Understanding.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Variable Declarations',
          language: 'java',
          code: `public class VariablesDemo {\n    public static void main(String[] args) {\n        int age = 20;\n        double gpa = 3.8;\n        char grade = 'A';\n        boolean isStudent = true;\n        System.out.println("Age: " + age + ", GPA: " + gpa);\n    }\n}`,
          description: 'Declaring and initializing primitive data types.'
        },
        {
          title: 'Scanner Input',
          language: 'java',
          code: `import java.util.Scanner;\n\npublic class InputDemo {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("Enter your name: ");\n        String name = sc.nextLine();\n        System.out.println("Welcome, " + name + "!");\n        sc.close();\n    }\n}`,
          description: 'Using the Scanner class to read user input from the console.'
        }
      ],
      department: 'all'
    },
    {
      id: 3,
      weekNum: 3,
      title: 'Control Structures — Conditionals',
      objectives: ['Use if/else', 'Implement nested if', 'Utilize switch-case'],
      topics: ['Boolean expressions', 'if-else ladder', 'switch', 'ternary operator'],
      resources: [],
      codeExamples: [
        {
          title: 'Grade Calculator',
          language: 'java',
          code: `public class GradeCalc {\n    public static void main(String[] args) {\n        int marks = 85;\n        if (marks >= 90) {\n            System.out.println("Grade A");\n        } else if (marks >= 80) {\n            System.out.println("Grade B");\n        } else {\n            System.out.println("Grade C");\n        }\n    }\n}`,
          description: 'Using an if-else ladder to determine a grade based on marks.'
        },
        {
          title: 'Simple Menu System',
          language: 'java',
          code: `public class MenuDemo {\n    public static void main(String[] args) {\n        int choice = 2;\n        switch(choice) {\n            case 1: System.out.println("Start Game"); break;\n            case 2: System.out.println("Load Game"); break;\n            case 3: System.out.println("Exit"); break;\n            default: System.out.println("Invalid choice");\n        }\n    }\n}`,
          description: 'Using a switch statement to handle menu selections.'
        }
      ],
      department: 'all'
    },
    {
      id: 4,
      weekNum: 4,
      title: 'Control Structures — Loops',
      objectives: ['Use for loops', 'Use while loops', 'Use do-while loops', 'Implement nested loops'],
      topics: ['Loop constructs', 'break/continue', 'nested loops', 'loop patterns'],
      resources: [],
      codeExamples: [
        {
          title: 'Multiplication Table',
          language: 'java',
          code: `public class MultiTable {\n    public static void main(String[] args) {\n        int num = 5;\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(num + " x " + i + " = " + (num * i));\n        }\n    }\n}`,
          description: 'Using a for loop to print a multiplication table.'
        },
        {
          title: 'Star Pattern Printing',
          language: 'java',
          code: `public class StarPattern {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print("* ");\n            }\n            System.out.println();\n        }\n    }\n}`,
          description: 'Using nested loops to print a right-angled triangle of stars.'
        }
      ],
      department: 'all'
    },
    {
      id: 5,
      weekNum: 5,
      title: 'Arrays (1D & 2D)',
      objectives: ['Declare/initialize arrays', 'Iterate over arrays', 'Understand 2D arrays'],
      topics: ['Array declaration', 'traversal', 'common algorithms (search, sort)', '2D arrays'],
      resources: [
        { name: 'Arrays & Methods Lecture', path: 'Lecture-Presentation/arrays__methods_java_lecture.pptx', type: 'pptx' },
        { name: 'Arrays, Strings & Methods Guide', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Array Operations & Linear Search',
          language: 'java',
          code: `public class ArraySearch {\n    public static void main(String[] args) {\n        int[] numbers = {10, 25, 30, 45, 50};\n        int target = 30;\n        boolean found = false;\n        for (int i = 0; i < numbers.length; i++) {\n            if (numbers[i] == target) {\n                found = true;\n                System.out.println("Found at index " + i);\n                break;\n            }\n        }\n        if (!found) System.out.println("Not found");\n    }\n}`,
          description: 'Searching for a specific element in a 1D array.'
        },
        {
          title: 'Matrix Addition',
          language: 'java',
          code: `public class MatrixAdd {\n    public static void main(String[] args) {\n        int[][] a = {{1,2},{3,4}};\n        int[][] b = {{5,6},{7,8}};\n        int[][] sum = new int[2][2];\n        for (int i = 0; i < 2; i++) {\n            for (int j = 0; j < 2; j++) {\n                sum[i][j] = a[i][j] + b[i][j];\n                System.out.print(sum[i][j] + " ");\n            }\n            System.out.println();\n        }\n    }\n}`,
          description: 'Adding two 2x2 matrices using 2D arrays.'
        }
      ],
      department: 'all'
    },
    {
      id: 6,
      weekNum: 6,
      title: 'Strings & String Methods',
      objectives: ['Manipulate strings', 'Use String methods', 'Understand StringBuilder'],
      topics: ['String class', 'immutability', 'common methods (length, charAt, substring, etc.)', 'StringBuilder'],
      resources: [
        { name: 'Arrays, Strings & Methods Guide', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'String Reversal',
          language: 'java',
          code: `public class StringReverse {\n    public static void main(String[] args) {\n        String original = "Java";\n        String reversed = "";\n        for (int i = original.length() - 1; i >= 0; i--) {\n            reversed += original.charAt(i);\n        }\n        System.out.println("Reversed: " + reversed);\n    }\n}`,
          description: 'Reversing a string using a loop and charAt().'
        },
        {
          title: 'Palindrome Check with StringBuilder',
          language: 'java',
          code: `public class PalindromeCheck {\n    public static void main(String[] args) {\n        String word = "radar";\n        StringBuilder sb = new StringBuilder(word);\n        String reversed = sb.reverse().toString();\n        if (word.equals(reversed)) {\n            System.out.println(word + " is a palindrome.");\n        } else {\n            System.out.println(word + " is not a palindrome.");\n        }\n    }\n}`,
          description: 'Using StringBuilder to easily reverse and check for palindromes.'
        }
      ],
      department: 'all'
    },
    {
      id: 7,
      weekNum: 7,
      title: 'Methods — Definition, Parameters, Return Types',
      objectives: ['Define methods', 'Pass parameters', 'Understand return types', 'Apply method overloading'],
      topics: ['Method syntax', 'parameters vs arguments', 'return types', 'void methods', 'method overloading', 'scope'],
      resources: [
        { name: 'Methods & Classes Slides', path: 'Lecture-Presentation/methods_classes__slides.pptx', type: 'pptx' },
        { name: 'Arrays, Strings & Methods Guide', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Calculator Methods',
          language: 'java',
          code: `public class Calculator {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    \n    public static void main(String[] args) {\n        int result = add(5, 10);\n        System.out.println("Sum: " + result);\n    }\n}`,
          description: 'Defining a simple method with parameters and a return value.'
        },
        {
          title: 'Method Overloading',
          language: 'java',
          code: `public class OverloadDemo {\n    static int add(int a, int b) { return a + b; }\n    static double add(double a, double b) { return a + b; }\n    static int add(int a, int b, int c) { return a + b + c; }\n    \n    public static void main(String[] args) {\n        System.out.println(add(5, 10));\n        System.out.println(add(5.5, 2.5));\n        System.out.println(add(1, 2, 3));\n    }\n}`,
          description: 'Creating multiple methods with the same name but different parameters.'
        }
      ],
      department: 'all'
    },
    {
      id: 8,
      weekNum: 8,
      title: 'Midterm Review & Exam',
      objectives: ['Review Weeks 1-7', 'Practice problem solving', 'Prepare for midterm exam'],
      topics: ['Comprehensive review', 'practice problems', 'exam format'],
      resources: [
        { name: 'Beginner to Intermediate Guide', path: 'Lecture-Presentation/OOP_Beginner_to_Intermediate_Arrays_Methods_Classes.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Sample Midterm Problem',
          language: 'java',
          code: `public class MidtermPrep {\n    // Write a method to find the maximum in an array\n    static int findMax(int[] arr) {\n        int max = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] > max) max = arr[i];\n        }\n        return max;\n    }\n    \n    public static void main(String[] args) {\n        int[] nums = {12, 45, 7, 23, 56, 89, 2};\n        System.out.println("Max element: " + findMax(nums));\n    }\n}`,
          description: 'A typical problem combining arrays and methods for exam prep.'
        },
        {
          title: 'String Parsing Problem',
          language: 'java',
          code: `public class StringPrep {\n    // Count vowels in a string\n    static int countVowels(String s) {\n        int count = 0;\n        s = s.toLowerCase();\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            if (c=='a' || c=='e' || c=='i' || c=='o' || c=='u') count++;\n        }\n        return count;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println("Vowels: " + countVowels("University of Larkano"));\n    }\n}`,
          description: 'Another sample exam question focusing on string manipulation.'
        }
      ],
      department: 'all'
    },
    {
      id: 9,
      weekNum: 9,
      title: 'Classes & Objects — Fundamentals',
      objectives: ['Create classes', 'Instantiate objects', 'Define fields and methods', 'Understand encapsulation intro'],
      topics: ['Class definition', 'object creation', 'instance variables', 'instance methods', 'encapsulation intro'],
      resources: [
        { name: 'Methods & Classes Slides', path: 'Lecture-Presentation/methods_classes__slides.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Student Class',
          language: 'java',
          code: `class Student {\n    String name;\n    int id;\n    \n    void displayInfo() {\n        System.out.println("Student ID: " + id + ", Name: " + name);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.name = "Ali";\n        s1.id = 101;\n        s1.displayInfo();\n    }\n}`,
          description: 'Creating a simple class and instantiating it to make objects.'
        },
        {
          title: 'BankAccount Class',
          language: 'java',
          code: `class BankAccount {\n    double balance;\n    \n    void deposit(double amount) {\n        balance += amount;\n        System.out.println("Deposited: $" + amount);\n    }\n    \n    void withdraw(double amount) {\n        if (balance >= amount) {\n            balance -= amount;\n            System.out.println("Withdrawn: $" + amount);\n        } else {\n            System.out.println("Insufficient funds.");\n        }\n    }\n}\n\npublic class BankDemo {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(500);\n        acc.withdraw(200);\n        System.out.println("Current Balance: $" + acc.balance);\n    }\n}`,
          description: 'A class modeling a bank account with deposit and withdraw behaviors.'
        }
      ],
      department: 'all'
    },
    {
      id: 10,
      weekNum: 10,
      title: 'Constructors, `this` keyword, Static Members',
      objectives: ['Use constructors', 'Understand the `this` keyword', 'Differentiate static vs instance'],
      topics: ['Default/parameterized constructors', 'constructor overloading', 'this keyword', 'static fields/methods'],
      resources: [
        { name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Constructor & this Keyword',
          language: 'java',
          code: `class Box {\n    double width, height, depth;\n    \n    Box(double width, double height, double depth) {\n        this.width = width;\n        this.height = height;\n        this.depth = depth;\n    }\n    \n    double volume() {\n        return width * height * depth;\n    }\n}\n\npublic class BoxDemo {\n    public static void main(String[] args) {\n        Box b = new Box(10, 20, 15);\n        System.out.println("Volume: " + b.volume());\n    }\n}`,
          description: 'Using parameterized constructors and the this keyword to resolve shadowing.'
        },
        {
          title: 'Static Members',
          language: 'java',
          code: `class Counter {\n    static int count = 0; // shared across all instances\n    \n    Counter() {\n        count++;\n    }\n}\n\npublic class StaticDemo {\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        Counter c3 = new Counter();\n        System.out.println("Total objects created: " + Counter.count);\n    }\n}`,
          description: 'Demonstrating a static variable shared by all instances of a class.'
        }
      ],
      department: 'all'
    },
    {
      id: 11,
      weekNum: 11,
      title: 'Inheritance & `super` keyword',
      objectives: ['Implement inheritance', 'Use super keyword', 'Understand IS-A relationship'],
      topics: ['extends keyword', 'super keyword', 'method inheritance', 'constructor chaining', 'IS-A vs HAS-A'],
      resources: [],
      codeExamples: [
        {
          title: 'Animal Hierarchy',
          language: 'java',
          code: `class Animal {\n    void eat() {\n        System.out.println("This animal eats food.");\n    }\n}\n\nclass Dog extends Animal {\n    void bark() {\n        System.out.println("Dog barks.");\n    }\n}\n\npublic class InheritanceDemo {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();  // Inherited method\n        d.bark(); // Specific method\n    }\n}`,
          description: 'A basic example of extending a class.'
        },
        {
          title: 'Using super()',
          language: 'java',
          code: `class Person {\n    String name;\n    Person(String name) {\n        this.name = name;\n    }\n}\n\nclass Employee extends Person {\n    double salary;\n    Employee(String name, double salary) {\n        super(name); // Call parent constructor\n        this.salary = salary;\n    }\n    void display() {\n        System.out.println(name + " earns $" + salary);\n    }\n}\n\npublic class SuperDemo {\n    public static void main(String[] args) {\n        Employee emp = new Employee("Sara", 50000);\n        emp.display();\n    }\n}`,
          description: 'Invoking the superclass constructor using the super() keyword.'
        }
      ],
      department: 'all'
    },
    {
      id: 12,
      weekNum: 12,
      title: 'Polymorphism — Overloading & Overriding',
      objectives: ['Differentiate method overloading vs overriding', 'Understand dynamic dispatch', 'Implement upcasting'],
      topics: ['Compile-time vs runtime polymorphism', '@Override', 'dynamic method dispatch'],
      resources: [],
      codeExamples: [
        {
          title: 'Method Overriding',
          language: 'java',
          code: `class Animal {\n    void sound() {\n        System.out.println("Some generic sound");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Meow");\n    }\n}\n\npublic class OverrideDemo {\n    public static void main(String[] args) {\n        Animal myAnimal = new Cat(); // Upcasting\n        myAnimal.sound(); // Calls Cat's overridden method\n    }\n}`,
          description: 'Achieving runtime polymorphism via method overriding.'
        },
        {
          title: 'Shape Polymorphism',
          language: 'java',
          code: `class Shape {\n    void draw() { System.out.println("Drawing a shape"); }\n}\nclass Circle extends Shape {\n    void draw() { System.out.println("Drawing a Circle"); }\n}\nclass Rectangle extends Shape {\n    void draw() { System.out.println("Drawing a Rectangle"); }\n}\n\npublic class PolyDemo {\n    public static void main(String[] args) {\n        Shape s1 = new Circle();\n        Shape s2 = new Rectangle();\n        s1.draw();\n        s2.draw();\n    }\n}`,
          description: 'Using polymorphic references to call overridden methods.'
        }
      ],
      department: 'all'
    },
    {
      id: 13,
      weekNum: 13,
      title: 'Abstract Classes & Interfaces',
      objectives: ['Use abstract classes', 'Implement interfaces', 'Understand when to use each'],
      topics: ['abstract keyword', 'abstract methods', 'interface keyword', 'implements', 'multiple interfaces'],
      resources: [],
      codeExamples: [
        {
          title: 'Abstract Class',
          language: 'java',
          code: `abstract class Shape {\n    String color;\n    Shape(String color) { this.color = color; }\n    abstract double area(); // Abstract method\n}\n\nclass Circle extends Shape {\n    double radius;\n    Circle(String color, double radius) {\n        super(color);\n        this.radius = radius;\n    }\n    double area() { return Math.PI * radius * radius; }\n}\n\npublic class AbstractDemo {\n    public static void main(String[] args) {\n        Shape s = new Circle("Red", 5.0);\n        System.out.println("Area: " + s.area());\n    }\n}`,
          description: 'Defining and implementing an abstract class.'
        },
        {
          title: 'Interfaces',
          language: 'java',
          code: `interface Drawable {\n    void draw();\n}\n\ninterface Resizable {\n    void resize();\n}\n\nclass ScreenComponent implements Drawable, Resizable {\n    public void draw() { System.out.println("Drawing component"); }\n    public void resize() { System.out.println("Resizing component"); }\n}\n\npublic class InterfaceDemo {\n    public static void main(String[] args) {\n        ScreenComponent comp = new ScreenComponent();\n        comp.draw();\n        comp.resize();\n    }\n}`,
          description: 'Implementing multiple interfaces in a single class.'
        }
      ],
      department: 'all'
    },
    {
      id: 14,
      weekNum: 14,
      title: 'Exception Handling',
      objectives: ['Handle exceptions with try/catch/finally', 'Understand throw/throws', 'Create custom exceptions'],
      topics: ['Exception hierarchy', 'try-catch-finally', 'throw/throws', 'checked vs unchecked', 'custom exceptions'],
      resources: [],
      codeExamples: [
        {
          title: 'Try-Catch Block',
          language: 'java',
          code: `public class ExceptionDemo {\n    public static void main(String[] args) {\n        try {\n            int[] nums = {1, 2, 3};\n            System.out.println(nums[5]); // Throws exception\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println("Array index is invalid.");\n        } finally {\n            System.out.println("This block always executes.");\n        }\n    }\n}`,
          description: 'Handling runtime errors gracefully using try-catch-finally.'
        },
        {
          title: 'Custom Exception',
          language: 'java',
          code: `class InsufficientFundsException extends Exception {\n    public InsufficientFundsException(String msg) { super(msg); }\n}\n\nclass Account {\n    double balance = 500;\n    void withdraw(double amount) throws InsufficientFundsException {\n        if(amount > balance) {\n            throw new InsufficientFundsException("Not enough money!");\n        }\n        balance -= amount;\n    }\n}\n\npublic class CustomExDemo {\n    public static void main(String[] args) {\n        Account acc = new Account();\n        try {\n            acc.withdraw(600);\n        } catch (InsufficientFundsException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}`,
          description: 'Defining and throwing a custom user-defined exception.'
        }
      ],
      department: 'all'
    },
    {
      id: 15,
      weekNum: 15,
      title: 'File I/O & Collections Overview',
      objectives: ['Read/write files', 'Use ArrayList', 'Use HashMap'],
      topics: ['File, FileReader, FileWriter', 'BufferedReader', 'ArrayList basics', 'HashMap basics'],
      resources: [],
      codeExamples: [
        {
          title: 'File Writing & Reading',
          language: 'java',
          code: `import java.io.*;\n\npublic class FileDemo {\n    public static void main(String[] args) {\n        try {\n            FileWriter writer = new FileWriter("test.txt");\n            writer.write("Hello File I/O!");\n            writer.close();\n            \n            BufferedReader reader = new BufferedReader(new FileReader("test.txt"));\n            System.out.println("Read: " + reader.readLine());\n            reader.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}`,
          description: 'Basic text file input/output in Java.'
        },
        {
          title: 'ArrayList Example',
          language: 'java',
          code: `import java.util.ArrayList;\n\npublic class ListDemo {\n    public static void main(String[] args) {\n        ArrayList<String> students = new ArrayList<>();\n        students.add("Alice");\n        students.add("Bob");\n        students.add("Charlie");\n        \n        for (String s : students) {\n            System.out.println(s);\n        }\n    }\n}`,
          description: 'Using the ArrayList class from the Collections framework.'
        }
      ],
      department: 'all'
    },
    {
      id: 16,
      weekNum: 16,
      title: 'Final Review & Exam',
      objectives: ['Comprehensive review of all OOP concepts', 'Recap OOP design principles', 'Prepare for final exam'],
      topics: ['Full course review', 'OOP design principles recap', 'exam preparation'],
      resources: [],
      codeExamples: [
        {
          title: 'Mini Library System - Structure',
          language: 'java',
          code: `abstract class Item {\n    String title;\n    boolean isBorrowed;\n    Item(String title) { this.title = title; }\n    abstract void display();\n}\n\nclass Book extends Item {\n    String author;\n    Book(String title, String author) {\n        super(title);\n        this.author = author;\n    }\n    void display() { System.out.println("Book: " + title + " by " + author); }\n}\n\npublic class LibraryReview {\n    public static void main(String[] args) {\n        Item b = new Book("Absolute Java", "Savitch");\n        b.display();\n    }\n}`,
          description: 'A small class hierarchy combining inheritance and abstraction for review.'
        },
        {
          title: 'Polymorphic Processing',
          language: 'java',
          code: `import java.util.ArrayList;\n\npublic class PolyReview {\n    public static void main(String[] args) {\n        ArrayList<Item> items = new ArrayList<>();\n        items.add(new Book("Java Fundamentals", "John Doe"));\n        // items.add(new DVD("Java Tutorial"));\n        \n        for (Item item : items) {\n            item.display(); // Dynamic binding\n        }\n    }\n}`,
          description: 'Processing heterogeneous objects polymorphically.'
        }
      ],
      department: 'all'
    }
  ],

  resources: [
    { id: 1, name: 'Absolute Java - Walter Savitch (Textbook)', path: 'Book/Absolute_Java-by-Walter_Savitch-Global_Edition-Pearson.pdf', type: 'pdf', category: 'book', size: '7.4 MB', icon: '📚' },
    { id: 2, name: 'Week 1 - Introduction Slides', path: 'Lecture-Presentation/OOP_Weeks_1.pptx', type: 'pptx', category: 'lecture', size: '67 KB', icon: '📊' },
    { id: 3, name: 'Arrays & Methods Lecture', path: 'Lecture-Presentation/arrays__methods_java_lecture.pptx', type: 'pptx', category: 'lecture', size: '67 KB', icon: '📊' },
    { id: 4, name: 'Methods & Classes Slides', path: 'Lecture-Presentation/methods_classes__slides.pptx', type: 'pptx', category: 'lecture', size: '78 KB', icon: '📊' },
    { id: 5, name: 'Beginner to Intermediate Guide', path: 'Lecture-Presentation/OOP_Beginner_to_Intermediate_Arrays_Methods_Classes.pptx', type: 'pptx', category: 'lecture', size: '98 KB', icon: '📊' },
    { id: 6, name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx', category: 'lecture', size: '79 KB', icon: '📊' },
    { id: 7, name: 'Weeks 1-2 Fundamentals Notes', path: 'Notes/oop_weeks_1_2_fundamental_Understanding.pdf', type: 'pdf', category: 'note', size: '240 KB', icon: '📝' },
    { id: 8, name: 'Arrays, Strings & Methods Guide', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf', category: 'note', size: '195 KB', icon: '📝' },
    { id: 9, name: 'Official Course Outline (SWE & AI)', path: 'Outline/OOP-Outline_(SWE and AI - 2nd Sem)-Official.pdf', type: 'pdf', category: 'outline', size: '268 KB', icon: '📋' },
    { id: 10, name: 'Course Outline (Designed by Instructor)', path: 'Outline/Outline_OOP-Designed_by_SobanHussain.docx', type: 'docx', category: 'outline', size: '44 KB', icon: '📋' }
  ],

  announcements: [
    {
      id: 1,
      title: 'Welcome to Object-Oriented Programming!',
      date: '2026-09-15',
      content: 'Welcome to CS-201! I am excited to guide you through the wonderful world of OOP with Java. Please make sure to download the textbook and review the course outline.',
      department: 'all',
      importance: 'normal'
    },
    {
      id: 2,
      title: 'Lab Setup Instructions (Action Required)',
      date: '2026-09-16',
      content: 'Please install the latest JDK (Java Development Kit) and IntelliJ IDEA Community Edition before your first lab session this week.',
      department: 'all',
      importance: 'important'
    },
    {
      id: 3,
      title: 'First Assignment Posted',
      date: '2026-09-20',
      content: 'Assignment 1 on Java Basics has been posted. It is due next week. Please start early!',
      department: 'all',
      importance: 'normal'
    },
    {
      id: 4,
      title: 'Project Topics Selection (AI Dept)',
      date: '2026-10-01',
      content: 'AI students, please ensure your course projects are aligned with basic AI concepts or data processing applications.',
      department: 'ai',
      importance: 'normal'
    },
    {
      id: 5,
      title: 'Lab Schedule Update (SWE Dept)',
      date: '2026-10-01',
      content: 'SWE students, your Friday afternoon lab has been moved to Thursday morning at 9:00 AM.',
      department: 'swe',
      importance: 'normal'
    },
    {
      id: 6,
      title: 'Midterm Exam Date Finalized!',
      date: '2026-10-20',
      content: 'The midterm exam is scheduled for November 4, 2026, during regular class hours. It will cover everything from Week 1 to Week 7.',
      department: 'all',
      importance: 'urgent'
    }
  ],

  calendarEvents: [
    { id: 1, title: 'First Day of Classes', date: '2026-09-15', type: 'event' },
    { id: 2, title: 'Assignment 1 Due', date: '2026-09-28', type: 'deadline' },
    { id: 3, title: 'Assignment 2 Due', date: '2026-10-12', type: 'deadline' },
    { id: 4, title: 'Assignment 3 Due', date: '2026-10-26', type: 'deadline' },
    { id: 5, title: 'Midterm Exam', date: '2026-11-04', type: 'exam' },
    { id: 6, title: 'Fall Break', date: '2026-11-26', type: 'holiday' },
    { id: 7, title: 'Assignment 6 Due', date: '2026-12-07', type: 'deadline' },
    { id: 8, title: 'Assignment 8 Due', date: '2027-01-04', type: 'deadline' },
    { id: 9, title: 'Final Exam Week', date: '2027-01-11', type: 'exam' }
  ],

  quizzes: [
    {
      id: 1,
      title: 'Quiz 1: Java Basics',
      topic: 'Weeks 1-2',
      questions: [
        {
          question: 'What is the correct way to declare an integer in Java?',
          options: ['int x = 5;', 'integer x = 5;', 'x = 5;', 'Int x = 5;'],
          correctIndex: 0,
          explanation: 'In Java, the keyword for integer type is "int" (lowercase).'
        },
        {
          question: 'Which of the following is NOT a feature of Java?',
          options: ['Object-Oriented', 'Platform Independent', 'Pointers', 'Robust'],
          correctIndex: 2,
          explanation: 'Java does not support explicit pointers for security reasons.'
        },
        {
          question: 'What does JVM stand for?',
          options: ['Java Variable Machine', 'Java Virtual Machine', 'Java Visual Machine', 'Just Virtual Machine'],
          correctIndex: 1,
          explanation: 'JVM stands for Java Virtual Machine.'
        },
        {
          question: 'Which method is used to print output and move to the next line?',
          options: ['System.out.print()', 'System.out.println()', 'System.print()', 'Console.writeLine()'],
          correctIndex: 1,
          explanation: 'System.out.println() prints the text and appends a newline character.'
        },
        {
          question: 'How do you read integer input using the Scanner class?',
          options: ['scanner.nextInteger()', 'scanner.readInt()', 'scanner.nextInt()', 'scanner.get()'],
          correctIndex: 2,
          explanation: 'The nextInt() method reads an integer from the input.'
        }
      ]
    },
    {
      id: 2,
      title: 'Quiz 2: Control Structures',
      topic: 'Weeks 3-4',
      questions: [
        {
          question: 'Which loop is guaranteed to execute at least once?',
          options: ['for loop', 'while loop', 'do-while loop', 'enhanced for loop'],
          correctIndex: 2,
          explanation: 'A do-while loop evaluates its condition after the block of code has run.'
        },
        {
          question: 'What keyword is used to exit a switch statement?',
          options: ['stop', 'exit', 'break', 'return'],
          correctIndex: 2,
          explanation: 'The break keyword breaks out of a switch block.'
        },
        {
          question: 'Which operator is the logical AND in Java?',
          options: ['&&', '||', '&', '!'],
          correctIndex: 0,
          explanation: '&& is the logical AND operator.'
        },
        {
          question: 'What is the syntax for a ternary operator?',
          options: ['condition ? true : false', 'condition : true ? false', 'condition ? true , false', 'if condition true else false'],
          correctIndex: 0,
          explanation: 'The ternary operator uses the syntax: condition ? expression1 : expression2'
        },
        {
          question: 'What happens if there is no break statement in a switch case?',
          options: ['Syntax error', 'Execution falls through to the next case', 'The switch terminates', 'The program crashes'],
          correctIndex: 1,
          explanation: 'Without a break, Java executes the matched case and all subsequent cases (fall-through).'
        }
      ]
    },
    {
      id: 3,
      title: 'Quiz 3: Arrays & Strings',
      topic: 'Weeks 5-6',
      questions: [
        {
          question: 'How do you find the number of elements in an array named "arr"?',
          options: ['arr.size()', 'arr.length', 'arr.length()', 'arr.size'],
          correctIndex: 1,
          explanation: 'In Java, arrays have a property "length" (no parentheses) that holds their size.'
        },
        {
          question: 'Which class provides a mutable sequence of characters?',
          options: ['String', 'Char', 'StringBuilder', 'StringArray'],
          correctIndex: 2,
          explanation: 'StringBuilder creates a mutable string of characters, unlike the String class.'
        },
        {
          question: 'What is the index of the first element in a Java array?',
          options: ['1', '0', '-1', 'Depends on declaration'],
          correctIndex: 1,
          explanation: 'Java arrays are 0-indexed.'
        },
        {
          question: 'Which method returns the length of a String named "str"?',
          options: ['str.size()', 'str.length', 'str.length()', 'str.size'],
          correctIndex: 2,
          explanation: 'For Strings, length() is a method, so parentheses are required.'
        },
        {
          question: 'What happens when you modify a String object?',
          options: ['The original string changes', 'A new String object is created', 'It causes an error', 'Nothing happens'],
          correctIndex: 1,
          explanation: 'Strings in Java are immutable; modifications create a new String object.'
        }
      ]
    },
    {
      id: 4,
      title: 'Quiz 4: Methods & Classes',
      topic: 'Weeks 7, 9-10',
      questions: [
        {
          question: 'What is method overloading?',
          options: ['Methods with the same name but different return types', 'Methods with the same name but different parameters', 'Overriding a parent method', 'Creating too many methods'],
          correctIndex: 1,
          explanation: 'Method overloading is having multiple methods with the same name but different parameter lists.'
        },
        {
          question: 'What keyword refers to the current object instance?',
          options: ['super', 'current', 'this', 'self'],
          correctIndex: 2,
          explanation: 'The "this" keyword acts as a reference to the current object.'
        },
        {
          question: 'A static method can access:',
          options: ['Only static variables', 'Only instance variables', 'Both static and instance variables', 'Neither'],
          correctIndex: 0,
          explanation: 'Static methods belong to the class and can only directly access other static members.'
        },
        {
          question: 'What is a constructor?',
          options: ['A method to destroy objects', 'A variable that holds memory', 'A special method to initialize objects', 'A static class'],
          correctIndex: 2,
          explanation: 'Constructors are invoked when an object is created to initialize its state.'
        },
        {
          question: 'What is the return type of a constructor?',
          options: ['void', 'int', 'String', 'None'],
          correctIndex: 3,
          explanation: 'Constructors do not have a return type, not even void.'
        }
      ]
    },
    {
      id: 5,
      title: 'Quiz 5: OOP Concepts',
      topic: 'Weeks 11-13',
      questions: [
        {
          question: 'Which keyword is used to inherit a class?',
          options: ['implements', 'inherits', 'extends', 'super'],
          correctIndex: 2,
          explanation: 'The "extends" keyword is used for class inheritance in Java.'
        },
        {
          question: 'Can a class extend multiple classes in Java?',
          options: ['Yes', 'No', 'Only if they are abstract', 'Depends on the version'],
          correctIndex: 1,
          explanation: 'Java does not support multiple inheritance of classes (only single inheritance).'
        },
        {
          question: 'What is dynamic method dispatch?',
          options: ['Compile-time polymorphism', 'Runtime polymorphism', 'Method overloading', 'Variable overriding'],
          correctIndex: 1,
          explanation: 'Dynamic method dispatch is a mechanism by which a call to an overridden method is resolved at runtime.'
        },
        {
          question: 'Which keyword allows a class to use an interface?',
          options: ['extends', 'implements', 'uses', 'interfaces'],
          correctIndex: 1,
          explanation: 'A class "implements" an interface to provide concrete behavior for its abstract methods.'
        },
        {
          question: 'What keyword is used to call a superclass constructor?',
          options: ['parent()', 'super()', 'this()', 'base()'],
          correctIndex: 1,
          explanation: 'super() is used to invoke the constructor of the immediate parent class.'
        }
      ]
    }
  ],

  assignments: [
    {
      id: 1,
      title: 'Assignment 1: Java Calculator',
      description: 'Build a console-based calculator that can perform basic arithmetic operations (addition, subtraction, multiplication, division). Use Scanner for input and format your output clearly.',
      weekNum: 2,
      dueDate: '2026-09-28',
      department: 'all',
      tasks: ['Create a Calculator class', 'Implement add, subtract, multiply, divide methods', 'Handle division by zero gracefully', 'Create an interactive text menu']
    },
    {
      id: 2,
      title: 'Assignment 2: Grade Management System',
      description: 'Develop a program that reads numeric grades from the user until they enter -1. Then, calculate the average, highest, and lowest grades using loops and conditional logic.',
      weekNum: 4,
      dueDate: '2026-10-12',
      department: 'all',
      tasks: ['Use a while or do-while loop for input', 'Use conditionals to find max/min', 'Calculate the average', 'Print a formatted report']
    },
    {
      id: 3,
      title: 'Assignment 3: Student Marks Analysis',
      description: 'Use a 2D array to store the marks of 5 students across 3 subjects. Write methods to find the total and average marks for each student, and the average for each subject.',
      weekNum: 5,
      dueDate: '2026-10-26',
      department: 'all',
      tasks: ['Initialize a 5x3 2D array', 'Write method for student average', 'Write method for subject average', 'Print data in a tabular format']
    },
    {
      id: 4,
      title: 'Assignment 4: Text Processor',
      description: 'Create a program that takes a block of text and performs various string operations: count words, count vowels, reverse the text, and capitalize the first letter of each word.',
      weekNum: 6,
      dueDate: '2026-11-09',
      department: 'all',
      tasks: ['Use String methods (split, charAt, etc.)', 'Use StringBuilder for modifications', 'Implement word counting', 'Implement vowel counting']
    },
    {
      id: 5,
      title: 'Assignment 5: Utility Library',
      description: 'Create a class called MathUtils containing ONLY static methods for advanced math functions: factorial, power, isPrime, and gcd. Test these methods in a separate Main class.',
      weekNum: 7,
      dueDate: '2026-11-23',
      department: 'swe',
      tasks: ['Create static methods', 'Implement factorial', 'Implement prime checking', 'Implement GCD using loops or recursion']
    },
    {
      id: 6,
      title: 'Assignment 6: Bank Account System',
      description: 'Design an OOP-based Bank Account system. Include classes for Customer and Account. Implement encapsulation using private fields and public getters/setters.',
      weekNum: 10,
      dueDate: '2026-12-07',
      department: 'all',
      tasks: ['Create Customer and Account classes', 'Use encapsulation (private/public)', 'Implement constructors', 'Implement deposit/withdraw logic']
    },
    {
      id: 7,
      title: 'Assignment 7: Shape Hierarchy',
      description: 'Create an abstract base class Shape with an abstract method calculateArea(). Implement subclasses Circle, Rectangle, and Triangle that override this method. Create a list of Shapes and calculate the total area.',
      weekNum: 12,
      dueDate: '2026-12-21',
      department: 'ai',
      tasks: ['Create abstract class Shape', 'Create subclasses (Circle, Rectangle, Triangle)', 'Override area methods', 'Demonstrate polymorphism with a Shape array']
    },
    {
      id: 8,
      title: 'Assignment 8: File Processor',
      description: 'Write a program that reads a list of names from a text file, sorts them alphabetically using an ArrayList, and writes the sorted names to a new file. Handle all exceptions properly.',
      weekNum: 14,
      dueDate: '2027-01-04',
      department: 'all',
      tasks: ['Read from a file', 'Store data in an ArrayList', 'Sort the collection', 'Write to a new file', 'Use try-catch-finally for IO exceptions']
    }
  ]
};

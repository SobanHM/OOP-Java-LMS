export const LMS_DATA = {
  courseInfo: {
    title: 'Object-Oriented Programming',
    code: 'CS-201',
    language: 'Java',
    instructor: 'Soban Hussain',
    email: 'soban@uolrk.edu.pk',
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
  studentProfile: {
    name: 'Soban Hussain (Student Portal View)',
    rollNo: '2026-CS-042',
    department: 'Software Engineering',
    semester: '2nd Semester',
    enrollmentStatus: 'Enrolled',
    enrolledDate: '2026-09-15',
    attendanceRate: 94
  },
  attendanceRecords: [
    { date: '2026-09-15', topic: 'Course Intro & Java Environment', status: 'Present' },
    { date: '2026-09-17', topic: 'JDK vs JRE vs JVM Architecture', status: 'Present' },
    { date: '2026-09-19', topic: 'Primitive Types & Scanner Class', status: 'Present' },
    { date: '2026-09-22', topic: 'Control Flow & Conditionals', status: 'Present' },
    { date: '2026-09-24', topic: 'Loops & Pattern Generation', status: 'Absent' },
    { date: '2026-09-26', topic: '1D & 2D Array Traversal', status: 'Present' },
    { date: '2026-09-29', topic: 'String Methods & Immutability', status: 'Present' },
    { date: '2026-10-01', topic: 'Method Overloading Principles', status: 'Present' }
  ],
  examMarks: {
    midterm: { score: 88, maxScore: 100, weight: '30%', grade: 'A-' },
    labExam: { score: 92, maxScore: 100, weight: '20%', grade: 'A' },
    assignmentsAvg: { score: 95, maxScore: 100, weight: '20%', grade: 'A+' },
    quizzesAvg: { score: 90, maxScore: 100, weight: '10%', grade: 'A' },
    finalProject: { score: 94, maxScore: 100, weight: '20%', grade: 'A' },
    overallGpa: '3.85 / 4.0'
  },
  weeks: [
    {
      id: 1,
      weekNum: 1,
      title: 'Introduction to Java & OOP Concepts',
      objectives: [
        'Understand what Object-Oriented Programming is and why it matters',
        'Set up the Java Development Kit (JDK) and IDE (IntelliJ / Eclipse / VS Code)',
        'Understand JVM, JRE, and JDK architecture and compilation process',
        'Write, compile, and run your first "Hello World" Java program'
      ],
      topics: [
        'History and Philosophy of Java',
        'Procedural vs Object-Oriented Programming',
        'Java Virtual Machine (JVM) & Bytecode execution',
        'JDK, JRE, and Environment Setup',
        'Structure of a Java program (classes, main method)'
      ],
      resources: [
        { name: 'Week 1 Lecture Slides', path: 'Lecture-Presentation/OOP_Weeks_1.pptx', type: 'pptx' },
        { name: 'Weeks 1-2 Fundamentals Notes', path: 'Notes/oop_weeks_1_2_fundamental_Understanding.pdf', type: 'pdf' },
        { name: 'Course Outline (Designed by Instructor)', path: 'Outline/Outline_OOP-Designed_by_SobanHussain.docx', type: 'docx' }
      ],
      codeExamples: [
        {
          title: 'Hello World Program',
          language: 'java',
          code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Welcome to OOP in Java at The University of Larkano!");
        System.out.println("Instructor: Soban Hussain");
    }
}`,
          description: 'The standard entry point program demonstrating class declaration and main method execution.'
        }
      ],
      department: 'all'
    },
    {
      id: 2,
      weekNum: 2,
      title: 'Data Types, Variables, Operators & I/O',
      objectives: [
        'Declare and initialize primitive variables and String objects',
        'Apply arithmetic, relational, and logical operators correctly',
        'Read keyboard input from users using the Scanner class'
      ],
      topics: [
        'Primitive data types (int, double, char, boolean, byte, short, long, float)',
        'Literals, constants (final keyword), and type casting',
        'Operators: Arithmetic, Relational, Logical, Bitwise, Assignment',
        'Console output with System.out.printf and println',
        'Console input using java.util.Scanner'
      ],
      resources: [
        { name: 'Weeks 1-2 Fundamentals Notes', path: 'Notes/oop_weeks_1_2_fundamental_Understanding.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Scanner & Calculation Demo',
          language: 'java',
          code: `import java.util.Scanner;

public class UserInputDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Student Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter Quiz Score (0-100): ");
        double score = scanner.nextDouble();

        System.out.println("\\n--- Student Summary ---");
        System.out.println("Name: " + name);
        System.out.println("Score: " + score + "%");

        scanner.close();
    }
}`,
          description: 'Demonstrates importing Scanner, reading text and double input, and formatted console output.'
        }
      ],
      department: 'all'
    },
    {
      id: 3,
      weekNum: 3,
      title: 'Control Structures — Conditionals',
      objectives: [
        'Control execution flow using if, if-else, and nested conditional blocks',
        'Implement multi-branch decision structures using switch statements',
        'Use the ternary operator for concise conditional evaluation'
      ],
      topics: [
        'Boolean logic and conditional statements',
        'if, else-if ladder, and nested if blocks',
        'Switch statement with integer, char, and String cases',
        'Enhanced switch expressions (Java 14+)',
        'Ternary operator syntax and usage'
      ],
      resources: [
        { name: 'Beginner to Intermediate Guide', path: 'Lecture-Presentation/OOP_Beginner_to_Intermediate_Arrays_Methods_Classes.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Grade Calculator with Switch',
          language: 'java',
          code: `public class GradeCalculator {
    public static void main(String[] args) {
        int marks = 85;
        char grade;

        if (marks >= 90) grade = 'A';
        else if (marks >= 80) grade = 'B';
        else if (marks >= 70) grade = 'C';
        else grade = 'F';

        System.out.println("Marks: " + marks + " -> Grade: " + grade);

        switch (grade) {
            case 'A': System.out.println("Excellent performance!"); break;
            case 'B': System.out.println("Good job!"); break;
            case 'C': System.out.println("Satisfactory."); break;
            default:  System.out.println("Needs improvement."); break;
        }
    }
}`,
          description: 'Combines if-else ladder evaluation with switch-case messaging.'
        }
      ],
      department: 'all'
    },
    {
      id: 4,
      weekNum: 4,
      title: 'Control Structures — Loops',
      objectives: [
        'Iterate over data using for, while, and do-while loops',
        'Use break and continue statements for loop control flow',
        'Construct nested loops for multi-dimensional iterations'
      ],
      topics: [
        'while loop syntax and entry conditions',
        'do-while loop for guaranteed single execution',
        'Standard for loop construct',
        'Nested loops for grids and patterns',
        'Break and continue statements'
      ],
      resources: [
        { name: 'Beginner to Intermediate Guide', path: 'Lecture-Presentation/OOP_Beginner_to_Intermediate_Arrays_Methods_Classes.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Star Pattern Printing',
          language: 'java',
          code: `public class StarPattern {
    public static void main(String[] args) {
        int rows = 5;
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
          description: 'Nested loops generating a right-angled triangle pattern in console.'
        }
      ],
      department: 'all'
    },
    {
      id: 5,
      weekNum: 5,
      title: 'Arrays (1D & 2D)',
      objectives: [
        'Declare, allocate, and initialize 1-Dimensional and 2-Dimensional arrays',
        'Perform array traversal using loops and enhanced for-each loop',
        'Implement basic array search and sorting algorithms'
      ],
      topics: [
        'Array memory allocation and indexing',
        '1D arrays: creation, traversal, and bounds checking',
        'Enhanced for loop (for-each)',
        '2D arrays (matrices) and multidimensional arrays',
        'Linear search and Bubble Sort algorithm'
      ],
      resources: [
        { name: 'Arrays & Methods Lecture', path: 'Lecture-Presentation/arrays__methods_java_lecture.pptx', type: 'pptx' },
        { name: 'Arrays, Strings & Methods Guide', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Matrix Addition (2D Arrays)',
          language: 'java',
          code: `public class MatrixAddition {
    public static void main(String[] args) {
        int[][] a = { {1, 2}, {3, 4} };
        int[][] b = { {5, 6}, {7, 8} };
        int[][] sum = new int[2][2];

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                sum[i][j] = a[i][j] + b[i][j];
                System.out.print(sum[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
          description: '2D array creation and matrix element addition using nested loops.'
        }
      ],
      department: 'all'
    },
    {
      id: 6,
      weekNum: 6,
      title: 'Strings & String Methods',
      objectives: [
        'Understand String immutability in Java and the String Constant Pool',
        'Utilize essential String methods for text processing',
        'Use StringBuilder and StringBuffer for mutable text operations'
      ],
      topics: [
        'String class immutability',
        'String pool vs heap allocation',
        'Common methods: length, charAt, substring, indexOf, replace, toLowerCase',
        'String comparison: equals vs == operator',
        'StringBuilder class for string modification performance'
      ],
      resources: [
        { name: 'Arrays, Strings & Methods Guide', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Palindrome Checker',
          language: 'java',
          code: `public class PalindromeCheck {
    public static boolean isPalindrome(String str) {
        String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String reversed = new StringBuilder(cleaned).reverse().toString();
        return cleaned.equals(reversed);
    }

    public static void main(String[] args) {
        String word = "Racecar";
        System.out.println(word + " is palindrome? " + isPalindrome(word));
    }
}`,
          description: 'Cleans string using regex, reverses via StringBuilder, and compares equality.'
        }
      ],
      department: 'all'
    },
    {
      id: 7,
      weekNum: 7,
      title: 'Methods — Definition, Parameters & Overloading',
      objectives: [
        'Define reusable methods with appropriate return types and parameters',
        'Understand pass-by-value mechanism in Java',
        'Implement method overloading for compile-time polymorphism'
      ],
      topics: [
        'Method definition syntax and method signature',
        'Return types and void methods',
        'Parameters vs arguments',
        'Pass-by-value semantics',
        'Method overloading principles and rules'
      ],
      resources: [
        { name: 'Methods & Classes Slides', path: 'Lecture-Presentation/methods_classes__slides.pptx', type: 'pptx' },
        { name: 'Arrays, Strings & Methods Guide', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Method Overloading Calculator',
          language: 'java',
          code: `public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println("Sum int: " + add(10, 20));
        System.out.println("Sum double: " + add(5.5, 4.5));
        System.out.println("Sum 3 ints: " + add(1, 2, 3));
    }
}`,
          description: 'Three methods with the same name overloading parameter types and count.'
        }
      ],
      department: 'all'
    },
    {
      id: 8,
      weekNum: 8,
      title: 'Midterm Review & Practical Exam',
      objectives: [
        'Consolidate knowledge of Weeks 1 through 7',
        'Solve multi-concept practice problems under timed conditions',
        'Prepare for Midterm Assessment'
      ],
      topics: [
        'Comprehensive review of control structures, arrays, strings, and methods',
        'Code debugging techniques',
        'Practice exam problem solving'
      ],
      resources: [
        { name: 'Beginner to Intermediate Guide', path: 'Lecture-Presentation/OOP_Beginner_to_Intermediate_Arrays_Methods_Classes.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Midterm Sample Solution',
          language: 'java',
          code: `public class MidtermSample {
    public static void main(String[] args) {
        int[] scores = { 88, 92, 79, 95, 84 };
        int max = scores[0];
        int sum = 0;

        for (int s : scores) {
            if (s > max) max = s;
            sum += s;
        }

        double avg = (double) sum / scores.length;
        System.out.println("Highest Score: " + max);
        System.out.println("Average Score: " + avg);
    }
}`,
          description: 'Combines array iteration, accumulator variables, and type casting.'
        }
      ],
      department: 'all'
    },
    {
      id: 9,
      weekNum: 9,
      title: 'Classes & Objects — Fundamentals',
      objectives: [
        'Define custom classes with instance variables and instance methods',
        'Instantiate objects using the new keyword',
        'Understand encapsulation basics using private and public modifiers'
      ],
      topics: [
        'Classes as blueprints and objects as instances',
        'Instance variables (state) and instance methods (behavior)',
        'Object instantiation memory allocation',
        'Access modifiers (public, private, default)',
        'Getter and setter methods for encapsulation'
      ],
      resources: [
        { name: 'Methods & Classes Slides', path: 'Lecture-Presentation/methods_classes__slides.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Student Encapsulated Class',
          language: 'java',
          code: `public class Student {
    private String rollNumber;
    private String name;
    private double gpa;

    public Student(String rollNumber, String name, double gpa) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.gpa = gpa;
    }

    public String getName() { return name; }
    public double getGpa() { return gpa; }

    public void displayProfile() {
        System.out.println("Roll: " + rollNumber + " | Name: " + name + " | GPA: " + gpa);
    }
}`,
          description: 'Encapsulated class with private fields, constructor, getters, and display method.'
        }
      ],
      department: 'all'
    },
    {
      id: 10,
      weekNum: 10,
      title: 'Constructors, `this` Keyword & Static Members',
      objectives: [
        'Write default, parameterized, and copy constructors',
        'Use the this keyword to reference instance members and chain constructors',
        'Distinguish between static (class-level) and instance (object-level) members'
      ],
      topics: [
        'Constructor declaration rules',
        'Constructor overloading and `this(...)` constructor chaining',
        '`this` keyword for instance variable ambiguity resolution',
        'static fields and static methods',
        'Static initialization blocks'
      ],
      resources: [
        { name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Static Counter & Constructor Chaining',
          language: 'java',
          code: `public class CourseEnrollment {
    private static int totalStudents = 0;
    private String studentName;
    private String department;

    public CourseEnrollment(String studentName) {
        this(studentName, "General CS");
    }

    public CourseEnrollment(String studentName, String department) {
        this.studentName = studentName;
        this.department = department;
        totalStudents++;
    }

    public static int getTotalStudents() {
        return totalStudents;
    }
}`,
          description: 'Demonstrates static field counting total instances across constructor overloads.'
        }
      ],
      department: 'all'
    },
    {
      id: 11,
      weekNum: 11,
      title: 'Inheritance & `super` Keyword',
      objectives: [
        'Establish IS-A relationships between parent (superclass) and child (subclass)',
        'Extend classes using the extends keyword',
        'Use the super keyword to call superclass constructors and overridden methods'
      ],
      topics: [
        'Concept of Code Reuse through Inheritance',
        'Superclass vs Subclass',
        'The extends keyword',
        'Superclass constructor invocation using super()',
        'Types of inheritance supported in Java (Single, Multilevel, Hierarchical)'
      ],
      resources: [
        { name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Person -> Student Inheritance',
          language: 'java',
          code: `class Person {
    protected String name;
    protected int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    private String studentId;

    public Student(String name, int age, String studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    public void display() {
        System.out.println("Student: " + name + ", Age: " + age + ", ID: " + studentId);
    }
}`,
          description: 'Child class inherits name/age fields from superclass Person via super().'
        }
      ],
      department: 'all'
    },
    {
      id: 12,
      weekNum: 12,
      title: 'Polymorphism — Overloading vs Overriding',
      objectives: [
        'Understand Runtime Polymorphism (Dynamic Method Dispatch)',
        'Override superclass methods in subclasses using `@Override`',
        'Apply upcasting and downcasting safely with `instanceof`'
      ],
      topics: [
        'Compile-time vs Runtime Polymorphism',
        'Method Overriding requirements and `@Override` annotation',
        'Dynamic Method Dispatch mechanism',
        'Upcasting (Subclass to Superclass reference)',
        'The `instanceof` operator'
      ],
      resources: [
        { name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Polymorphic Shape Hierarchy',
          language: 'java',
          code: `class Shape {
    public void draw() {
        System.out.println("Drawing a generic shape");
    }
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a Circle with radius");
    }
}

class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a Rectangle with width & height");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Shape s1 = new Circle();
        Shape s2 = new Rectangle();
        s1.draw(); // Circle draw
        s2.draw(); // Rectangle draw
    }
}`,
          description: 'Superclass reference pointing to subclass objects, resolved dynamically at runtime.'
        }
      ],
      department: 'all'
    },
    {
      id: 13,
      weekNum: 13,
      title: 'Abstract Classes & Interfaces',
      objectives: [
        'Design abstract classes with abstract and concrete methods',
        'Define interfaces for total abstraction and contract specification',
        'Implement multiple interfaces in a single Java class'
      ],
      topics: [
        'Abstract class rules and abstract methods',
        'When to use Abstract Classes vs Interfaces',
        'Interface declaration (`interface` & `implements`)',
        'Default and static methods in interfaces (Java 8+)',
        'Multiple interface implementation'
      ],
      resources: [
        { name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Interface Implementation',
          language: 'java',
          code: `interface Drawable {
    void draw();
}

interface Printable {
    void printPaper();
}

class Report implements Drawable, Printable {
    public void draw() {
        System.out.println("Rendering graphical report...");
    }
    public void printPaper() {
        System.out.println("Printing physical paper copy...");
    }
}`,
          description: 'Class implementing two distinct interfaces, providing concrete definitions.'
        }
      ],
      department: 'all'
    },
    {
      id: 14,
      weekNum: 14,
      title: 'Exception Handling (`try-catch-finally`)',
      objectives: [
        'Catch and recover from runtime exceptions using try-catch blocks',
        'Use the finally block for resource cleanup',
        'Define custom exception classes extending Exception'
      ],
      topics: [
        'Throwable hierarchy: Error vs Exception',
        'Checked vs Unchecked Exceptions',
        'try, catch, and finally blocks',
        'throw and throws keywords',
        'Creating Custom Exception classes'
      ],
      resources: [
        { name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'Custom Exception Demo',
          language: 'java',
          code: `class InvalidAgeException extends Exception {
    public InvalidAgeException(String msg) {
        super(msg);
    }
}

public class ExceptionDemo {
    public static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) throw new InvalidAgeException("Student must be at least 18 years old.");
        System.out.println("Registration successful!");
    }

    public static void main(String[] args) {
        try {
            checkAge(16);
        } catch (InvalidAgeException e) {
            System.err.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Registration process completed.");
        }
    }
}`,
          description: 'Custom exception class declaration with throw, throws, try, catch, and finally.'
        }
      ],
      department: 'all'
    },
    {
      id: 15,
      weekNum: 15,
      title: 'File I/O & Java Collections Overview',
      objectives: [
        'Read and write text files using FileReader, FileWriter, and Scanner',
        'Understand the Java Collections Framework architecture',
        'Use ArrayList and HashMap for dynamic data management'
      ],
      topics: [
        'File class and File I/O streams',
        'Reading files with Scanner and BufferedReader',
        'Writing files with PrintWriter / FileWriter',
        'Java Collections Framework hierarchy',
        'ArrayList vs Array, and HashMap key-value pairs'
      ],
      resources: [
        { name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx' }
      ],
      codeExamples: [
        {
          title: 'ArrayList & HashMap Usage',
          language: 'java',
          code: `import java.util.ArrayList;
import java.util.HashMap;

public class CollectionsDemo {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        students.add("Soban");
        students.add("Ali");
        students.add("Sara");

        HashMap<String, Integer> grades = new HashMap<>();
        grades.put("Soban", 95);
        grades.put("Ali", 88);

        System.out.println("Students: " + students);
        System.out.println("Soban's Grade: " + grades.get("Soban"));
    }
}`,
          description: 'Dynamic sizing with ArrayList and key-value mapping using HashMap.'
        }
      ],
      department: 'all'
    },
    {
      id: 16,
      weekNum: 16,
      title: 'Final Review & Capstone Project Presentation',
      objectives: [
        'Synthesize all OOP pillars (Encapsulation, Inheritance, Polymorphism, Abstraction)',
        'Present complete semester projects (Mini Library / Bank / LMS)',
        'Final Exam Preparation'
      ],
      topics: [
        'Full Course Synthesis and Design Patterns',
        'Object-Oriented Design Best Practices',
        'Final Examination Review'
      ],
      resources: [
        { name: 'Absolute Java Textbook (Pearson)', path: 'Book/Absolute_Java-by-Walter_Savitch-Global_Edition-Pearson.pdf', type: 'pdf' }
      ],
      codeExamples: [
        {
          title: 'Mini Library Management System',
          language: 'java',
          code: `abstract class Item {
    protected String title;
    protected boolean isCheckedOut;

    public Item(String title) {
        this.title = title;
        this.isCheckedOut = false;
    }

    public abstract void displayDetails();
}

class Book extends Item {
    private String author;

    public Book(String title, String author) {
        super(title);
        this.author = author;
    }

    @Override
    public void displayDetails() {
        System.out.println("Book: " + title + " by " + author + " [Available: " + !isCheckedOut + "]");
    }
}`,
          description: 'Capstone snippet combining abstract classes, inheritance, encapsulation, and polymorphism.'
        }
      ],
      department: 'all'
    }
  ],
  resources: [
    { id: 1, name: 'Absolute Java - Walter Savitch (Global Edition)', path: 'Book/Absolute_Java-by-Walter_Savitch-Global_Edition-Pearson.pdf', type: 'pdf', category: 'book', size: '7.4 MB', icon: '📚' },
    { id: 2, name: 'Week 1 - Introduction to OOP Slides', path: 'Lecture-Presentation/OOP_Weeks_1.pptx', type: 'pptx', category: 'lecture', size: '67 KB', icon: '📊' },
    { id: 3, name: 'Arrays & Methods Lecture Slides', path: 'Lecture-Presentation/arrays__methods_java_lecture.pptx', type: 'pptx', category: 'lecture', size: '67 KB', icon: '📊' },
    { id: 4, name: 'Methods & Classes Slides', path: 'Lecture-Presentation/methods_classes__slides.pptx', type: 'pptx', category: 'lecture', size: '78 KB', icon: '📊' },
    { id: 5, name: 'Beginner to Intermediate Guide', path: 'Lecture-Presentation/OOP_Beginner_to_Intermediate_Arrays_Methods_Classes.pptx', type: 'pptx', category: 'lecture', size: '98 KB', icon: '📊' },
    { id: 6, name: 'Lab Implementation Understanding', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', type: 'pptx', category: 'lecture', size: '79 KB', icon: '📊' },
    { id: 7, name: 'Weeks 1-2 Fundamentals Notes', path: 'Notes/oop_weeks_1_2_fundamental_Understanding.pdf', type: 'pdf', category: 'note', size: '240 KB', icon: '📝' },
    { id: 8, name: 'Arrays, Strings & Methods Guide', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf', category: 'note', size: '195 KB', icon: '📝' },
    { id: 9, name: 'Official Course Outline (SWE & AI)', path: 'Outline/OOP-Outline_(SWE and AI - 2nd Sem)-Official.pdf', type: 'pdf', category: 'outline', size: '268 KB', icon: '📋' },
    { id: 10, name: 'Course Outline (Designed by Instructor)', path: 'Outline/Outline_OOP-Designed_by_SobanHussain.docx', type: 'docx', category: 'outline', size: '44 KB', icon: '📋' },
    { id: 11, name: 'OOP Java Official Lab Manual & Exercises', path: 'Notes/java_arrays_strings_methods_guide.pdf', type: 'pdf', category: 'lab', size: '310 KB', icon: '🧪' }
  ],
  announcements: [
    {
      id: 1,
      title: 'Welcome to OOP (Java) CS-201!',
      content: 'Welcome students of AI & SWE departments to the Fall 2026 semester at The University of Larkano. Please download the syllabus and textbook from the resource center.',
      date: '2026-09-15',
      department: 'all',
      priority: 'normal'
    },
    {
      id: 2,
      title: 'Lab Environment Setup Notice',
      content: 'All students are required to install JDK 17+ and IntelliJ IDEA / Eclipse prior to Week 2 lab session.',
      date: '2026-09-18',
      department: 'all',
      priority: 'important'
    },
    {
      id: 3,
      title: 'AI Department — Neural Net OOP Project Overview',
      content: 'AI department students will receive an additional optional module on building a custom Neural Network Matrix class using Java 2D arrays.',
      date: '2026-09-25',
      department: 'ai',
      priority: 'normal'
    },
    {
      id: 4,
      title: 'SWE Department — Software Architecture Lab',
      content: 'SWE department students will focus heavily on UML Class Diagrams and Design Patterns in Weeks 11-13.',
      date: '2026-09-25',
      department: 'swe',
      priority: 'normal'
    },
    {
      id: 5,
      title: 'Midterm Examination Schedule Released',
      content: 'Midterm examination will take place during Week 8. The exam will cover Weeks 1 to 7 including live coding in Java.',
      date: '2026-10-15',
      department: 'all',
      priority: 'urgent'
    }
  ],
  assignments: [
    {
      id: 1,
      title: 'Assignment 1: Java Console Calculator',
      description: 'Create a program using Scanner that performs addition, subtraction, multiplication, and division with error handling for division by zero.',
      weekNum: 2,
      dueDate: '2026-09-28',
      department: 'all',
      tasks: [
        'Prompt user for two numbers',
        'Display operation menu (+, -, *, /)',
        'Validate division by zero with conditional statements',
        'Print formatted output'
      ]
    },
    {
      id: 2,
      title: 'Assignment 2: Student Marks & Pattern Generator',
      description: 'Implement a nested loop star pattern generator and a student marks processing program using control structures.',
      weekNum: 4,
      dueDate: '2026-10-12',
      department: 'all',
      tasks: [
        'Print pyramid and inverted triangle patterns using nested for loops',
        'Calculate average score of 5 subjects',
        'Assign letter grades based on evaluation scale'
      ]
    },
    {
      id: 3,
      title: 'Assignment 3: Matrix Operations & String Processor',
      description: 'Develop a 2D array matrix multiplier and a string palindrome/anagram verification tool.',
      weekNum: 6,
      dueDate: '2026-10-26',
      department: 'all',
      tasks: [
        'Write matrix multiplication for 3x3 matrices',
        'Implement string reversal without using built-in reverse()',
        'Count vowels, consonants, and digits in user input string'
      ]
    },
    {
      id: 4,
      title: 'Assignment 4: Utility Method Library',
      description: 'Construct a reusable utility class containing overloaded static methods for math, array sorting, and string manipulation.',
      weekNum: 7,
      dueDate: '2026-11-09',
      department: 'all',
      tasks: [
        'Implement overloaded min() and max() methods',
        'Implement binary search method for sorted arrays',
        'Write recursive factorial function'
      ]
    },
    {
      id: 5,
      title: 'Assignment 5: Encapsulated Bank Account System',
      description: 'Design a BankAccount class with private fields, balance validation, deposit/withdraw methods, and static account counter.',
      weekNum: 10,
      dueDate: '2026-11-23',
      department: 'all',
      tasks: [
        'Create private attributes: accountNumber, accountHolder, balance',
        'Ensure negative deposits and excessive withdrawals are rejected',
        'Track total active accounts with a static counter'
      ]
    },
    {
      id: 6,
      title: 'Assignment 6: Polymorphic Employee Payroll',
      description: 'Build an Employee superclass with FullTimeEmployee and PartTimeEmployee subclasses demonstrating method overriding.',
      weekNum: 12,
      dueDate: '2026-12-07',
      department: 'all',
      tasks: [
        'Define calculateSalary() in superclass',
        'Override calculateSalary() in FullTime (fixed + bonus) and PartTime (hours * rate)',
        'Demonstrate dynamic method dispatch in main()'
      ]
    },
    {
      id: 7,
      title: 'Assignment 7: Exception-Safe File Logger',
      description: 'Create a logging class that writes student attendance records to a text file with try-catch-finally exception handling.',
      weekNum: 14,
      dueDate: '2026-12-21',
      department: 'all',
      tasks: [
        'Prompt user for student details',
        'Append log entries to attendance.txt file using FileWriter',
        'Handle IOException and FileNotFoundException cleanly'
      ]
    },
    {
      id: 8,
      title: 'Assignment 8: AI / SWE Capstone Mini Project',
      description: 'Build a complete object-oriented mini application using inheritance, interfaces, exception handling, and ArrayLists.',
      weekNum: 16,
      dueDate: '2027-01-10',
      department: 'all',
      tasks: [
        'Implement complete class hierarchy with at least 1 interface',
        'Use ArrayList<T> for dynamic object storage',
        'Save and load records to/from local text files'
      ]
    }
  ],
  quizzes: [
    {
      id: 1,
      weekNum: 2,
      title: 'Quiz 1: Java Basics & Syntax',
      questions: [
        {
          question: 'Which component of Java converts bytecode into machine-specific instructions?',
          options: ['JDK', 'JRE', 'JVM', 'Compiler'],
          correctIndex: 2,
          explanation: 'The JVM (Java Virtual Machine) executes bytecode line-by-line and translates it into native machine code.'
        },
        {
          question: 'What is the default initial value of an uninitialized int field in a Java class?',
          options: ['0', '1', 'null', 'undefined'],
          correctIndex: 0,
          explanation: 'In Java, numeric instance variables automatically default to 0.'
        },
        {
          question: 'Which primitive data type consumes 64 bits (8 bytes) of memory?',
          options: ['int', 'float', 'double', 'short'],
          correctIndex: 2,
          explanation: 'The double data type is a double-precision 64-bit IEEE 754 floating point number.'
        },
        {
          question: 'What is the correct syntax to create a Scanner instance for console reading?',
          options: ['Scanner sc = new Scanner(System.in);', 'Scanner sc = Scanner.open();', 'Scanner sc = new Scanner(Console.read);', 'Scanner sc = System.in.getScanner();'],
          correctIndex: 0,
          explanation: 'java.util.Scanner requires System.in as its InputStream parameter.'
        },
        {
          question: 'Which of the following is NOT a valid Java identifier?',
          options: ['_studentMark', '$amount', '2ndSemester', 'finalValue'],
          correctIndex: 2,
          explanation: 'Java identifiers cannot begin with a number (e.g. 2ndSemester).'
        }
      ]
    },
    {
      id: 2,
      weekNum: 4,
      title: 'Quiz 2: Control Structures & Loops',
      questions: [
        {
          question: 'Which loop construct guarantees that its body will execute AT LEAST once?',
          options: ['for loop', 'while loop', 'do-while loop', 'for-each loop'],
          correctIndex: 2,
          explanation: 'The do-while loop evaluates its conditional check at the end of the iteration block.'
        },
        {
          question: 'What does the `break` statement do inside a nested loop structure?',
          options: ['Terminates all enclosing loops', 'Exits only the innermost loop', 'Skips the current iteration', 'Restarts the loop from index 0'],
          correctIndex: 1,
          explanation: 'A break statement exits immediately from the innermost enclosing loop construct.'
        },
        {
          question: 'What is the output of `(5 > 3) ? "Yes" : "No"`?',
          options: ['Yes', 'No', 'true', 'false'],
          correctIndex: 0,
          explanation: 'Since 5 > 3 evaluates to true, the ternary operator yields the first expression ("Yes").'
        },
        {
          question: 'Which variable types can be evaluated in a standard Java switch statement?',
          options: ['only double and float', 'byte, short, char, int, String, and Enums', 'boolean and double', 'Arrays only'],
          correctIndex: 1,
          explanation: 'Java supports discrete integral primitives (byte, short, char, int), Wrapper types, String, and Enum types in switch.'
        },
        {
          question: 'What happens if a `case` block in a switch statement does NOT end with a `break`?',
          options: ['Syntax Error', 'Fall-through to subsequent cases', 'Infinite Loop', 'Program terminates'],
          correctIndex: 1,
          explanation: 'Without a break statement, execution continues (falls through) into subsequent case blocks regardless of their labels.'
        }
      ]
    },
    {
      id: 3,
      weekNum: 6,
      title: 'Quiz 3: Arrays & Strings',
      questions: [
        {
          question: 'What exception is thrown when attempting to access `array[5]` on an array of length 5?',
          options: ['NullPointerException', 'ArrayIndexOutOfBoundsException', 'IllegalArgumentException', 'ArraySizeException'],
          correctIndex: 1,
          explanation: 'Java arrays are 0-indexed (0 to length - 1), so index 5 on a size 5 array throws ArrayIndexOutOfBoundsException.'
        },
        {
          question: 'Why are String objects considered "immutable" in Java?',
          options: ['They cannot be assigned to another variable', 'Their character contents cannot be modified after creation', 'They can only contain ASCII characters', 'They are stored on the call stack'],
          correctIndex: 1,
          explanation: 'String immutability means any string modification creates a brand new String object in memory.'
        },
        {
          question: 'Which method returns the number of characters in a String object?',
          options: ['length()', 'size()', 'count()', 'dimension()'],
          correctIndex: 0,
          explanation: 'The length() method returns the character count of a String instance.'
        },
        {
          question: 'How do you check if two String variables (str1 and str2) contain the exact same text?',
          options: ['str1 == str2', 'str1.equals(str2)', 'str1.same(str2)', 'str1.compare(str2)'],
          correctIndex: 1,
          explanation: 'equals() compares actual text contents, whereas == compares memory reference addresses.'
        },
        {
          question: 'Which class should be used when frequent string modifications (appends/deletions) are needed in a single thread?',
          options: ['String', 'StringBuilder', 'CharBuffer', 'TextFormatter'],
          correctIndex: 1,
          explanation: 'StringBuilder provides mutable sequence of characters without allocating new objects on every append.'
        }
      ]
    },
    {
      id: 4,
      weekNum: 10,
      title: 'Quiz 4: Methods, Classes & Static Members',
      questions: [
        {
          question: 'What is the primary function of a Constructor in Java?',
          options: ['To destroy unneeded objects', 'To initialize new instances of a class', 'To static-allocate memory', 'To call superclass methods'],
          correctIndex: 1,
          explanation: 'Constructors are special methods invoked during object instantiation (via `new`) to initialize object state.'
        },
        {
          question: 'What does the `this` keyword refer to inside an instance method?',
          options: ['The parent class', 'The current object instance', 'The static class context', 'The main method'],
          correctIndex: 1,
          explanation: '`this` is a reference to the current object whose method or constructor is being called.'
        },
        {
          question: 'What happens if you declare a variable as `static` inside a class?',
          options: ['Every object receives its own independent copy', 'Single shared copy exists across all instances of the class', 'The variable cannot be changed', 'The variable is destroyed when the method exits'],
          correctIndex: 1,
          explanation: 'Static variables belong to the class itself, sharing one common memory location across all object instances.'
        },
        {
          question: 'Can a constructor have a return type specified (e.g. `public void Student()`)?',
          options: ['Yes', 'No, specifying a return type turns it into a regular method', 'Only static constructors', 'Only abstract constructors'],
          correctIndex: 1,
          explanation: 'Constructors have NO return type. Adding `void` converts it into a normal instance method.'
        },
        {
          question: 'What is Method Overloading?',
          options: ['Multiple methods in the same class with the same name but different parameters', 'Overriding a method from a superclass', 'Calling a method from another package', 'Creating an abstract method'],
          correctIndex: 0,
          explanation: 'Overloading allows multiple methods in the same class to share a name provided their parameter list differs.'
        }
      ]
    },
    {
      id: 5,
      weekNum: 13,
      title: 'Quiz 5: Inheritance, Polymorphism & OOP Pillars',
      questions: [
        {
          question: 'Which keyword is used by a Java child class to inherit from a parent class?',
          options: ['implements', 'extends', 'inherits', 'super'],
          correctIndex: 1,
          explanation: 'The `extends` keyword establishes an inheritance relationship between child and parent classes.'
        },
        {
          question: 'What is Method Overriding?',
          options: ['Defining multiple methods in the same class with different parameters', 'Redefining a superclass method in a subclass with the EXACT same signature', 'Deleting a method from memory', 'Hiding a private variable'],
          correctIndex: 1,
          explanation: 'Method Overriding allows a subclass to provide a specific implementation of a method declared in its superclass.'
        },
        {
          question: 'Can an Abstract Class be directly instantiated using the `new` keyword?',
          options: ['Yes, always', 'No, abstract classes cannot be instantiated directly', 'Only if it has no abstract methods', 'Only inside the main method'],
          correctIndex: 1,
          explanation: 'Abstract classes are incomplete blueprints; they must be extended by concrete subclasses to instantiate objects.'
        },
        {
          question: 'Which of the following describes an Interface in Java?',
          options: ['A class with only static variables', 'A reference type that defines a contract of methods a class must implement', 'A concrete object holder', 'A graphical user interface component'],
          correctIndex: 1,
          explanation: 'An interface specifies behavior contracts that implementing classes must define.'
        },
        {
          question: 'What is Dynamic Method Dispatch?',
          options: ['Resolving overloaded methods at compile time', 'Resolving overridden methods at runtime based on the actual object type', 'Loading classes dynamically over the network', 'Automated garbage collection'],
          correctIndex: 1,
          explanation: 'Dynamic Method Dispatch is the mechanism by which a call to an overridden method is resolved at runtime.'
        }
      ]
    }
  ]
};

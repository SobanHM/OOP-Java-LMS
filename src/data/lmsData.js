export const LMS_DATA = {
  courseInfo: {
    title: 'Object-Oriented Programming',
    code: 'CS-201',
    language: 'Java (JDK 17+)',
    instructor: 'Soban Hussain',
    email: 'soban@uolrk.edu.pk',
    photoUrl: '/instructor.jpg',
    university: 'The University of Larkano',
    department: 'Department of Computer Science & Software Engineering',
    semester: 'Fall 2026',
    schedule: 'Monday / Wednesday / Friday — 10:00 AM to 11:30 AM',
    credits: 3,
    totalWeeks: 16,
    textbook: 'Absolute Java by Walter Savitch (Global Edition, Pearson)'
  },
  students: [
    {
      id: '2026-CS-042',
      name: 'Soban Hussain (Student View)',
      rollNo: '2026-CS-042',
      email: 'soban.student@uolrk.edu.pk',
      department: 'Software Engineering',
      track: 'swe',
      enrolledDate: '2026-09-15',
      attendance: [
        { date: '2026-09-15', topic: 'Course Intro & JDK Setup', status: 'Present' },
        { date: '2026-09-17', topic: 'JVM Architecture & Bytecode', status: 'Present' },
        { date: '2026-09-19', topic: 'Primitive Types & Scanner', status: 'Present' },
        { date: '2026-09-22', topic: 'Control Flow & Conditionals', status: 'Present' },
        { date: '2026-09-24', topic: 'Nested Loops & Star Patterns', status: 'Absent' },
        { date: '2026-09-26', topic: '1D & 2D Arrays', status: 'Present' },
        { date: '2026-09-29', topic: 'String Methods & Immutability', status: 'Present' },
        { date: '2026-10-01', topic: 'Method Overloading', status: 'Present' }
      ],
      marks: {
        quiz1: 10, // out of 10
        quiz2: 9,  // out of 10
        quiz3: 8,  // out of 10
        quiz4: 10, // out of 10
        quiz5: 9,  // out of 10
        midExam: 27, // out of 30
        labExam: 18, // out of 20
        projectMarks: 19, // out of 20
        finalExam: 36, // out of 40
        totalMarks: 91, // out of 100
        grade: 'A+',
        gpa: '4.00'
      }
    },
    {
      id: '2026-AI-014',
      name: 'Ali Raza',
      rollNo: '2026-AI-014',
      email: 'ali.raza@uolrk.edu.pk',
      department: 'Artificial Intelligence',
      track: 'ai',
      enrolledDate: '2026-09-16',
      attendance: [
        { date: '2026-09-15', topic: 'Course Intro & JDK Setup', status: 'Present' },
        { date: '2026-09-17', topic: 'JVM Architecture & Bytecode', status: 'Present' },
        { date: '2026-09-19', topic: 'Primitive Types & Scanner', status: 'Present' },
        { date: '2026-09-22', topic: 'Control Flow & Conditionals', status: 'Present' },
        { date: '2026-09-24', topic: 'Nested Loops & Star Patterns', status: 'Present' }
      ],
      marks: {
        quiz1: 8,
        quiz2: 8,
        quiz3: 9,
        quiz4: 7,
        quiz5: 8,
        midExam: 24,
        labExam: 16,
        projectMarks: 17,
        finalExam: 32,
        totalMarks: 82,
        grade: 'A-',
        gpa: '3.67'
      }
    },
    {
      id: '2026-SWE-088',
      name: 'Sara Khan',
      rollNo: '2026-SWE-088',
      email: 'sara.khan@uolrk.edu.pk',
      department: 'Software Engineering',
      track: 'swe',
      enrolledDate: '2026-09-16',
      attendance: [
        { date: '2026-09-15', topic: 'Course Intro & JDK Setup', status: 'Present' },
        { date: '2026-09-17', topic: 'JVM Architecture & Bytecode', status: 'Present' },
        { date: '2026-09-19', topic: 'Primitive Types & Scanner', status: 'Present' }
      ],
      marks: {
        quiz1: 9,
        quiz2: 10,
        quiz3: 10,
        quiz4: 9,
        quiz5: 10,
        midExam: 28,
        labExam: 19,
        projectMarks: 20,
        finalExam: 38,
        totalMarks: 95,
        grade: 'A+',
        gpa: '4.00'
      }
    }
  ],
  announcements: [
    {
      id: 1,
      title: '📢 iCoMET 2026 Research Update & Welcome to CS-201!',
      content: 'Welcome students of AI & SWE departments! Instructor Soban Hussain presented key computing research at iCoMET 2026. Please check course outlines and lecture slides.',
      date: '2026-09-25',
      department: 'all',
      priority: 'urgent',
      isNew: true
    },
    {
      id: 2,
      title: '⚡ JDK 17+ and IntelliJ IDEA Setup Required',
      content: 'All enrolled students must install JDK 17+ and IntelliJ IDEA before Week 2 lab sessions.',
      date: '2026-09-20',
      department: 'all',
      priority: 'important',
      isNew: false
    }
  ],
  lectures: [
    { id: 1, weekNum: 1, title: 'Week 1: Introduction to OOP & Java JDK Setup', path: 'Lecture-Presentation/OOP_Weeks_1.pptx', size: '67 KB', type: 'pptx' },
    { id: 2, weekNum: 5, title: 'Week 5: 1D & 2D Arrays in Java', path: 'Lecture-Presentation/arrays__methods_java_lecture.pptx', size: '67 KB', type: 'pptx' },
    { id: 3, weekNum: 7, title: 'Week 7: Methods, Parameters & Overloading', path: 'Lecture-Presentation/methods_classes__slides.pptx', size: '78 KB', type: 'pptx' },
    { id: 4, weekNum: 8, title: 'Week 8: Beginner to Intermediate Arrays & Methods', path: 'Lecture-Presentation/OOP_Beginner_to_Intermediate_Arrays_Methods_Classes.pptx', size: '98 KB', type: 'pptx' },
    { id: 5, weekNum: 10, title: 'Week 10: OOP Lab Implementation & Constructors', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', size: '79 KB', type: 'pptx' }
  ],
  notes: [
    { id: 1, title: 'Weeks 1-2 Fundamentals Study Guide', path: 'Notes/oop_weeks_1_2_fundamental_Understanding.pdf', size: '240 KB', type: 'pdf' },
    { id: 2, title: 'Arrays, Strings & Methods Comprehensive Notes', path: 'Notes/java_arrays_strings_methods_guide.pdf', size: '195 KB', type: 'pdf' }
  ],
  courseInfoDocs: [
    { id: 1, title: 'Absolute Java by Walter Savitch (Textbook PDF)', path: 'Book/Absolute_Java-by-Walter_Savitch-Global_Edition-Pearson.pdf', size: '7.4 MB', type: 'pdf', cat: 'book' },
    { id: 2, title: 'Official Course Outline (SWE & AI Departments)', path: 'Outline/OOP-Outline_(SWE and AI - 2nd Sem)-Official.pdf', size: '268 KB', type: 'pdf', cat: 'outline' },
    { id: 3, title: 'Course Outline (Instructor Soban Hussain)', path: 'Outline/Outline_OOP-Designed_by_SobanHussain.docx', size: '44 KB', type: 'docx', cat: 'outline' }
  ],
  labs: [
    { id: 1, weekNum: 2, title: 'Lab 1: Scanner Console I/O Exercises', path: 'Notes/java_arrays_strings_methods_guide.pdf', size: '210 KB', type: 'pdf' },
    { id: 2, weekNum: 5, title: 'Lab 2: 2D Matrix Addition & Multi-dimensional Arrays', path: 'Notes/java_arrays_strings_methods_guide.pdf', size: '190 KB', type: 'pdf' },
    { id: 3, weekNum: 10, title: 'Lab 3: Encapsulation & Class Blueprint Design', path: 'Lecture-Presentation/OOP_Lab_Implementation_Understanding.pptx', size: '79 KB', type: 'pptx' }
  ],
  assignments: [
    {
      id: 1,
      title: 'Assignment 1: Java Console Calculator',
      description: 'Implement a console calculator using Scanner that handles division by zero error validation.',
      weekNum: 2,
      dueDate: '2026-09-28',
      type: 'assignment',
      maxScore: 100
    },
    {
      id: 2,
      title: 'Assignment 2: Star Pattern & Marks Generator',
      description: 'Build a nested for loop pattern printer and student grade evaluator.',
      weekNum: 4,
      dueDate: '2026-10-12',
      type: 'assignment',
      maxScore: 100
    },
    {
      id: 3,
      title: 'Term Project: Mini Library Management System',
      description: 'Capstone team/individual project implementing inheritance, polymorphism, abstract classes, and file I/O.',
      weekNum: 14,
      dueDate: '2026-12-20',
      type: 'project',
      maxScore: 100
    }
  ]
};

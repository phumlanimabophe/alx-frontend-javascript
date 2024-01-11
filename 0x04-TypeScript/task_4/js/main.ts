// task_4/js/main.ts

/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

// Create instances for Cpp, Java, and React subjects
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Create a Teacher object with experience in teaching C
export const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

// Log details for Cpp subject
console.log("C++");
cpp.setTeacher = cTeacher;
console.log("Requirements:", cpp.getRequirements());
console.log("Available Teacher:", cpp.getAvailableTeacher());

// Log details for Java subject
console.log("Java");
java.setTeacher = cTeacher;
console.log("Requirements:", java.getRequirements());
console.log("Available Teacher:", java.getAvailableTeacher());

// Log details for React subject
console.log("React");
react.setTeacher = cTeacher;
console.log("Requirements:", react.getRequirements());
console.log("Available Teacher:", react.getAvailableTeacher());

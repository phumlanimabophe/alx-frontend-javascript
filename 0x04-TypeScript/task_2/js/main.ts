// main.ts

// Define the Teacher interface with specific attributes and constraints
interface Teacher {
  readonly firstName: string;        // First name is readonly
  readonly lastName: string;         // Last name is readonly
  fullTimeEmployee: boolean;         // Full-time employment status
  yearsOfExperience?: number;        // Years of experience (optional)
  location: string;                  // Location of the teacher
  [propName: string]: any;           // Allow any additional attributes
}

// Example object adhering to the Teacher interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,                   // Additional attribute without specifying the name
};

console.log(teacher3);

// Interface extending the Teacher interface to represent Directors
interface Directors extends Teacher {
  numberOfReports: number;           // Additional attribute specific to Directors
}

// Example object adhering to the Directors interface
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define a function type for printing a teacher's name in a specific format
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function
export const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// Define interfaces for creating and interacting with student objects
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of a class representing a student
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  // Constructor for initializing a student object
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method for simulating the student working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method for getting the student's display name
  displayName(): string {
    return this.firstName;
  }
}

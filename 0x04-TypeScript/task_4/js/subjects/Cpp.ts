// task_4/js/subjects/Cpp.ts
namespace Subjects {
  // Extend the Teacher interface with experience in teaching C
  export interface Teacher {
    // Optional attribute indicating experience in teaching C
    experienceTeachingC?: number;
  }

  // Implement the Cpp class, a specialized Subject
  export class Cpp extends Subject {
    // Method to retrieve Cpp-specific requirements
    getRequirements(): string {
      return "Here is the list of requirements for C++";
    }

    // Method to check for an available teacher for Cpp
    getAvailableTeacher(): string {
      // If the teacher lacks experience in teaching C, indicate unavailability
      if (!this.teacher.experienceTeachingC) {
        return "No available teacher for C++";
      }
      // Otherwise, provide the available teacher's name
      return `Available Teacher for C++: ${this.teacher.firstName}`;
    }
  }
}

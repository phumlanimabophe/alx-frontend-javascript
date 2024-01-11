// task_4/js/subjects/React.ts
namespace Subjects {
  // Extend the Teacher interface with experience in teaching React
  export interface Teacher {
    // Optional attribute indicating experience in teaching React
    experienceTeachingReact?: number;
  }

  // Implement the React class, a specialized Subject
  export class React extends Subject {
    // Method to retrieve React-specific requirements
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Method to check for an available teacher for React
    getAvailableTeacher(): string {
      // If the teacher lacks experience in teaching React, indicate unavailability
      if (!this.teacher.experienceTeachingReact) {
        return "No available teacher for React";
      }
      // Otherwise, provide the available teacher's name
      return `Available Teacher for React: ${this.teacher.firstName}`;
    }
  }
}
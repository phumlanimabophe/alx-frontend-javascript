// task_4/js/subjects/Subject.ts
namespace Subjects {
  // Define the base Subject class to encapsulate common behavior
  export class Subject {
    // Attribute to store the assigned teacher
    teacher: Teacher;

    // Setter method to assign a teacher to the subject
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
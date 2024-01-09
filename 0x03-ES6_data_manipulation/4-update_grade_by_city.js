/*
  Function: updateStudentGradeByCity
  Description: This function updates the grades of students in a particular city based on provided new grades.
  Parameters:
    - students: Array of student objects
    - city: String representing the city for filtering students
    - newGrades: Array of objects containing new grades with studentId and grade properties
  Returns:
    - An array containing updated student objects with grades updated or 'N/A' if no new grade is found
*/
function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city); // Filter students by city
  return studentsInCity.map((student) => {
      const filteredGrades = newGrades.filter((grade) => grade.studentId === student.id); // Filter grades for the student
      if (filteredGrades.length > 0) {
          return {
              ...student,
              grade: filteredGrades[0].grade, // Update student's grade if found in newGrades
          };
      }
      return {
          ...student,
          grade: 'N/A', // Assign 'N/A' if no new grade is found for the student
      };
  });
}

export default updateStudentGradeByCity; // Exporting the updateStudentGradeByCity function

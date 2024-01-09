/*
  Function: getStudentsByLocation
  Description: Filters the list of students based on a specific city/location.
  Parameters:
    - students: Array of student objects
    - city: String representing the city/location to filter by
  Returns:
    - An array containing students from the specified city
*/
function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city); // Filter students by the given city
}

export default getStudentsByLocation; // Exporting the getStudentsByLocation function

/*
  Function: getListStudentIds
  Description: This function accepts a list of students and retrieves an array containing only their IDs.
*/
const getListStudentIds = (listStudents) => {
  let listStudentIds = [];

  /*
    Check if the input is an array.
    If it's not an array, return an empty array.
  */
  if (!(listStudents instanceof Array)) {
    return listStudentIds;
  }

  /*
    Extracts IDs of students using the map function
    and stores them in the listStudentIds array.
  */
  listStudentIds = listStudents.map((student) => student.id);

  return listStudentIds; // Return the array of student IDs
};

export default getListStudentIds; // Exporting the getListStudentIds function

// This function calculates the sum of student IDs in an array of student objects.
const getStudentIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);

export default getStudentIdsSum; // Exporting the getStudentIdsSum function

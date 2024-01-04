// Represents a HolbertonClass with year and location properties
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  // Retrieves the year of the HolbertonClass
  get year() {
    return this._year;
  }

  // Retrieves the location of the HolbertonClass
  get location() {
    return this._location;
  }
}

// Creates instances of HolbertonClass for different years and locations
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Represents a StudentHolberton with first name, last name, and associated HolbertonClass
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Retrieves the full name of the student
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Retrieves the associated HolbertonClass of the student
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Retrieves the full description of the student including name, year, and location
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Creates instances of StudentHolberton with different student details and associated HolbertonClass
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Forms a list of StudentHolberton instances
const listOfStudents = [student1, student2, student3, student4, student5];

// Exports the list of students as the default export
export default listOfStudents;

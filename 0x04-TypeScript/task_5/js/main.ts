// task_5/js/main.ts

// Define the interface for MajorCredits
interface MajorCredits {
  // Number of credits for major subjects
  credit: number;
  // Brand property to uniquely identify MajorCredits
  _brand: "Major";
}

// Define the interface for MinorCredits
interface MinorCredits {
  // Number of credits for minor subjects
  credit: number;
  // Brand property to uniquely identify MinorCredits
  _brand: "Minor";
}

// Function to sum credits for major subjects
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  // Calculate the sum of credits for major subjects
  const sum = subject1.credit + subject2.credit;
  
  // Create and return a new MajorCredits object with the sum and brand
  const obj: MajorCredits = {
    credit: sum,
    _brand: "Major",
  };

  return obj;
}

// Function to sum credits for minor subjects
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  // Calculate the sum of credits for minor subjects
  const sum = subject1.credit + subject2.credit;
  
  // Create and return a new MinorCredits object with the sum and brand
  const obj: MinorCredits = {
    credit: sum,
    _brand: "Minor",
  };

  return obj;
}

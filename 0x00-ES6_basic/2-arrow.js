// Define a function to manage a list of San Francisco neighborhoods
export default function NeighborhoodManager() {
  // Initialize with default neighborhoods
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Function to add a new neighborhood to the list
  this.addNeighborhood = (newNeighborhood) => {
    // Access the instance variable 'sanFranciscoNeighborhoods' using 'self' alias
    const self = this;
    self.sanFranciscoNeighborhoods.push(newNeighborhood); // Push the new neighborhood
    return self.sanFranciscoNeighborhoods; // Return the updated list of neighborhoods
  };
}


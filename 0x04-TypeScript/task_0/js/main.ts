interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentList: Student [] = [
{
  firstName: "abebe",
  lastName: "beso",
  age: 27,
  location: "Arizona",
},
{
  firstName: "Chala",
  lastName: "Chube",
  age: 27,
  location: "Denver",
  }
];
const tableBody = document.querySelector("tbody");

// Loop through the studentsList array and append a new row for each student
studentsList.forEach(function(student) {
  const row = document.createElement("tr");

  // Create and append cells for first name and location
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});

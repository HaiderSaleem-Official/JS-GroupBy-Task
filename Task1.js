const array = [
  { id: 1, name: "Bilal", city: "Lahore" },
  { id: 1, name: "Bilal", city: "Lahore" },
  { id: 3, name: "Hafsa", city: "Karachi" },
  { id: 4, name: "Rehan", city: "Lahore" },
  { id: 5, name: "Saqib", city: "Karachi" },
  { id: 6, name: "Farhan", city: "Islamabad" },
];

const result = array.reduce((acc, currVal) => {
  const city = currVal.city;
  if (!acc[city]) {
    acc[city] = [];
  }
  acc[city].push(currVal);
  return acc;
}, {});

console.log("Output is Given By:", result);

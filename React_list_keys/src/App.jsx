// import React from "react";
// export default function App() {
//   const numbers = [1, 2, 3, 4, 5];

//   console.log("numbers", numbers);

//   // does an action for each item in the array "numbers"
//   numbers.forEach((num) => {
//     console.log(num);
//   });

//   const doubledNumbers = numbers.map((num) => {
//     return <div key={num}>{num * 2}</div>;
//   });

//   console.log("doubledNumbers", doubledNumbers);
// }

import React from "react";

// Sample movie data
const movies = [
  { id: "1", name: "moviename1" },
  { id: "2", name: "moviename2" },
  { id: "3", name: "moviename3" },
  { id: "4", name: "moviename4xxx" },
  { id: "5", name: "moviename4xx1" },
];

export default function App() {
  // To show movies longer than 12 letters
  const longMovies = movies.filter((movie) => movie.name.length > 12);

  return (
    <div>
      <h1>Movies longer than 12 characters</h1>
      {/* Display movies longer than 12 letters */}
      <ul>
        {longMovies.map((movie) => (
          // Use the movie id as the key
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>

      <h1>All Movies</h1>
      {/* Display all movies */}
      <ul>
        {movies.map((movie) => (
          // Use the movie id as the key
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}

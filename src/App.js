import React from "react";
import Pagination from "pagination-react-hooks";
import "./App.css";

function App() {
  const posts = [
    { id: "1", name: "Berat 1" },
    { id: "2", name: "Berat 2" },
    { id: "3", name: "Berat 3" },
    { id: "4", name: "Berat 4" },
    { id: "5", name: "Berat 5" },
    { id: "6", name: "Berat 6" },
  ];

  const show = (value) => (
    <li key={value.id} className="card">
      <span>{value.name}</span>
    </li>
  );
  console.log(1)
  return (
    <Pagination
      data={posts}
      Show={show}
      displayNumber="3"
      previousText="Previous"
      nextText="Next"
    />
  );
}

export default App;

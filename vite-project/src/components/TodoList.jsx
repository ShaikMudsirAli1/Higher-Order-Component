import React, { useState, useEffect } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  // const [todos, setTodos] = useState([]);
  // const [term, setTerm] = useState("");

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const json = await res.json();
  //     setTodos(json);
  //     console.log(todos);
  //   };
  //   fetchTodos();
  // }, []);

  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong style={{ paddingLeft: "20px" }}>{todo.title}</strong>
          <br></br> <hr />
        </p>
      </div>
    );
  });

  // let filteredTodos = todos
  //   .filter(({ title }) => {
  //     return title.indexOf(term) >= 0;
  //   })
  //   .slice(0, 10)
  //   .map((todo) => {
  //     return (
  //       <div key={todo.userId}>
  //         <p>
  //           <strong style={{ paddingLeft: "20px" }}>{todo.title}</strong>
  //           {/* <br></br> <hr /> */}
  //           {/* <strong>{user.email}</strong> */}
  //         </p>
  //       </div>
  //     );
  //   });

  return (
    <div style={{ color: "white", paddingLeft: "50px" }}>
      {/* <h1 style={{ color: "green", paddingLeft: "40px" }}>Todos Title</h1>
      <input
        style={{ color: "green", paddingLeft: "40px" }}
        type="text"
        value={term}
        placeholder="search..."
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      <div> {renderTodos} </div>
      {/* <div> {renderUsers} </div> */}
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;

import React, { useState, useEffect } from "react";
import HOC from "./HOC";

const UserList = ({ data }) => {
  // const [users, setUsers] = useState([]);
  // const [term, setTerm] = useState("");

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const json = await res.json();
  //     setUsers(json);
  //     console.log(users);
  //   };

  //   fetchUsers();
  // }, []);

  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong style={{ paddingLeft: "20px" }}>{user.name}</strong>
          <br></br> <hr />
          <strong>{user.email}</strong>
        </p>
      </div>
    );
  });

  // let filteredUsers = users
  //   .filter(({ name }) => {
  //     return name.indexOf(term) >= 0;
  //   })
  //   .map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p>
  //           <strong style={{ paddingLeft: "20px" }}>{user.name}</strong>
  //           <br></br> <hr />
  //           {/* <strong>{user.email}</strong> */}
  //         </p>
  //       </div>
  //     );
  //   });

  return (
    <div>
      {/* <h1 style={{ color: "red" }}>Users Name</h1>
      <input
        type="text"
        value={term}
        placeholder="search..."
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      <div> {renderUsers} </div>
      {/* <div> {renderUsers} </div> */}
    </div>
  );
};

// Returns NEw Component.

// HOC IS A FUNCTION THAT TAKES A COMPONENT AND RETURNS
// A NEW COMPONENT.
const SearchUsers = HOC(UserList, "users");

export default SearchUsers;

import "./App.css";
import SearchTodos from "./components/TodoList";
//import TodoList from "./components/TodoList";
import SearchUsers from "./components/UserList";
//import UserList from "./components/UserList";

function App() {
  return (
    <>
      <h1>Higher Order Component</h1>
      <div className="section">
        <div>
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "할 일 예시 1", date: "목요일", completed: false },
    { id: 2, text: "할 일 예시 2", date: "금요일", completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now(), completed: false }]);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <header className="content-header">
          <h1>관리함</h1>
        </header>
        <TodoList todos={todos} onAdd={addTodo} />
      </main>
    </div>
  );
}

export default App;

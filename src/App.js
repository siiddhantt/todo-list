// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Footer from './Components/Footer';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(todoList.filter((e) => { return e !== todo }))
  }
  const [todoList, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList])

  const addTodo = (job, desc) => {
    let snum = 1;
    if (todoList.length !== 0) { snum = todoList[todoList.length - 1].sno + 1; }
    let myTodo = {
      sno: snum,
      job: job,
      desc: desc
    }
    setTodos([...todoList, myTodo]);
  }
  return (
    <>
      <Router>
        <Header title="Todos-List" />
        <Routes>
          <Route exact path="/" element={<><AddTodo addTodo={addTodo} /> <Todos title="The List" todos={todoList} onDelete={onDelete} /></>} >
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
import React, {useReducer} from 'react';
// import logo from './logo.svg';
import './App.css';
import { intialState , todoReducer } from './reducers/addTodoReducer'

import Todo from './components/todo';



function App() {

  const [state,dispatch] = useReducer(todoReducer,intialState )

  const addTodo = (item) => {
    dispatch({ type: "UPDATE_TODO", payload: item })
  }
  
  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id })
  }

  const removeTodo = () => {
    dispatch({ type: "REMOVE_COMPLETED" })
  }

  console.log()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reducer To-do</h1>
      </header>
      <div className='body'>
        <Todo addTodo={addTodo} todos={state.todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      </div>
    </div>
  );
}

export default App;

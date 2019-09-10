import React, { useState, useReducer } from 'react';
// import TodoAdd from './todoadd';
import { intialState , todoReducer } from '../reducers/addTodoReducer'


function Todo(props) {
	const [ newTodo, setNewTodo ] = useState('');

	const handleChanges = (event) => {
		setNewTodo(event.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(newTodo)
        props.addTodo(newTodo)
        setNewTodo('')
    }

	return (
		<div>
			<h1>Todo-List Form</h1>
			<br />
			<div>
				{props.todos.map((todo) => {
					return (
						<ul key={todo.id}>
							<li>{todo.item}</li>
						</ul>
					);
				})}
			</div>
			<br />
			<div>
				<h2>Add Your Own Todo:</h2>
			</div>

			<form onSubmit={handleSubmit}> 
				<div>
                    <input 
                    name="newTodo" 
                    placeholder="Add Your Todo" 
                    value={newTodo} 
                    onChange={handleChanges} 
                    />

					<button>Submit Todo</button>
					<button>Remove</button>
				</div>
			</form>
		</div>
	);
}

export default Todo;

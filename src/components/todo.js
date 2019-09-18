import React, { useState } from 'react';
// import TodoAdd from './todoadd';
// import { intialState , todoReducer } from '../reducers/addTodoReducer'


function Todo(props) {
	const [ newTodo, setNewTodo ] = useState('');

	const handleChanges = (event) => {
		setNewTodo(event.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(newTodo)
        props.addTodo(newTodo)
        setNewTodo('')
	}
	
	const Clear = event => {
		event.preventDefault();
		props.removeTodo();
	}

	return (
		<div>
			<h1>Todo-List Form</h1>
			<br />
			<div>
				{props.todos.map((todo) => {
					return (
						<ul key={todo.id}>
							<li 
							onClick={()=> props.toggleTodo(todo.id)}
							// className={todo.completed ? 'completed' : ""}
							style={{ textDecoration: todo.completed ? "line-through" : "none" }}
							>{todo.item}</li>
                            {console.log(props.todos)}
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
					<button onClick={Clear}>Remove</button>
				</div>
			</form>
            <br></br>
		</div>
	);
}

export default Todo;


export const intialState = {
    todos: [
        {
          item: "Learn about reducers",
          completed: false,
          id: 3892987543
        },
        {
          item: "Go to standup",
          completed: false,
          id: 3892987581
        },
        {
          item: "Become a TL",
          completed: false,
          id: 3292987584
        },
        {
          item: "Steal Devin's Birds",
          completed: false,
          id: 3892987580
        },
        {
          item: "Acquire Currency",
          completed: false,
          id: 3898987589
        }
      ]
    
}

export const todoReducer = (state,action) => {
    switch(action.type) {
        case "UPDATE_TODO":
            return {
                ...state,
                todos : [...state.todos, 
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }]
            };
            case "TOGGLE_TODO":
            return {
                ...state, 
                todos: state.todos.map(todo => 
                  todo.id === action.payload ? 
                  { ...todo, completed : !todo.completed } 
                  : todo)
              };
            case "REMOVE_COMPLETED":
              return {
                ...state,
                todos: state.todos.filter(todo => {
                   if (todo.completed === true) {
                     return false
                   } else {
                     return true
                   }
                })
              };
        default: 
            return state;
    }
}
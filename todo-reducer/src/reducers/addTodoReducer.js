
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
        default: 
            return state;
    }
}
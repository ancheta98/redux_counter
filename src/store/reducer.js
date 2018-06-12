const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADDFIVE':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBFIVE':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                //important to use concat here not push, concat creates new array; push would change the original array
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            //not good bc it will touch the original array
            // const id = 2
            // state.results.splice(id, 1);
            //create a copy method 1
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            //method 2
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                //important to use concat here not push, concat creates new array; push would change the original array
                ...state,
                results: updatedArray
            }
    }
    //method below less concise
    // if (action.type === 'INCREMENT'){
    //     return {
    //         counter: state.counter + 1
    //     }
    // };
    // if (action.type === 'DECREMENT'){
    //     return {
    //         counter: state.counter - 1
    //     }
    // };
    // if (action.type === 'ADDFIVE'){
    //     return {
    //         counter: state.counter + action.value
    //     }
    // };
    // if (action.type === 'SUBFIVE'){
    //     return {
    //         counter: state.counter - action.value
    //     }
    // };
  return state;
};

export default reducer;

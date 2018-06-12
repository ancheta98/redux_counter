const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        case 'ADDFIVE':
            return {
                counter: state.counter + action.value
            }
        case 'SUBFIVE':
            return {
                counter: state.counter - action.value
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

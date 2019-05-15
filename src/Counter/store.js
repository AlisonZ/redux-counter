import {createStore} from 'redux';

export function reducer(state = 0, action = {}) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export function increment() {
    return {type: 'INCREMENT'};
}

export function decrement() {
    return {type: 'DECREMENT'};
}

export default createStore(reducer);

// const store = createStore(reducer);

// store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

/**
 * Action:
 * 
 * {
 *   type: 'INCREMENT'
 * }
 * 
 * {
 *   type: 'DECREMENT'
 * }
 * 
 * State:
 * 
 * Number (0)
 */
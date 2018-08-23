import { createStore } from 'redux';

// Action generators: functions that return action object

const incrementCount = ({ incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy 
  }) ;

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ( {count }) => ({
  type: 'SET',
  count: count
});

const resetCount = () => ({
  type: 'RESET'
});


// Reducers
// 1. Are pure functions: Output is determined by input
// 2. Never change state of actions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
      count: state.count + action.incrementBy
    }
    case 'DECREMENT':
      return {
      count: state.count - action.decrementBy
    }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default: 
      return state;
  }
}

const store = createStore(countReducer);

// eslint-disable-next-line
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 3}));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101}));
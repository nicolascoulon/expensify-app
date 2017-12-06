import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1})= () => ({
    type: 'INCREMENT',
     incrementBy
})
const decrementCount = ({decrementBy = -1}) = () => ({
    type: 'INCREMENT',
    decremountBy
})
const setCount = () => {
    type: 'SET'
}
const resetCount = ({ count }) => {
    type: 'RESET'
}

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {  
        case 'INCREMENT':
    
          return {
              count: state.count + action.incrementBy
            }
        case 'DECREMENT':
             return {
                 count: state.count - action.decremountBy
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
           return state     
        }
};
const store = createStore(countReducer);

store.subscribe( () => {
    console.log(store.getState());
})
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrement: 10}));
store.dispatch(resetCount());
store.dispatch(setCount( {count: 101} ));



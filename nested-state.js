const redux = require('redux');
const initialState = {
    name: 'Sourav',
    address: {
        street: '23B Main Street',
        city: 'Gotham',
        state: 'LA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED';
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
       address: {
        ...state.address,
        street: action.payload
       }
      };

    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe =store.subscribe(() => console.log('Initial State', store.getState()));
store.dispatch(updateStreet('123'));
unsubscribe();
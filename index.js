// Reducer - (pState, action) => newState
const redux = require('redux');
const createStore = redux.createStore;
//Bind action creator
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

const orderIcecream = () => {
    return {
        type: ICECREAM_ORDERED,
        payload: 1,
    }
}

function cakeRestock(qtn =1){
    return {
        type: CAKE_RESTOCKED,
        payload: qtn,
    }
}

const iceCreamRestocked = (qtn =1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qtn,
    }

}

// const initialState = {
//     numOfCakes:10,
//     numOfIcecream: 20
// }

const initialCakeState = {
    numOfCakes:10
}

const initialIceCreamState = {
    numOfIcecream: 20
}
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload,
//       };
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numOfIcecream: state.numOfIcecream - 1,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numOfIcecream: state.numOfIcecream + action.payload,
//       };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({cake : cakeReducer, iceCream: iceCreamReducer});
const store = createStore(rootReducer);
console.log('Intial State', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(cakeRestock(3))

const actions = bindActionCreators({orderCake, cakeRestock, orderIcecream, iceCreamRestocked}, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.cakeRestock(3);
actions.orderIcecream();
actions.orderIcecream();
actions.iceCreamRestocked(3);



unsubscribe();
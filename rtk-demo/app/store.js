const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("../feature/cake/cakeSlice");
const icecreamReducer = require("../feature/icecream/icecreamSlice");

const store = configureStore({
  reducer: { cake: cakeReducer, icecream: icecreamReducer },
});

module.exports = store;

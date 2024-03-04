const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require('../feature/cake/cakeSlice');

const store = configureStore({
  reducer: { cake: cakeReducer },
});

module.exports = store
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

console.log(store.getState());

store.dispatch(
  addExpense({ description: "Water Bill", amount: 4500, createdAt: 5000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", createdAt: 6000, amount: 75000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 109500, createdAt: 3000 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

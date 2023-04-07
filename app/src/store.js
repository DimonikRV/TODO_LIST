import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { tasksListReducer } from "./tasks/tasks.reducer";

const reducer = combineReducers({
  tasksList: tasksListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

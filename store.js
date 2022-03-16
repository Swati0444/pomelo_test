import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getRootReducer from "./src/reducers/index";

let middleware = [thunk];
export default function getStore() {
  const routeReducer = getRootReducer();
  const store = createStore(routeReducer, {}, applyMiddleware(...middleware));
  return store;
}

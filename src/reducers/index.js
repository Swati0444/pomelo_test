import { combineReducers } from "redux";
import news from "./news_store";

export default function getRootReducer() {
  return combineReducers({
    news,
  });
}

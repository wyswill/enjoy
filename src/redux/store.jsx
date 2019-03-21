import { createStore } from "redux";
import rootReducer from "./reduc";
export default function configureStore() {
  const store = createStore(
    rootReducer,
    window.window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined
  );
  return store;
}

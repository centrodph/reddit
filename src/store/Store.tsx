import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "pages/App/App";
import configureStore from "./configStore";

const { persistor, store } = configureStore();
function Store() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
export { store };
export default Store;

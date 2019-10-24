import React from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productReducer from "./store/reducers/products";
import ShopNavigator from "./navigations/ShopNavigator";

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
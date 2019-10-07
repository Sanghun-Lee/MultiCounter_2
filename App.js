import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Main from "./src/Main";

import { createStore } from "redux";
import reducers from "./src/reducers";
import { Provider } from "react-redux";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

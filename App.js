import "./App/Config/ReactotronConfig";
import "./App/Config";

import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

import { Provider } from "mobx-react";

import stores from "./App/MobX";

import RootContainer from "./App/Containers/RootContainer";

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <RootContainer />
      </Provider>
    );
  }
}

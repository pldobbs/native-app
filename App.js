import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import ProjectDetail from "./screens/ProjectDetail";

const RootNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Project: { screen: ProjectDetail }
  },
  { initialRouteName: "Home" }
);
export default class App extends Component {
  render() {
    return <RootNavigator />;
  }
}

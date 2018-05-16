import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import ProjectDetail from "./screens/ProjectDetail";
import ProjectStudents from "./screens/ProjectStudents";

const TabNavigation = TabNavigator({
  Project: { screen: ProjectDetail },
  Students: { screen: ProjectStudents }
});
const RootNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    ProjectTab: TabNavigation
  },
  { initialRouteName: "Home" }
);
export default class App extends Component {
  render() {
    return <RootNavigator />;
  }
}

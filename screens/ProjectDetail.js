import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

export default class ProjectDetail extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: navigation.state.params.data.name
  // });
  constructor(props) {
    super(props);
    this.pizza = this.props.navigation.state.params.data;
  }
  render() {
    return (
      <ScrollView>
        <Text>{this.pizza.name}</Text>
        <Text />
        <Text>{this.pizza.description}</Text>
      </ScrollView>
    );
  }
}

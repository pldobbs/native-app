import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import ProjectCard from "../components/ProjectCard";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Covalence Projects"
  };
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentWillMount() {
    this.setState({
      projects: [
        { name: "Test Project 1", description: "Cool Project!" },
        { name: "Test Project 2", description: "Bad Ass Project!" },
        { name: "Test Project 3", description: "Awesome Project!" },
        { name: "Test Project 4", description: "Lame Project!" }
      ]
    });
  }
  switchScreen(data) {
    this.props.navigation.navigate("Project", { data });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              project={project}
              Navigate={() => this.switchScreen(project)}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
});

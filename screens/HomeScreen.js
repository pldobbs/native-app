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
  async componentWillMount() {
    try {
      let results = await fetch(
        "https://gravity.covalence.io/api/graduation/projects"
      );
      let projects = await results.json();
      this.setState({ projects });
    } catch (err) {
      console.log(err);
    }
  }
  switchScreen(data) {
    this.props.navigation.navigate("ProjectTab", { data });
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

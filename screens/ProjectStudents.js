import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

export default class ProjectStudents extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: navigation.state.params.data.name
  // });
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
    this.project = this.props.navigation.state.params.data;
  }
  async componentWillMount() {
    try {
      let results = await fetch(
        `https://gravity.covalence.io/api/graduation/teams/${this.project.id}`
      );
      let students = await results.json();
      this.setState({ students });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <ScrollView>
        {this.state.students.map((student, index) => {
          return (
            <Text key={index}>
              {student.firstname} {student.lastname}
            </Text>
          );
        })}
      </ScrollView>
    );
  }
}

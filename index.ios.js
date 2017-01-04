import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View } from 'react-native';

export default class HiGuys extends Component {
  constructor(props) {
    super(props);
    this.state = {text: "Hi Bharat and Will!", buttonTitle: "Press me"};
    console.log(this)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
        <Button
          title={this.state.buttonTitle}
          color="red"
          onPress={
            () => {
              this.setState({
                text: "I'm enjoying learning React Native!",
                buttonTitle: ""
              });
            }
          }
        />
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});

AppRegistry.registerComponent('ConductorProject', () => HiGuys);

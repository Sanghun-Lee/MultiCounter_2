import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
  };

  // onIncrement는 props로 CounterContainer.js에 있는

  static defaultProps = {
    index: 0,
    number: 0,
    color: "black",
    onIncrement: function aa() {
      return alert("increment");
    },
    onDecrement: () => alert("decrement"),
    onSetColor: () => alert("onSetColor")
  };

  render() {
    const color = this.props.color;
    // const props = this.props;
    // console.log(props);
    return (
      <View style={styles.container}>
        <View style={[styles.textView, { backgroundColor: color }]}>
          <Text style={styles.text}>{this.props.number}</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={this.props.onIncrement}
            style={styles.buttons}
          >
            <Text>++</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.onDecrement}
            style={styles.buttons}
          >
            <Text>--</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.onSetColor}
            style={styles.buttons}
          >
            <Text>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  textView: {
    flex: 3,
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    color: "white"
  },
  button: {
    flex: 2,
    flexDirection: "row"
  },
  buttons: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: "skyblue",
    margin: 3,
    justifyContent: "center",
    alignItems: "center"
  }
});

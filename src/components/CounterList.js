/*
 * 여러 counter들을 랜더링 해 줄 CounterList
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Counter from "./Counter";

export default class CounterList extends Component {
  static propTypes = {
    counters: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
      })
    ),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
  };

  static defaultProps = {
    counters: [],
    onIncrement: () => alert("onIncrement not defined"),
    onDecrement: () => alert("onDecrement not defined"),
    onSetColor: () => alert("onSetColor not defined")
  };

  render() {
    return (
      <View style={{ marginTop: 10, justifyContent: "center", margin: 5 }}>
        {this.props.counters.map((counter, i) => {
          return (
            <Counter
              key={i}
              index={i}
              {...counter}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onSetColor={this.props.onSetColor}
            />
          );
        })}
      </View>
    );
  }
}

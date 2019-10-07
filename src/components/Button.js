import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import PropTypes from "prop-types";

const screenWidth = Math.round(Dimensions.get("window").width);

export default class Button extends Component {
  static propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
  };

  static defaultProps = {
    onCreate: () => alert("Create"),
    onRemove: () => alert("Remove")
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={this.props.onCreate}
            style={[styles.Button, { backgroundColor: "green" }]}
          >
            <Text style={styles.text}>생성</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.onRemove}
            style={[styles.Button, { backgroundColor: "red" }]}
          >
            <Text style={styles.text}>제거</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#35CBEE",
    height: Constants.statusBarHeight
  },
  container: {
    height: 60,
    width: screenWidth
  },
  text: {
    fontSize: 20,
    color: "white"
  },
  Button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

import React, { Component } from "react";
import { View } from "react-native";
import Button from "./components/Button";
import CounterListContainer from "./containers/CounterListContainer";

import { connect } from "react-redux";
import * as actions from "./actions";

import { getRandomColor } from "./utils";

class Main extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <View>
        <Button onCreate={onCreate} onRemove={onRemove} />
        <CounterListContainer />
      </View>
    );
  }
}

// 액션함수 준비
const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: index => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다.
export default connect(
  null,
  mapToDispatch
)(Main);

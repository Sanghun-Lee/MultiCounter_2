import * as types from "./ActionTypes";

// 기존 생성자들은 특정 카운터를 조작해야 되기 때문에 index를 필요로 한다.
export const increment = index => ({
  type: types.INCREMENT,
  index
});

export const decrement = index => ({
  type: types.DECREMENT,
  index
});

// 파라미터를 가지고있다.
export const setColor = ({ color, index }) => ({
  type: types.SET_COLOR,
  color,
  index
});

export const create = color => ({
  type: types.CREATE,
  color
});

export const remove = () => ({
  type: types.REMOVE
});

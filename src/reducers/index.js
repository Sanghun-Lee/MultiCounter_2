import * as types from "../actions/ActionTypes";

// 초기상태 정의
const initialState = {
  counters: [
    {
      color: "black",
      number: 0
    }
  ]
};

// 리듀서 함수 정의
function counter(state = initialState, action) {
  const { counters } = state; // getState같은건가
  console.log(action);

  switch (action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color, // action생성자에서 color
            number: 0
          }
        ]
      };
    // slice를 이용해서 가장 마지막의 counter를 제거한다.
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1)
      };

    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index), // 0 ~ action.index 사이의 아이템들을 잘라와서 이 자리에 넣는다
          {
            ...counters[action.index], // 기존 값은 유지하면서
            number: counters[action.index].number + 1 // number 값을 덮어쓴다
          },
          ...counters.slice(action.index + 1, counters.length) // action.index + 1 ~ 마지막까지 잘라온
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
}

export default counter;

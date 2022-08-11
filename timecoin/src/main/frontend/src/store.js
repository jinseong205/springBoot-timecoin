//action
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

const initstate = {
  username: '',
  number: 0,
};

//액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload }; //return 되면 그걸 호출한쪽에서 받는게 아니라 return 되는순간 ui 변경
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
